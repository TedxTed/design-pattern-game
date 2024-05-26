import { Application } from './Application';
import { SceneManager } from './SceneManager';

const app = new Application();
const sceneManager = new SceneManager(app);

sceneManager.changeScene('menu');
sceneManager.changeScene('mainScene');
sceneManager.changeScene('unknown');
