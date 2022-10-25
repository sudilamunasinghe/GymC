package com.example.gymcbackend.services;

import com.example.gymcbackend.dto.Profile;
import com.example.gymcbackend.dto.StaffUsers;
import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberJdbcRepository;
import com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsJdbcRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StaffMemberService {

    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;
    @Autowired
    UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    StaffMemberJdbcRepository staffMemberJdbcRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    StaffMemberRepository staffMemberRepository;

    public String register(StaffMember staffMember) {

        int emailCount = userAccountDetailsJdbcRepository.checkNICExistsInStaffMember(staffMember.getEmail());
        int nicCount = userAccountDetailsJdbcRepository.checkNICExists(staffMember.getNic());

        SimpleMailMessage message=new SimpleMailMessage();

        if(emailCount>0){
            return "Already has an account!";
        }else if(nicCount>0) {
            return "There is a issue. Here already has a nic!";
        }else{
            String pw=generateRandomPassword(8, 97, 122);

            UserAccount user=new UserAccount();

            user.setUserName(staffMember.getNic());
            user.setEmail(staffMember.getEmail());
            user.setPassword(passwordEncoder.encode(pw));
            user.setStatus(true);

            if (staffMember.getStaffType() == "Owner" ){
                user.setUserLevel("Owner");
            } else if (staffMember.getStaffType() == "Receptionist" ) {
                user.setUserLevel("Receptionist");
            } else if (staffMember.getStaffType() == "Trainer") {
                user.setUserLevel("Trainer");
            } else {
                user.setUserLevel("Admin");
            }

            userAccountDetailsRepository.save(user);

            StaffMember staffMemberEnt = new StaffMember();

            staffMemberEnt.setFirstName(staffMember.getFirstName());
            staffMemberEnt.setLastName(staffMember.getLastName());
            staffMemberEnt.setNic(staffMember.getNic());
            staffMemberEnt.setDob(staffMember.getDob());
            staffMemberEnt.setGender(staffMember.getGender());
            staffMemberEnt.setAddress(staffMember.getAddress());
            staffMemberEnt.setEmail(staffMember.getEmail());

            if (staffMember.getStaffType() == "Owner" || staffMember.getStaffType() == "Receptionist" || staffMember.getStaffType() == "Admin"){
                staffMemberEnt.setStaffType(staffMember.getStaffType());
            }else{
                staffMemberEnt.setStaffType("Trainer");
            }

            staffMemberEnt.setPhoneNumber(staffMember.getPhoneNumber());
            staffMemberEnt.setQualification(staffMember.getQualification());
            staffMemberEnt.setUserAccount(user);

            staffMemberRepository.save(staffMemberEnt);

            message.setFrom("thirdyeargroupproject2@gmail.com");
            message.setTo(staffMember.getEmail());

            String mainContent="Welcome to the Gym C.\n"+
                    "Your have successfully registered as a trainer.\n" +
                    "Initially We have provided your NIC as the username.\n" +
                    "And we have provided a auto generated password for you.\n" +
                    "You can change your username and password.\nYour Password : ";

            message.setText(mainContent + pw + "\n" + "Your Username : "+staffMember.getNic());
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

    public long updateProfile(Profile profile) {
//        System.out.println("sdsdsdsd2");

//        int emailCount = userAccountDetailsJdbcRepository.checkNICExistsInStaffMember(profile.getEmail());
//        if(emailCount>0){
//            String x =  "Already has an account!";
//        }
//        int y = (int) staffMemberJdbcRepository.updateProfile(profile);

        return staffMemberJdbcRepository.updateProfile(profile);
    }

    public List<StaffUsers> getAllStaffMembers() {
        return staffMemberJdbcRepository.findAllStaffMembers();
    }

    public long changeStaffUserStatus(String staffUserID, Integer sts){

        String staffID = staffUserID.substring(4);

        Long result = Long.parseLong(String.valueOf(staffID));

//        long userID = staffMemberJdbcRepository.getUserIdOfStaffUser(result);

        if (sts == 0){
            return staffMemberJdbcRepository.changeUserDeleteStatus(result);
        } else if (sts==1) {
            System.out.println("AWA");
            return staffMemberJdbcRepository.changeUserHoldActiveStatus(result, 0);
        } else {
            return staffMemberJdbcRepository.changeUserHoldActiveStatus(result, 1);
        }

    }

    public long changeTraineeStatus(String traineeID){

        String traineeid = traineeID.substring(4);

        Long result = Long.parseLong(String.valueOf(traineeid));

        long userID = staffMemberJdbcRepository.getUserIdOfTrainee(result);

        return staffMemberJdbcRepository.changeUserDeleteStatus(userID);
    }

}
