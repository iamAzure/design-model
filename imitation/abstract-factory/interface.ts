export interface Phone {
  size: number;
  brand: string;
  ram: string;
  cpu: string;
  call(phoneNumber: number): void;
  sendMessage(message: string): void;
}

export interface Watch {
  brand: string;
  size: number;
  showTime(): number;
  showHeartRate(): string;
}

export interface MobileFactory {
  createPhone(): Phone;
  createWatch(): Watch;
}