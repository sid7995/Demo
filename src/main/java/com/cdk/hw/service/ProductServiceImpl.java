package com.cdk.hw.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import java.util.List;

@Service
public class ProductServiceImpl {

    @Resource private EntityManager entityManager;


    public List<String> getType() {
        List<String> type = entityManager.createQuery("select distinct p.type from Product p").getResultList();
        return type;
    }

    public List<String> getName(String type) {
        List<String> name = entityManager.createQuery("select distinct p.name from Product p where p.type='"+type+"'").getResultList();
        return name;
    }



}


