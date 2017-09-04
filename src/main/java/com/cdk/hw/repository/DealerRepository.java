package com.cdk.hw.repository;

import com.cdk.hw.model.Dealer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DealerRepository extends JpaRepository<Dealer,Integer>{
   // public boolean findByUserNameAndPassword(String username, String password);
    public Dealer findDealerByUsernameAndPassword(String username, String password);

}
