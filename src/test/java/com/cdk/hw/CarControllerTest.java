package com.cdk.hw;

import com.cdk.hw.config.ControllerTestConfig;
import com.cdk.hw.controller.CarController;
import com.cdk.hw.model.Car;
import com.cdk.hw.repository.CarRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;

/**
 * Created by malviyas on 9/4/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {ControllerTestConfig.class})
public class CarControllerTest {

    @Mock
    private CarRepository carRepository;

    @Autowired
    CarController carController;

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        //carRepository = mock(CarRepository.class);
        //carController = new CarController();
    }

    @Test
    public void createCarTest(){
        Car mockCar = new Car(1,"abc","model",1L,"india","skj",12L);
        Mockito.when(carRepository.saveAndFlush(any(Car.class))).thenReturn(mockCar);
        Car returned = carController.createCar(1,"abc","model",1L,"india","skj",12L);
        Assert.assertEquals(returned.getAverage(),mockCar.getAverage());



    }
}
