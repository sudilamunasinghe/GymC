package com.example.gymcbackend.entities;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Table(name = "user_account")
@Entity
public class UserAccount implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private long id;

    @Column(name = "userName", unique = true)
    private String userName;

    @CreationTimestamp
    @Column(name = "registered_date")
    private Date registeredDate;

    @CreationTimestamp
    @Column(name = "updated_date")
    private Date updatedDate;

    @Column(name = "user_level")
    private String userLevel;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    private boolean status=true;

    @Column(name = "is_hold")
    private Integer isHold;

    @Column(name = "email")
    private String email;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.status;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.status;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.status;
    }

    @Override
    public boolean isEnabled() {
        return this.status;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public Date getRegisteredDate() {
        return registeredDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public String getUserLevel() {
        return userLevel;
    }

    public boolean getStatus() {
        return status;
    }

    public String getEmail() {
        return email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isStatus() {
        return status;
    }

    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setUserLevel(String userLevel) {
        this.userLevel = userLevel;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setStatus(boolean enabled) {
        this.status = status;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getIsHold() {
        return isHold;
    }

    public void setIsHold(Integer isHold) {
        this.isHold = isHold;
    }
}
