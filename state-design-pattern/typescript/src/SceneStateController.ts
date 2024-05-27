// SceneStateController.ts
import { ISceneState } from './ISceneState';

export class SceneStateController {
  private m_State: ISceneState | null = null;
  private m_bRunBegin: boolean = false;

  constructor() {}

  public SetState(State: ISceneState, LoadSceneName: string): void {
    this.m_bRunBegin = false;

    if (this.m_State !== null) {
      this.m_State.StateEnd();
    }

    this.LoadScene(LoadSceneName);
    this.m_State = State;

    this.StateUpdate();
  }

  private LoadScene(LoadSceneName: string): void {
    if (LoadSceneName === null || LoadSceneName.length === 0) {
      return;
    }

    console.log(`Loading scene: ${LoadSceneName}`);
  }

  public async StateUpdate(): Promise<void> {
    if (this.m_State !== null && this.m_bRunBegin === false) {
      await this.m_State.StateBegin();
      this.m_bRunBegin = true;
    }

    if (this.m_State !== null) {
      await this.m_State.StateUpdate();
    }
  }
}
