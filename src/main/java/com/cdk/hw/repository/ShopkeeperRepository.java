package com.cdk.hw.repository;
import com.cdk.hw.model.Product;
import com.cdk.hw.model.Shopkeeper;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopkeeperRepository extends JpaRepository<Shopkeeper, Integer> {

    public Shopkeeper findShopkeeperByNameAndPassword(String name,String password);

}
