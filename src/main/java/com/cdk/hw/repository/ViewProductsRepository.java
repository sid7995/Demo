package com.cdk.hw.repository;

import com.cdk.hw.model.Car;
import com.cdk.hw.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ViewProductsRepository extends JpaRepository<Product,Integer> {
    public List<Product> findAllByOrderByPrice();

}
