

package com.example.gymcbackend.dto;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;

import java.sql.Date;

//@NoArgsConstructor
//@AllArgsConstructor
//@Data
public class AnnouncementDTO {
//    private int id;
    private int announcementId;
    private String description;
    private String topic;
//    private int staff_id;
    private Date date;

    public int getAnnouncementId() {
        return announcementId;
    }

    public void setAnnouncementId(int announcementId) {
        this.announcementId = announcementId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

//    public int getStaff_id() {
//        return staff_id;
//    }
//
//    public void setStaff_id(int staff_id) {
//        this.staff_id = staff_id;
//    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

