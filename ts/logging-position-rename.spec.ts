import { LoggingPositionWithRenamedAccessor } from "./logging-position-rename";

test("X setter writes to log", () => {
  const position = new LoggingPositionWithRenamedAccessor(1, 2);
  position.X = 3;
  expect(position.log).toEqual(["x changed to 3"]);
});

test("Y setter writes to log", () => {
  const position = new LoggingPositionWithRenamedAccessor(1, 2);
  position.Y = 3;
  expect(position.log).toEqual(["y changed to 3"]);
});

test("move doesn't write to log", () => {
  const position = new LoggingPositionWithRenamedAccessor(1, 2);
  position.move(3, 4);
  expect(position.log).toEqual([]);
});
