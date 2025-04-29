import { Phone, Watch, MobileFactory } from "./interface";

class AppleWatch implements Watch {
  brand = "apple";
  size = 3;
  showTime() {
    return Date.now();
  }
  showHeartRate() {
    return "current hear rate is 120";
  }
}

class IPhone implements Phone {
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

export class AppleFactory implements MobileFactory {
  createPhone(): Phone {
    return new IPhone();
  }
  createWatch(): Watch {
    return new AppleWatch();
  }
}
