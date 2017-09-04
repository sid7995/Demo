package com.cdk.hw.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 * Created by malviyas on 9/4/17.
 */

@Configuration
@ComponentScan(basePackages = {"com.cdk.hw.repository",
                                "com.cdk.hw.controller",
                                "com.cdk.hw.service"})
public class ControllerTestConfig {

    @Bean(name = "entityManager")
    public EntityManager getEntityManager(EntityManagerFactory entityManagerFactory) {
        return entityManagerFactory.createEntityManager();
    }
}
