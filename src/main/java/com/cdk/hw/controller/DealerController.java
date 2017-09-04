package com.cdk.hw.controller;

import com.cdk.hw.model.Dealer;
import com.cdk.hw.repository.DealerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dealer")
public class DealerController {

    @Autowired
    DealerRepository dealerRepository;

    @RequestMapping("/login")
    public Dealer logintest() {
        return dealerRepository.findDealerByUsernameAndPassword("hotwheels","hotwheels");
    }
    @RequestMapping("/login/{username}/{password}")
    public String login(@PathVariable String username,@PathVariable String password){
        //return dealerRepository.findByUserNameAndPassword(username,password);
        //return dealerRepository.findDealerByUsernameAndPassword(username,password);
        System.out.println("In dealer controller!!");
        Dealer dealer = dealerRepository.findDealerByUsernameAndPassword(username, password);
        if (dealer == null) {
            return "false";
        }
        else
            return "true";
    }
}
