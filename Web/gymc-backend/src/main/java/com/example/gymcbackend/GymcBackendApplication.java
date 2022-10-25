package com.example.gymcbackend;

import com.example.gymcbackend.entities.StaffMember;
import com.example.gymcbackend.entities.UserAccount;
import com.example.gymcbackend.repository.traineeDao.TraineeRepository;
import com.example.gymcbackend.repository.userDao.UserAccountDetailsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class GymcBackendApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserAccountDetailsRepository userAccountDetailsRepository;

	@Autowired
	private com.example.gymcbackend.repository.staffMemberDao.StaffMemberRepository staffMemberRepository;

	@Autowired
	private TraineeRepository traineeRepository;

	public static void main(String[] args) {
		SpringApplication.run(GymcBackendApplication.class, args);
		System.out.println("can login");
	}
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

	// To init a user
//	@PostConstruct
//	protected void init() {
//
//		UserAccount user=new UserAccount();
//		StaffMember staffMember= new StaffMember();
//
//		user.setUserName("Sudam Munasinghe");
////		user.setMemberId(staffMemId);
//		user.setPassword("123456789");
//		user.setEmail("sudam123@gmail.com");
//		user.setUserLevel("Receptionist");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setStatus(true);
//
//		userAccountDetailsRepository.save(user);
//
//		staffMember.setFirstName("Sudam");
//		staffMember.setLastName("Munasinghe");
//		staffMember.setAddress("No,23/8, Temple Road, Matara");
//		staffMember.setGender('M');
//		staffMember.setNic("199874511111");
//		staffMember.setPhoneNumber("0763514133");
//		staffMember.setEmail("sudam123@gmail.com");
//		staffMember.setStaffType(2);
////		staffMember.setUserAccount(user);
////		staffMember.setId(8);
//
//		staffMemberRepository.save(staffMember);
//
////		Long staffMemId= (Long) staffMember.getId();
//
//
//	}

	//Staff Types
	//Owner : 1
	//Receptionist : 2
	//Trainer : 3
	//Admin : 4
}
