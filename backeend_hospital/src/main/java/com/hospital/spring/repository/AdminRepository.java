package com.hospital.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospital.spring.model.Admin;


public interface AdminRepository extends  MongoRepository <Admin,Integer>{

	Admin findByUsername(String username);

	Admin findByPassword(String password);

}
