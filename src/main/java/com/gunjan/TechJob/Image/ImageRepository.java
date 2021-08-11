package com.gunjan.TechJob.Image;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.gunjan.TechJob.Image.*;
public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}