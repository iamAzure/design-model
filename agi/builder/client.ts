import { Director } from "./Director";
import { CarBuilderImpl } from "./CarBuilderImpl";

// 客户端代码
const director = new Director();
const builder = new CarBuilderImpl();
director.setBuilder(builder);
director.constructSportsCar();

const sportsCar = builder.getResult();
sportsCar.show(); // 输出: 引擎: V8, 座位: 2, GPS: 有

// 新增：构建SUV
director.constructSUV();
const suv = builder.getResult();
suv.show(); // 输出: 引擎: V6, 座位: 7, GPS: 有 