package com.cdk.hw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeRepository repository;

	@RequestMapping("/create/{id}/{name}")
	public Employee createEmployee(@PathVariable Integer id, @PathVariable String name){
		return repository.save(new Employee(id, name));
	}

	@RequestMapping(value = "/{id}")
	public Employee getEmployee(@PathVariable Integer id){
		return repository.findOne(id);
	}

	@RequestMapping("/all")
	public List<Employee> getEmployee(){
		return repository.findAll();
	}
}
