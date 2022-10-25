
package com.example.gymcbackend.repository.announcementDao;
import com.example.gymcbackend.entities.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement,Integer> {

}
