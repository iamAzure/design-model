interface IBrand {
  getBrand(): string;
}

class AppleBrand implements IBrand {
  getBrand(): string {
    return "Apple";
  }
}

class MiBrand implements IBrand {
  getBrand(): string {
    return "XiaoMi";
  }
}

abstract class Phone {
 protected brand: IBrand;
  constructor(brand: IBrand) {
    this.brand = brand;
  }
  showPhoneConf
};


class IPhone extends 


function main(){
    const appleBrand = new AppleBrand();
    const xiaomiBrand = new MiBrand();

    const iphone = new Phone(appleBrand);

}
