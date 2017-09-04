package com.cdk.hw.repository;
import com.cdk.hw.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    public Customer findCustomerByNameAndPassword(String name, String password);

}
