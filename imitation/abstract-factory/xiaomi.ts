import { Phone, Watch, MobileFactory } from "./interface";

class XiaoMiWatch implements Watch {
  brand = "apple";
  size = 3;
  showTime() {
    return Date.now();
  }
  showHeartRate() {
    return "current hear rate is 120";
  }
}

class XiaoMiPhone implements Phone {
  size: number;
  brand: string;
  ram: string;
  cpu: string;

  call(phoneNumber: number): void {
    console.log("current call phone number is" + phoneNumber);
  }
  sendMessage(message: string): void {
    console.log("send message" + message);
  }
}

export class XiaoMiFactory implements MobileFactory {
  createPhone(): Phone {
    return new XiaoMiPhone();
  }
  createWatch(): Watch {
    return new XiaoMiWatch();
  }
}
