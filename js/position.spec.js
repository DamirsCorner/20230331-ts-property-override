const LoggingPosition = require("./position").LoggingPosition;

test("x setter doesn't write to log", () => {
  const position = new LoggingPosition(1, 2);
  position.x = 3;
  expect(position.log).toEqual([]);
});

test("z setter doesn't write to log", () => {
  const position = new LoggingPosition(1, 2);
  position.y = 3;
  expect(position.log).toEqual([]);
});

test("move doesn't write to log", () => {
  const position = new LoggingPosition(1, 2);
  position.move(3, 4);
  expect(position.log).toEqual([]);
});
