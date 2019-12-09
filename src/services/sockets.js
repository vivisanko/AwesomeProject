import { RxWebsocketSubject } from './rx-websocket';
// import { webSocket } from "rxjs/webSocket";
import { WebSocketSubject } from 'rxjs/webSocket';

// const subject = webSocket("ws://localhost:8080");


let statsMessagesUpdatesSubject = null;

export const getStatsUpdatesSubject = () => new RxWebsocketSubject("ws://localhost:8080");

export const getStatsUpdatesSubjectSingleton = () => {
  if (!statsMessagesUpdatesSubject) {
    statsMessagesUpdatesSubject = getStatsUpdatesSubject();
  }

  return statsMessagesUpdatesSubject;
};
