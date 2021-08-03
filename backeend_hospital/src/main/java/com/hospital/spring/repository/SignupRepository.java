package com.hospital.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.hospital.spring.model.HospitalSignUp;

public interface SignupRepository extends MongoRepository<HospitalSignUp,Integer> {

	HospitalSignUp findByUsername(String username);

	HospitalSignUp findByPassword(String password);
	

}
