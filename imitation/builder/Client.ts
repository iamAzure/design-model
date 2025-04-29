import { CarBuilderImpl } from "./CardBuildImpl";
import { Director } from "./Director";

const builder = new CarBuilderImpl();
const director = new Director(builder);

director.createSportCar();
const sportCar = builder.getResult();
sportCar.show();


director.createSUV();
const suv = builder.getResult();
suv.show();