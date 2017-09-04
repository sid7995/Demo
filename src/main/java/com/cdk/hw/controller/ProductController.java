package com.cdk.hw.controller;

import com.cdk.hw.model.Customer;
import com.cdk.hw.model.Product;
import com.cdk.hw.repository.CustomerRepository;
import com.cdk.hw.repository.ProductRepository;
import com.cdk.hw.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Resource
    private ProductServiceImpl productService;
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping("/add/{id}/{type}/{name}/{price}")
    public Product createProduct(@PathVariable int id, @PathVariable String type, @PathVariable String name,@PathVariable double price){


       Product p= new Product(id,type,name, price);
        System.out.println(p);
        productRepository.save(p);
        return p;
    }
    @RequestMapping("/all")
    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    @RequestMapping("/getProduct/{type}/{name}")
    public Product getCar(@PathVariable String type,@PathVariable String name) {
        System.out.println("make :" + type);
        System.out.println("model : " + name);
        Product p = productRepository.findByTypeAndName(type,name);
        //return carRepository.findByMakeAndModel(make,model);
        return p;
    }
    @RequestMapping("/getType")
    public List<String> getType(){
        List<String> type = productService.getType();
        return type;
    }
    @RequestMapping("/getName/{type}")
    public List<String> getName(@PathVariable String type){
        List<String> name = productService.getName(type);
        return name;
    }
    @RequestMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id){
        productRepository.delete(productRepository.findOne(id));
    }

}
