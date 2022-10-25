package com.example.gymcbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Profile {

    private Long user_id;

    private String user_name;
    private String first_name;
    private String last_name;
    private String phone_number;
//    private String emergencyNumber;
    private String email;
    private String address;
    private String nic;
    private Character gender;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dob;

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Long getUser_id() {
        return user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public String getNic() {
        return nic;
    }

    public Character getGender() {
        return gender;
    }

    public Date getDob() {
        return dob;
    }
}
