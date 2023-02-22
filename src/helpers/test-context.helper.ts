import { singleton } from 'tsyringe';

@singleton()
export class TestContext {
  private readonly data: Map<string, any>;
  constructor() {
    this.data = new Map();
  }

  public addTestData(key: string, value: any): void {
    this.data.set(key, value);
  }

  public getTestData(key: string): any {
    return this.data.get(key);
  }
}
