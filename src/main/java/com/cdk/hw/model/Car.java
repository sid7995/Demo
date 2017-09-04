package com.cdk.hw.model;

import javax.persistence.*;

@Entity
@Cacheable
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vIN;
    String make;
    String model;
    double price;
    String fuelType;
    String gearType;
    double average;

    public Car(){

    }
    public Car(int vIN, String make, String model, double price, String fuelType, String gearType, double average) {
        this.vIN = vIN;
        this.make = make;
        this.model = model;
        this.price = price;
        this.fuelType = fuelType;
        this.gearType = gearType;
        this.average = average;
    }

    public int getvIN() {
        return vIN;
    }

    public void setvIN(int vIN) {
        this.vIN = vIN;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getGearType() {
        return gearType;
    }

    public void setGearType(String gearType) {
        this.gearType = gearType;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    @Override
    public String toString() {
        return "Car{" +
                "vIN=" + vIN +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", price=" + price +
                ", fuelType='" + fuelType + '\'' +
                ", gearType='" + gearType + '\'' +
                ", average=" + average +
                '}';
    }
}
