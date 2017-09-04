package com.cdk.hw.model;

import javax.persistence.*;
import javax.persistence.metamodel.Type;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Cacheable
public class Product implements Serializable{
    @Id
    private int id;

    @Column(name = "TYPE",length = 255)
    private String type;
    @Column(name = "NAME",length = 255)
    private String name;
    @Column(name = "PRICE")
    private double price;

    public Product(){

    }


    public Product(int id, String type, String name, double price) {
        this.id=id;
        this.type = type;
        this.name = name;
        this.price = price;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public java.lang.String toString() {
        return "Product{" +
                "id=" + id +
                ", type=" + type +
                ", name=" + name +
                ", price=" + price +
                '}';
    }
}
