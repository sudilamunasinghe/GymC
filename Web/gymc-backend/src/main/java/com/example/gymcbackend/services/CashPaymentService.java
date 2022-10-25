package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.Payment;
import com.example.gymcbackend.repository.cashPaymentDao.CashPaymentJdbcRepository;
import com.example.gymcbackend.repository.cashPaymentDao.CashPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CashPaymentService {
    @Autowired
    CashPaymentJdbcRepository cashPaymentJdbcRepository;

    @Autowired
    CashPaymentRepository cashPaymentRepository;

    public String cashPayment(Payment payment){

        Payment newPayment = new Payment();

        newPayment.setPaymentPlan(payment.getPaymentPlan());
        newPayment.setDate(payment.getDate());
        newPayment.setAmount(payment.getAmount());
        newPayment.setTrainee(payment.getTrainee());
        newPayment.setType(payment.getType());

        cashPaymentRepository.save(newPayment);
        return "payment Added";
    }

}
