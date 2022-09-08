const printMessage = (target: any): void => {
  Object.defineProperty(target.prototype, 'server', { value: () => 'Node server is running' });
};

@printMessage
export default class Message {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
