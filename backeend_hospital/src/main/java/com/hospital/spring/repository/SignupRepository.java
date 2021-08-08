package com.hospital.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.spring.model.HospitalSignUp;
@Repository
public interface SignupRepository extends MongoRepository<HospitalSignUp,String> {

	HospitalSignUp findByUsername(String username);

	HospitalSignUp findByPassword(String password);
	

}
