import { Position } from "./position";

export class LoggingPositionWithAccessor extends Position {
  log: string[] = [];
  _x: number;
  _y: number;

  constructor(x: number, y: number) {
    super(x, y);
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this.log?.push(`x changed to ${value}`);
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this.log?.push(`y changed to ${value}`);
    this._y = value;
  }
}
