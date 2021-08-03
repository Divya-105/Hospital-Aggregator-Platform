package com.hospital.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="hospitalcoll")
public class Hospital {

	@Id
	private String id;
	private String name;
	private String speciality;
	private int noofbeds;
	private String aboutus;
	   
	public String getAboutus() {
		return aboutus;
	}

	public void setAboutus(String aboutus) {
		this.aboutus = aboutus;
	}
	private String photos; 
    
	
	
	public String getPhotos() {
		return photos;
	}



	public void setPhotos(String photos) {
		this.photos = photos;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public int getNoofbeds() {
		return noofbeds;
	}
	public void setNoofbeds(int noofbeds) {
		this.noofbeds = noofbeds;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	private String city;
	
	
	
}
