package com.cdk.hw.controller;

import com.cdk.hw.model.Car;
import com.cdk.hw.model.Product;
import com.cdk.hw.repository.ViewCarsRepository;
import com.cdk.hw.repository.ViewProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/viewAllProducts")
public class ViewAllProductsController {

    @Autowired
    private ViewProductsRepository viewProductsRepository;


    @RequestMapping("/byPrice/")
    public List<Product> getByPrice(){

        List<Product> p = viewProductsRepository.findAllByOrderByPrice();
        return p;
    }


}
