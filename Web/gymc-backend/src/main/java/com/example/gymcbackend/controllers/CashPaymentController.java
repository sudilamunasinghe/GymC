package com.example.gymcbackend.controllers;

import com.example.gymcbackend.entities.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.gymcbackend.services.CashPaymentService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CashPaymentController {

    @Autowired
    private CashPaymentService cashPaymentService;


    @PostMapping("/cashPayment")
    public String cashPayment(@RequestBody Payment payment){
        System.out.println("payment");
        return cashPaymentService.cashPayment(payment);
    }
}
