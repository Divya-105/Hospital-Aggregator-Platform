package com.hospital.spring.controller;

import java.io.IOException;

import java.util.List;
import java.util.Optional;
import org.springframework.util.StringUtils;
//import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import com.hospital.spring.model.Hospital;
import com.hospital.spring.repository.HospitalRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000",  allowedHeaders = "*", allowCredentials = "true")
public class HospitalController {

	@Autowired 
	private HospitalRepository hospiRepository;
	
	@PostMapping("/register")
	public void createHospital(@RequestBody Hospital hospiobj) {
		hospiRepository.insert(hospiobj);
		
	}

	@PostMapping("/delete/{id}")
	public void deleteHospital(@PathVariable String id) {
		
		hospiRepository.deleteById(id);
	}

	@GetMapping("/list")
	public List<Hospital> listHospitals() {
		return hospiRepository.findAll();
	}
	
	
	@PostMapping("/search/{city}")
	public Optional<Hospital> searchHospital(@PathVariable String city) {
			
			return hospiRepository.findByCity(city);
	}
}
