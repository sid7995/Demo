package com.cdk.hw.service;

import com.cdk.hw.model.Car;
import com.cdk.hw.repository.CarRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Service
public class CarServiceImpl {

    @Resource private EntityManager entityManager;

    @RequestMapping("/car/selectCar/")
    public List<String> getMakes() {
        List<String> makes = entityManager.createQuery("select distinct c.make from Car c").getResultList();
        return makes;
    }

    @RequestMapping("/car/getModels/{make}")
    public List<String> getModels(String make) {
        List<String> models = entityManager.createQuery("select c.model from Car c where make='"+make+"'").getResultList();
        return models;
    }


}


