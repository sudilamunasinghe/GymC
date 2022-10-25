package com.example.gymcbackend.dto;

public class StaffUsers {

    private String user_id;
    private String full_name;
    private  String staff_type;
    private  String status;

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public void setStaff_type(String staff_type) {
        this.staff_type = staff_type;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUser_id() {
        return user_id;
    }

    public String getFull_name() {
        return full_name;
    }

    public String getStaff_type() {
        return staff_type;
    }

    public String getStatus() {
        return status;
    }
}
