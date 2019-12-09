import R from 'ramda';
import {
  interval, BehaviorSubject, Subject,
} from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { takeWhile, distinctUntilChanged, filter } from 'rxjs/operators';


export class RxWebsocketSubject extends Subject {
  connectionStatus$; // socket connection status

  reconnectionObservable$; // observable holding reconnection status

  socket$;

  wsSubjectConfig;

  isClosed = false; // is connection closed for reconnects (so we don't reconnect when we close/fail)

  reconnectInterval; // pause between connections

  reconnectAttempts; // number of connection attempts

  constructor(url, reconnectInterval = 5000, reconnectAttempts = 20) {
    super();

    this.reconnectInterval = reconnectInterval;
    this.reconnectAttempts = reconnectAttempts;

    this.connectionStatus$ = new BehaviorSubject({
      isConnected: false,
      initial: true, // if value is initial
    }).pipe(distinctUntilChanged(), filter(R.compose(isBoolean, R.prop('isConnected'))));

    // config for WebSocketSubject
    // except the url, here is closeObserver and openObserver to update connection status
    this.wsSubjectConfig = {
      url,
      protocol: 'wss',
      closeObserver: {
        next: (e) => {
          const err = new Error(`socket collapsed: ${url}`);
          console.log(err, e); // eslint-disable-line no-console
          // captureError(err);
          this.socket$ = null;
          this.connectionStatus$.next({
            isConnected: false,
          });
        },
      },
      openObserver: {
        next: () => {
          this.connectionStatus$.next({
            isConnected: true,
          });
        },
      },
    };

    // we follow the connection status and run the reconnect while losing the connection
    this.connectionStatus$.subscribe(({ isConnected, initial }) => {
      if (this.reconnectionObservable$ && isConnected) { // successfully reconnected
        this.reconnectionObservable$ = null; // we don't need this until next reconnect
      }

      if (
        !this.reconnectionObservable$ // reconnect is not in progress
        && !isConnected // we're not currently connected to socket
        && !initial // this is not the initial status message
        && !this.isClosed // socket isn't closed for reconnection attempts
      ) {
        this.reconnect();
      }
    });
  }

  connect = () => {
    if (!this.socket$) {
      this.socket$ = new WebSocketSubject(this.wsSubjectConfig);
      this.socket$.subscribe(
        (message) => {
          this.next(message); // when receiving a message, we just send it through our Subject
        },
        (error) => {
          // captureError(error);
          console.log(error);
        }
      );
      this.isClosed = false; // we cannot hold closed if we connect
    }

    return this;
  };

  reconnect = () => {
    this.reconnectionObservable$ = interval(this.reconnectInterval)
      .pipe(takeWhile((_, i) => i < this.reconnectAttempts && !this.socket$));
    this.reconnectionObservable$.subscribe(this.connect, null, () => {
      // if the reconnection attempts are failed, then we call complete of our Subject and status
      this.reconnectionObservable$ = null;
      this.completeAll();
    });
  };

  /**
   * Sometimes we want to manually close the connection (e.g. when we leave target page)
   */
  close = () => {
    this.isClosed = true; // closing for reconnection
    if (!this.socket$) {
      return;
    }
    this.socket$.unsubscribe();
  };

  /**
   * Dead point: reconnect attemps fail and we no longer try to restore the connection
   */
  completeAll = () => {
    if (!this.socket$) {
      this.complete();
      this.connectionStatus$.complete();
    }
  };

  // sending the message to the server
  send = (data) => {
    this.socket$.next(data);
  }
}
