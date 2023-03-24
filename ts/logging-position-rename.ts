import { Position } from "./position";

export class LoggingPositionWithRenamedAccessor extends Position {
  readonly log: string[] = [];

  constructor(x: number, y: number) {
    super(x, y);
  }

  get X(): number {
    return this.x;
  }

  set X(value: number) {
    this.log.push(`x changed to ${value}`);
    super.x = value;
  }

  get Y(): number {
    return this.y;
  }

  set Y(value: number) {
    this.log.push(`y changed to ${value}`);
    super.y = value;
  }
}
