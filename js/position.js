class Position {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

class LoggingPosition extends Position {
  log = [];
  _x;
  _y;

  constructor(x, y) {
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

module.exports = { Position, LoggingPosition };
