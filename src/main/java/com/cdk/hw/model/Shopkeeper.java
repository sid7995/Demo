package com.cdk.hw.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Cacheable
public class Shopkeeper implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "NAME",length = 255)
    private String name;
    @Column(name = "PASSWORD")
    private String password;
;
    public Shopkeeper(){

    }

    public Shopkeeper(String name, String password) {

        this.name = name;
        this.password = password;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "Shopkeeper{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
