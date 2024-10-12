import { cloudstate } from "freestyle-sh";

@cloudstate
export class CounterCS {
  static readonly id = "counter";
  value: number = 0;

  increment(): number {
    return ++this.value;
  }

  getCount(): number {
    return this.value;
  }
}
