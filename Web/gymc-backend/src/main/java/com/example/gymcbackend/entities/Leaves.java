package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "leaves")
@Entity
public class Leaves {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "leaveID")
    private long id;

    @Column(name = "date")
    private Date date;

    @Column(name = "reason")
    private String reason;

    @Column(name = "substitute_name")
    private String substituteName;

    @Column(name = "substitute_ID")
    private long substituteID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "staffId")
    StaffMember staffMember;

    public void setId(long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public void setSubstituteName(String substituteName) {
        this.substituteName = substituteName;
    }

    public void setSubstituteID(long substituteID) {
        this.substituteID = substituteID;
    }

    public void setStaffMember(StaffMember staffMember) {
        this.staffMember = staffMember;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public String getReason() {
        return reason;
    }

    public String getSubstituteName() {
        return substituteName;
    }

    public long getSubstituteID() {
        return substituteID;
    }

    public StaffMember getStaffMember() {
        return staffMember;
    }
}
