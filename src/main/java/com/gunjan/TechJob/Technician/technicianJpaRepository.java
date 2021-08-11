package com.gunjan.TechJob.Technician;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gunjan.TechJob.login.User;




@Repository
public interface technicianJpaRepository extends JpaRepository<Technicians,Long >{

	//List<Technician> findByUsername(String username);
//	List<Technicians> findByDepartmentLike(String department);

	//@Query(value="UPDATE user_information SET password=?1 where email=?2",nativeQuery=true)	public void updatePassword(String password,String email);
	
	@Query("FROM  Technicians t where t.user.id = :userId")
  List<Technicians> findAllByCurrentUser(@Param("userId") Long userId);

	List<Technicians> findByDepartmentContains(String department);

	

	public Technicians findByEmail(String email);

	@Query("FROM  Technicians t where t.user.locality = :locality")
	List<Technicians> findAllByLocality(String locality);

	
}
