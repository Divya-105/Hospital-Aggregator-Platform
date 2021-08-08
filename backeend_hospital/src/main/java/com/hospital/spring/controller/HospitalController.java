package com.hospital.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.spring.model.Admin;
import com.hospital.spring.model.Hospital;
import com.hospital.spring.model.HospitalSignUp;
import com.hospital.spring.model.HospitalUser;
import com.hospital.spring.model.UserRequest;
import com.hospital.spring.repository.AdminRepository;
import com.hospital.spring.repository.HospitalRepository;
import com.hospital.spring.repository.SignupRepository;
import com.hospital.spring.repository.UserRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000",  allowedHeaders = "*", allowCredentials = "true")
public class HospitalController {

	@Autowired 
	private HospitalRepository hospiRepository;
	
	@Autowired
	private SignupRepository sign;
	
	@Autowired
	private UserRepository user;
	
	@Autowired
	private AdminRepository admin;
	
	@PostMapping("/register")
	public void createHospital(@RequestBody Hospital hospiobj) {
		hospiRepository.insert(hospiobj);
		
	}
	@PostMapping("/approve/{id}")
	public void ApproveHospital(@RequestBody Hospital hospiobj) {
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
	
	
	@GetMapping("/getHospitalByName/{name}")
	public List<Hospital> getHospitalbyName(@PathVariable String name) {
		return hospiRepository.findByName(name);
	}
	
	@PostMapping("/signup")
	public String createuser(@RequestBody HospitalSignUp up)
	{
		sign.insert(up);
		return "signup";
	}
	@PostMapping("/login")
	public String fetch(@RequestBody UserRequest use)
	{
			 String username = use.getUsername();
			 String password = use.getPassword();
			 
		if(username!=null && password!=null)
		{
			HospitalSignUp userRepo = sign.findByUsername(username);
			
			String useruse = userRepo.getUsername();
			String userpass = userRepo.getPassword();
			if(useruse.equals(username) && userpass.equals(password))
			
				{
						return "success";
				}
		}
		return "Invalid user";	
	}
	
	@PostMapping("/logina")
	public String fetch1(@RequestBody UserRequest use)
	{
			 String username = use.getUsername();
			 String password = use.getPassword();
			 
		if(username!=null && password!=null)
		{
			Admin userRepo = admin.findByUsername(username);
			Admin userpass = admin.findByPassword(password);
				if(userRepo != null && userpass !=null)
				{
						return "success";
				}
		}
		return "Invalid user";	
	}
	
	

@GetMapping("/approve/{id}")
public void getHospitalHospi(@PathVariable String id)
{
	Optional<Hospital> userid = hospiRepository.findById(id);
	
	Hospital use = userid.get();
	user.insert(use);
	hospiRepository.deleteById(id);
}
@GetMapping("/show")
public List<HospitalUser> showHospitals() {
	return user.findAll();
}
}
