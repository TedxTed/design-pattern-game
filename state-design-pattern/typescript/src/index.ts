// import { Application } from './Application';
// import { SceneManager } from './SceneManager';

// import { ConcreteStateA, Context } from './Context';

// // scene
// const app = new Application();
// const sceneManager = new SceneManager(app);

// sceneManager.changeScene('menu');
// sceneManager.changeScene('mainScene');
// sceneManager.changeScene('unknown');

// // context
// const context = new Context();
// context.setState(new ConcreteStateA(context));
// context.request(5); // ConcreteStateA.handle
// context.request(15); // ConcreteStateA.handle -> ConcreteStateB.handle
// context.request(25); // ConcreteStateB.handle -> ConcreteStateC.handle
// context.request(35); // ConcreteStateC.handle -> ConcreteStateA.handle

import { GameLoop } from './GameLoop';

const gameLoop = new GameLoop();
gameLoop.Start();
