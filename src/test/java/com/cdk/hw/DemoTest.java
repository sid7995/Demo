package com.cdk.hw;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoTest {
	@Autowired
	EmployeeRepository repo;

	@Test
	public void testSave(){
		repo.save(new Employee(1001, "Ned Stark"));
		repo.save(new Employee(1002, "Cersei Lannister"));

		for (Employee employee : repo.findAll()) {
			System.out.println(employee);
		}
	}
}
