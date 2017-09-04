package com.cdk.hw.repository;

import com.cdk.hw.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ViewCarsRepository extends JpaRepository<Car,Integer> {
    public List<Car> findAllByOrderByMake();
    public List<Car> findAllByOrderByPrice();
    public List<Car> findAllByOrderByAverage();
}
