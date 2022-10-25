package com.example.gymcbackend.repository.staffMemberDao;

import com.example.gymcbackend.entities.StaffMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffMemberRepository extends JpaRepository<StaffMember, Long> {
}
