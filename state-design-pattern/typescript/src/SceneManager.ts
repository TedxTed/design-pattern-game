import { Application } from './Application';

class SceneManager {
  private mState: string = 'start';
  private application: Application;

  constructor(application: Application) {
    this.application = application;
  }

  // Change scene
  changeScene(stateName: string): void {
    this.mState = stateName;

    switch (this.mState) {
      case 'menu':
        this.application.loadLevel('MainMenuScene');
        break;
      case 'mainScene':
        this.application.loadLevel('MainScene');
        break;
      default:
        console.log(`Unknown state: ${stateName}`);
    }
  }

  // Update function
  update(): void {}
}

export { SceneManager };
