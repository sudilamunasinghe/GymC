package com.example.gymcbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class TraineeInfo {
    private String trainee_id;
    private String full_name;
    private String phone_number;
    private String address;
    private  Integer status;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date registered_date;


    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public void setTrainee_id(String trainee_id) {
        this.trainee_id = trainee_id;
    }

    public void setRegistered_date(Date registered_date) {
        this.registered_date = registered_date;
    }

    public String getFull_name() {
        return full_name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public String getAddress() {
        return address;
    }


    public String getTrainee_id() {
        return trainee_id;
    }

    public Date getRegistered_date() {
        return registered_date;
    }
}
