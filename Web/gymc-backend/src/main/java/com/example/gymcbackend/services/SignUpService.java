package com.example.gymcbackend.services;

import com.example.gymcbackend.entities.Trainee;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.stream.Collectors;

@Service
public class SignUpService {

    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;

    @Autowired
    UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    TraineeRepository traineeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;


    public String signUp(Trainee trainee) {

        int emailCount = userAccountDetailsJdbcRepository.checkEmailExists(trainee.getEmail());
        int nicCount = userAccountDetailsJdbcRepository.checkNICExists(trainee.getNic());

        SimpleMailMessage message=new SimpleMailMessage();

        if(emailCount>0){
            return "You have already an account!";
        }else if(nicCount>0) {
            return "There is a issue. Here already has a nic!";
        }else{
            String pw=generateRandomPassword(8, 97, 122);

            UserAccount user=new UserAccount();

            user.setUserName(trainee.getNic());
            user.setEmail(trainee.getEmail());
//            user.setMemberId(trainee.getId());
            user.setPassword(passwordEncoder.encode(pw));
            user.setStatus(true);
            user.setUserLevel("Trainee");

            userAccountDetailsRepository.save(user);

            Trainee traineeEnt=new Trainee();

//            Trainee success=traineeRepository.save(trainee);
            traineeEnt.setFirstName(trainee.getFirstName());
            traineeEnt.setLastName(trainee.getLastName());
            traineeEnt.setEmail(trainee.getEmail());
            traineeEnt.setDob(trainee.getDob());
            traineeEnt.setNic(trainee.getNic());
            traineeEnt.setAddress(trainee.getAddress());
            traineeEnt.setGender(trainee.getGender());
            traineeEnt.setOccupation(trainee.getOccupation());
            traineeEnt.setAddress(trainee.getAddress());
            traineeEnt.setPhoneNumber(trainee.getPhoneNumber());
            traineeEnt.setEmergencyNumber(trainee.getEmergencyNumber());
            traineeEnt.setUserAccount(user);

            traineeRepository.save(traineeEnt);

            message.setFrom("thirdyeargroupproject2@gmail.com");
            message.setTo(trainee.getEmail());

            String mainContent="Welcome to the Gym C.\n"+
                    "Your have successfully registered as a trainee.\n" +
                    "Initially We have provided your NIC as the username.\n" +
                    "And we have provided a auto generated password for you.\n" +
                    "You can change your username and password.\nYour Password : ";

            message.setText(mainContent + pw + "\n" + "Your Username : "+trainee.getNic());
            message.setSubject("Welcome to the GYM C!");

            mailSender.send(message);

            return "Your have successfully registered!";
        }
    }

    public static String generateRandomPassword(int len, int randNumOrigin, int randNumBound)
    {
        SecureRandom random = new SecureRandom();
        return random.ints(len, randNumOrigin, randNumBound + 1)
                .mapToObj(i -> String.valueOf((char)i))
                .collect(Collectors.joining());
    }


}
