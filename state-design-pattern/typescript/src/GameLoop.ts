// GameLoop.ts
import { Command } from 'commander';
import { select } from '@inquirer/prompts';
import { SceneStateController } from './SceneStateController';
import { MainMenuState } from './MainMenuState';
import { BattleState } from './BattleState';

export class GameLoop {
  private controller: SceneStateController;
  private program: Command;

  constructor() {
    this.controller = new SceneStateController();
    this.program = new Command();
  }

  public Start(): void {
    // this.setupCommands();
    this.program.parse(process.argv);

    if (this.program.args.length === 0) {
      this.promptUser();
    }
  }

  private async promptUser(): Promise<void> {
    const answer = await select({
      message: '選擇場景',
      choices: [
        { name: 'MainMenuScene', value: 'MainMenuScene' },
        { name: 'BattleScene', value: 'BattleScene' },
      ],
    });

    switch (answer) {
      case 'MainMenuScene':
        this.controller.SetState(new MainMenuState(this.controller), 'MainMenuScene');
        break;
      case 'BattleScene':
        this.controller.SetState(new BattleState(this.controller), 'BattleScene');
        break;
    }

    await this.controller.StateUpdate();
  }
}
