class Context {
  private state: State | null = null;

  public request(value: number): void {
    if (this.state) {
      this.state.handle(value);
    }
  }

  public setState(state: State): void {
    console.log('Context.setState:');
    this.state = state;
  }
}

abstract class State {
  protected context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  public abstract handle(value: number): void;
}

//狀態Ａ
class ConcreteStateA extends State {
  constructor(context: Context) {
    super(context);
  }

  public handle(value: number): void {
    console.log('ConcreteStateA.handle');
    if (value > 10) {
      this.context.setState(new ConcreteStateB(this.context));
    }
  }
}

//狀態B
class ConcreteStateB extends State {
  constructor(context: Context) {
    super(context);
  }

  public handle(value: number): void {
    console.log('ConcreteStateB.handle');
    if (value > 20) {
      this.context.setState(new ConcreteStateC(this.context));
    }
  }
}

//狀態C
class ConcreteStateC extends State {
  constructor(context: Context) {
    super(context);
  }

  public handle(value: number): void {
    console.log('ConcreteStateC.handle');
    if (value > 20) {
      this.context.setState(new ConcreteStateA(this.context));
    }
  }
}

export { Context, State, ConcreteStateA, ConcreteStateB, ConcreteStateC };
