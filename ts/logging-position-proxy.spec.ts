import { LoggingPositionProxy } from "./logging-position-proxy";

test("setting x writes to log", () => {
  const position = LoggingPositionProxy.create(1, 2);
  position.x = 3;
  expect(position.log).toEqual(["x changed to 3"]);
});

test("setting y writes to log", () => {
  const position = LoggingPositionProxy.create(1, 2);
  position.y = 3;
  expect(position.log).toEqual(["y changed to 3"]);
});

test("move writes to log", () => {
  const position = LoggingPositionProxy.create(1, 2);
  position.move(3, 4);
  expect(position.log).toEqual(["x changed to 4", "y changed to 6"]);
});
