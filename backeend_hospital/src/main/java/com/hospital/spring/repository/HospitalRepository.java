package com.hospital.spring.repository;

import java.util.List;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospital.spring.model.Hospital;

@Repository
public interface HospitalRepository extends MongoRepository<Hospital ,String >{

	List<Hospital> findByName(String name);

	
	
	
}