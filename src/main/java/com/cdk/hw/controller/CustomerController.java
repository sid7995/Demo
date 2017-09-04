package com.cdk.hw.controller;

import com.cdk.hw.model.Customer;
import com.cdk.hw.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping("/customerLogin/{name}/{password}")
    public String login(@PathVariable String name,@PathVariable String password){
        //return CustomerRepository.findByUserNameAndPassword(username,password);
        //return CustomerRepository.findCustomerByUsernameAndPassword(username,password);
        System.out.println("In Customer controller!!");
        Customer customer = customerRepository.findCustomerByNameAndPassword(name,password);
        if (customer == null) {
            return "false";
        }
        else
            return "true";
    }
    @RequestMapping("/create/{name}/{mobileNo}/{city}/{email}/{password}")
    public Customer createCustomer(@PathVariable String name,@PathVariable long mobileNo,@PathVariable String city,@PathVariable String email,@PathVariable String password){
        return customerRepository.saveAndFlush(new Customer(name,mobileNo,city,email,password));
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
