import { GameLoop } from './GameLoop';
import { ISceneState } from './ISceneState';
import { SceneStateController } from './SceneStateController';

export class MainMenuState extends ISceneState {
  constructor(Controller: SceneStateController) {
    super(Controller);
    this.StateName = 'MainMenuState';
  }

  public StateBegin(): void {
    const gameLoop = new GameLoop();
    gameLoop.Start();
  }
}
