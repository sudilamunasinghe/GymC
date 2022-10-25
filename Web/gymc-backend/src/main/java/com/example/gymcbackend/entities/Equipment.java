package com.example.gymcbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "equipment")
@Entity
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equipmentID")
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "purchased_date")
    private Date purchasedDate;

    @Column(name = "count")
    private Integer count;

    public void setId(long id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPurchasedDate(Date purchasedDate) {
        this.purchasedDate = purchasedDate;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public Date getPurchasedDate() {
        return purchasedDate;
    }

    public Integer getCount() {
        return count;
    }
}
