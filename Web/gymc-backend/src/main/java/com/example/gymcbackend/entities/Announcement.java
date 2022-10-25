//package com.example.gymcbackend.entities;
//
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import java.sql.Time;
//
//@Entity
//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//public class Announcement {
//    @Id
//    private int id;
//    private String description;
//    private String topic;
//    private int staff_id;
//    private Time time;
//}




package com.example.gymcbackend.entities;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Table(name = "announcement")
@Entity
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "announcementID")
    private int announcementID;

    @Column(name = "Topic")
    private String topic;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "staffId")
//    StaffMember staffMember;

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setAnnouncementID(int announcementID) {
        this.announcementID = announcementID;
    }

//    public void setStaffMember(StaffMember staffMember) {
//        this.staffMember = staffMember;
//    }

    public String getTopic() {
        return topic;
    }

    public Date getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public int getAnnouncementID() {
        return announcementID;
    }

//    public StaffMember getStaffMember() {
//        return staffMember;
//    }
}
