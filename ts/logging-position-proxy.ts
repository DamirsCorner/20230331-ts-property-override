import { Position } from "./position";

export class LoggingPositionProxy extends Position {
  readonly log: string[] = [];

  private constructor(x: number, y: number) {
    super(x, y);
  }

  static create(x: number, y: number): LoggingPositionProxy {
    const loggingPositionProxy = new LoggingPositionProxy(x, y);

    const proxyHandler: ProxyHandler<LoggingPositionProxy> = {
      set(target: Position, property: string | symbol, newValue: any): boolean {
        if (property === "x" || property === "y") {
          loggingPositionProxy.log.push(`${property} changed to ${newValue}`);
        }

        if (property in target) {
          target[property as keyof typeof target] = newValue;
        }

        return true;
      },
    };

    return new Proxy(loggingPositionProxy, proxyHandler);
  }
}
