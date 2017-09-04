package com.cdk.hw.controller;

import com.cdk.hw.model.Product;
import com.cdk.hw.model.Shopkeeper;
import com.cdk.hw.repository.ProductRepository;
import com.cdk.hw.repository.ShopkeeperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/shopkeeper")
public class ShopkeeperController {

    @Autowired
    private ShopkeeperRepository shopkeeperRepository;

    @RequestMapping("/add/{name}/{password}")
    public Shopkeeper createShopkeeper( @PathVariable String name, @PathVariable String password){


       Shopkeeper shopkeeper= new Shopkeeper(name,password);
        System.out.println(shopkeeper);
        shopkeeperRepository.saveAndFlush(shopkeeper);
        return shopkeeper;
    }
    @RequestMapping("/login/{name}/{password}")
    public String login(@PathVariable String name,@PathVariable String password){
        //return dealerRepository.findByUserNameAndPassword(username,password);
        //return dealerRepository.findDealerByUsernameAndPassword(username,password);
        System.out.println("In dealer controller!!");
        Shopkeeper dealer = shopkeeperRepository.findShopkeeperByNameAndPassword(name, password);
        if (dealer == null) {
            return "false";
        }
        else
            return "true";
    }

/*

    @RequestMapping("/delete/{customerId}")
    public void deleteCustomer(@PathVariable int customerId){
        customerRepository.delete(customerRepository.findOne(customerId));
    }



    @RequestMapping("/all")
    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }

*/

}
