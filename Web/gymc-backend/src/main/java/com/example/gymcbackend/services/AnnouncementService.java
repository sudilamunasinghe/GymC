
package com.example.gymcbackend.services;


import com.example.gymcbackend.dto.AnnouncementDTO;
import com.example.gymcbackend.entities.Announcement;
import com.example.gymcbackend.repository.announcementDao.AnnouncementJdbcRepository;
import com.example.gymcbackend.repository.announcementDao.AnnouncementRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AnnouncementJdbcRepository announcementJdbcRepository;

    public AnnouncementDTO saveAnnouncement(AnnouncementDTO announcementDTO) {
        // set current date
        announcementDTO.setDate(Date.valueOf(LocalDate.now()));
        Announcement announcement = announcementRepo.save(modelMapper.map(announcementDTO, Announcement.class));
        announcementDTO.setAnnouncementId(announcement.getAnnouncementID());
        return announcementDTO;
    }

    public List<AnnouncementDTO> getAllAnnouncements() {
        return announcementJdbcRepository.findAllAnnouncements();
    }

    public String deleteAnnouncement(AnnouncementDTO announcementDTO) {
        announcementRepo.delete(modelMapper.map(announcementDTO, Announcement.class));
        return "Successfully deleted....";
    }

    public String updateAnnouncement(AnnouncementDTO announcementDTO) {
        announcementRepo.save(modelMapper.map(announcementDTO, Announcement.class));
        return "Successfully Updated....";
    }

}
