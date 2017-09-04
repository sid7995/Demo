package com.cdk.hw.controller;

import com.cdk.hw.model.Car;
import com.cdk.hw.repository.CarRepository;
import com.cdk.hw.service.CarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {

    @Resource private CarServiceImpl carService;
    @Autowired
    private CarRepository carRepository;
    @RequestMapping("/create/{vIN}/{make}/{model}/{price}/{fuelType}/{gearType}/{average}")
    public Car createCar(@PathVariable int vIN, @PathVariable String make, @PathVariable String model, @PathVariable double price, @PathVariable String fuelType, @PathVariable String gearType, @PathVariable double average){
        Car car = new Car(vIN, make, model, price, fuelType, gearType, average);
        System.out.println(car);
        return carRepository.saveAndFlush(car);
    }
    //delete a car by vin
    @RequestMapping("/delete/{vIN}")
    public  void deleteCar(@PathVariable int vIN){
        carRepository.delete(carRepository.findOne(vIN));
    }
    @RequestMapping("/{vIN}")
    public Car getCar(@PathVariable Integer vIN){
        return carRepository.findOne(vIN);
    }

    @RequestMapping("/all")
    public List<Car> getEmployee(){
        return carRepository.findAll();
    }

    @RequestMapping("/selectCar")
    public List<String> getMakes(){
        List<String> makes = carService.getMakes();
        return makes;
    }
    @RequestMapping("/getModels/{make}")
    public List<String> getModels(@PathVariable String make){
        List<String> models = carService.getModels(make);
        return models;
    }

    @RequestMapping("/getCar/{make}/{model}")
    public Car getCar(@PathVariable String make,@PathVariable String model) {
        System.out.println("make :" + make);
        System.out.println("model : " + model);
        System.out.println("In getCar!!");
        Car car = carRepository.findByMakeAndModel(make,model);
        //return carRepository.findByMakeAndModel(make,model);
        return car;
    }


}
