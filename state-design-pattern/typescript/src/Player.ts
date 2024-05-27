// Player.ts
export class Player {
  private m_Health: number;
  private m_ReviveCount: number;

  constructor(health: number, reviveCount: number) {
    this.m_Health = health;
    this.m_ReviveCount = reviveCount;
  }

  public get Health(): number {
    return this.m_Health;
  }

  public set Health(value: number) {
    this.m_Health = value;
  }

  public get ReviveCount(): number {
    return this.m_ReviveCount;
  }

  public set ReviveCount(value: number) {
    this.m_ReviveCount = value;
  }

  public TakeDamage(damage: number): void {
    this.m_Health -= damage;
    if (this.m_Health <= 0) {
      this.m_ReviveCount--;
      if (this.m_ReviveCount >= 0) {
        this.m_Health = 10;
        console.log('玩家已复活');
      } else {
        console.log('Game Over');
      }
    }
  }
}
