const GAMES = {
  TOMATO_AVOCADO: 'game-tomato-avocado',
  WHO_YOU_ARE: 'game-who-you-are'
}

export const PAGE_NAMES = {
  HOME: 'home',
  GAME_TOMATO_AVOCADO: GAMES.TOMATO_AVOCADO,
  GAME_WHO_YOU_ARE: GAMES.WHO_YOU_ARE,
  PAGE_NOT_FOUND: 'page-not-found'
};

export const STEPS = {
  START: 0,
  ACT: 1,
  PLAY: 2,
  END: 3,
}

export const TYPES = {
  GENERAL: 'general',
  ADDITIONAL: 'additional',
}


export const PRODUCTS = {
  TOMATO: 'tomato',
  AVOCADO: 'avocado',
  BEET: 'beet',
  CHILLI: 'chilli',
  REDISH: 'redish',
  LYCHEE: 'lychee',
  POMEGRANATE: 'pomegranate',
  CELERY: 'celery',
  CUCUMBER: 'cucumber',
  BROCCOLI: 'broccoli',
  KIWI: 'kiwi',
  PEAS: 'peas'
};
const { TOMATO, AVOCADO, BEET, CHILLI, REDISH, LYCHEE, POMEGRANATE, CELERY, CUCUMBER, BROCCOLI, KIWI, PEAS } = PRODUCTS;

export const LIKE_PRODUCT_COLOR = {
  [TOMATO]: [TOMATO, BEET, CHILLI, REDISH, LYCHEE, POMEGRANATE],
  [AVOCADO]: [AVOCADO, CELERY, CUCUMBER, BROCCOLI, KIWI, PEAS]
};

export const PLAY_TIME = 30000;

export const ACTION_MESSAGES = {
  NOT_ENOUGH_PLAYERS: 'you need at least two players to play',
  START: 'if all the players in the assembly start the game',
  WAIT_START: 'wait, everybody should come up with nicknames',
  ASK: 'you can ask',
  ANSWER: 'answer the question',
  WAIT: '...wait'
}
