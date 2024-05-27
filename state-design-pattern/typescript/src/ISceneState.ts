import { SceneStateController } from './SceneStateController';

export class ISceneState {
  private m_StateName: string = 'ISceneState';

  public get StateName(): string {
    return this.m_StateName;
  }

  public set StateName(value: string) {
    this.m_StateName = value;
  }

  protected m_Controller: SceneStateController | null = null;

  constructor(Controller: SceneStateController) {
    this.m_Controller = Controller;
  }

  public StateBegin(): void {}
  public StateEnd(): void {}
  public StateUpdate(): void {}

  public toString(): string {
    return `[ISceneState: StateName=${this.StateName}]`;
  }
}
