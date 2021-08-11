package com.gunjan.TechJob.Job;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface jobJpaRepository extends JpaRepository<Jobs,Long >{

	List<Jobs> findByUsername(String username);
	

	//@Query(value="UPDATE user_information SET password=?1 where email=?2",nativeQuery=true)	public void updatePassword(String password,String email);
	@Query("FROM Jobs j where j.user.id = :userId")
  List<Jobs> findAllByCustomerId(@Param("userId") Long userId);

	  List<Jobs> findByLocality(String locality);
		
	//@Query("select status,count(status) from Jobs  where Jobs.technician_id = :technician_id group by status" )
	 @Query(value="select status,count(status) from job_details where technician_id=:ID group by status", nativeQuery=true)
	 List<Object[]> findBystatusAndstatusCount(@Param("ID") Long ID);


	@Query("FROM Jobs j where j.technicians.id = :technician_id")
	List<Jobs> findAllByCurrentTechnician(@Param("technician_id") Long technician_id);
}
