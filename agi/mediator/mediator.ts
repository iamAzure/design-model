// 中介者接口
interface Mediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

// 用户接口
interface User {
  getName(): string;
  sendMessage(message: string): void;
  receiveMessage(message: string, sender: string): void;
}

// 具体中介者 - 聊天室
class ChatRoom implements Mediator {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(message: string, sender: User): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message, sender.getName());
      }
    });
  }
}

// 具体用户类
class ChatUser implements User {
  private name: string;
  private mediator: Mediator;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  public getName(): string {
    return this.name;
  }

  public sendMessage(message: string): void {
    console.log(`${this.name} 发送消息: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  public receiveMessage(message: string, sender: string): void {
    console.log(`${this.name} 收到来自 ${sender} 的消息: ${message}`);
  }
}

// 使用示例
function main() {
  // 创建聊天室（中介者）
  const chatRoom = new ChatRoom();

  // 创建用户
  const user1 = new ChatUser("张三", chatRoom);
  const user2 = new ChatUser("李四", chatRoom);
  const user3 = new ChatUser("王五", chatRoom);

  // 将用户添加到聊天室
  chatRoom.addUser(user1);
  chatRoom.addUser(user2);
  chatRoom.addUser(user3);

  // 用户发送消息
  user1.sendMessage("大家好！");
  user2.sendMessage("你好，张三！");
  user3.sendMessage("今天天气真好！");
}

// 运行示例
main();
