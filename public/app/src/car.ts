export class Car {


    vIN: number;
    make: string = "";
    model: string = "";
    price: number;
    fuelType: string = "";
    gearType: string = "";
    average: number;

    constructor(vIN: number, make: string, model: string, price: number, fuelType: string, gearType: string, average: number) {
        this.vIN = vIN;
        this.make = make;
        this.model = model;
        this.price = price;
        this.fuelType = fuelType;
        this.gearType = gearType;
        this.average = average;
    }
}