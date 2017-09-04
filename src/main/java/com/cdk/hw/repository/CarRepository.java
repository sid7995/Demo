package com.cdk.hw.repository;

import com.cdk.hw.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer> {
    public Car findByMakeAndModel(String make, String model);

}
