// BattleState.ts
import { ISceneState } from './ISceneState';
import { SceneStateController } from './SceneStateController';
import { MainMenuState } from './MainMenuState';
import { Player } from './Player';
import { input } from '@inquirer/prompts';

export class BattleState extends ISceneState {
  private m_Player: Player;

  constructor(Controller: SceneStateController) {
    super(Controller);
    this.StateName = 'BattleState';
    this.m_Player = new Player(10, 2);
  }

  public async StateBegin(): Promise<void> {
    console.log('戰鬥開始');
    await this.gameLoop();
  }

  public StateEnd(): void {
    console.log('戰鬥結束');
  }

  public StateUpdate(): void {
    if (this.m_Player.Health <= 0 && this.m_Player.ReviveCount < 0) {
      if (this.m_Controller !== null) {
        this.m_Controller.SetState(new MainMenuState(this.m_Controller), 'MainMenuScene');
      }
    }
  }

  private async gameLoop(): Promise<void> {
    while (this.m_Player.Health > 0 || this.m_Player.ReviveCount >= 0) {
      const answer = await input({
        message: '輸入攻擊值',
        validate: (value) => {
          const damage = parseInt(value);
          if (isNaN(damage)) {
            return '無效傷害值';
          }
          return true;
        },
      });

      const damage = parseInt(answer);
      this.m_Player.TakeDamage(damage);
      console.log(`當前生命: ${this.m_Player.Health}`);
      console.log(`復活次數: ${this.m_Player.ReviveCount}`);
      this.StateUpdate();
    }
  }
}
