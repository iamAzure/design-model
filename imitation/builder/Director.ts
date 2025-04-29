export class Director {
    builder: CarBuilder;

    constructor(builder: CarBuilder){
        this.builder = builder;
    }   
    createSportCar(){
        this.builder.reset();
        this.builder.setEngine('V8');
        this.builder.setGPS(true);
        this.builder.setSeats(2);
    }
    createSUV(){
        this.builder.reset();
        this.builder.setEngine('V6');
        this.builder.setGPS(true);
        this.builder.setSeats(4);
    }
}

