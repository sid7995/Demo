package com.cdk.hw.controller;

import com.cdk.hw.model.Car;
import com.cdk.hw.repository.ViewCarsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/viewAllCars")
public class ViewAllCarsController {

    @Autowired
    private ViewCarsRepository viewCarsRepository;

    @RequestMapping("/byMake/")
    public List<Car> getByMake(){
        System.out.println("inside viewController");
        List<Car> makes = viewCarsRepository.findAllByOrderByMake();
        return makes;
    }

    @RequestMapping("/byPrice/")
    public List<Car> getByPrice(){
        System.out.println("inside viewController");
        List<Car> price = viewCarsRepository.findAllByOrderByPrice();
        return price;
    }

    @RequestMapping("/byAverage/")
    public List<Car> getByAverage(){
        System.out.println("inside viewController");
        List<Car> average = viewCarsRepository.findAllByOrderByAverage();
        return average;
    }

}
