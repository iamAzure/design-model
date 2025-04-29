import { MobileFactory } from "./interface";
import { AppleFactory } from "./apple";
import { XiaoMiFactory } from "./xiaomi";

export class Client {
  factory: MobileFactory;
  constructor(factory: MobileFactory) {
    this.factory = factory;
  }

  createElectronicSuit() {
    const phone = this.factory.createPhone();
    const watch = this.factory.createWatch();
    phone.call(1596282159);
    watch.showTime();
  }
}

const appleFactory = new AppleFactory();
const appleClient = new Client(appleFactory);
appleClient.createElectronicSuit();

const xiaoMiFactory = new XiaoMiFactory();
const xiaomiClient = new Client(xiaoMiFactory);
xiaomiClient.createElectronicSuit();
