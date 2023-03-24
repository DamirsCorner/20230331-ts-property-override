export class Position {
  constructor(public x: number, public y: number) {}

  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }
}
