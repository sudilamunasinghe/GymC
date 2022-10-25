package com.example.gymcbackend.repository.cashPaymentDao;

import com.example.gymcbackend.entities.Payment;
import com.example.gymcbackend.entities.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CashPaymentRepository extends JpaRepository<Payment, Long> {

}
