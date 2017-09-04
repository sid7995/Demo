package com.cdk.hw.model;

import javax.persistence.*;

@Entity
@Cacheable
public class Dealer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dID;
    String username;
    String password;

    public Dealer(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Dealer() {
    }

    public int getdID() {
        return dID;
    }

    public void setdID(int dID) {
        this.dID = dID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
