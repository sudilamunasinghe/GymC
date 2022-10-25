package com.example.gymcbackend.repository.ExerciseDao;

import com.example.gymcbackend.entities.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise,Long> {

}
