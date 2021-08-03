package com.hospital.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospital.spring.model.Hospital;
import com.hospital.spring.model.HospitalUser;

public interface UserRepository extends MongoRepository<HospitalUser ,String > {

	void insert(Hospital use);
	
}
