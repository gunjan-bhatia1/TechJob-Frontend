package com.gunjan.TechJob.login;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gunjan.TechJob.Job.Jobs;




@Service("userService")
@Transactional(rollbackFor=Exception.class)
public class UserServiceImp implements UserService{

	@Autowired
	UserDao userDao;
	

	@Override
	public void create(User user) {
		userDao.save(user);
	
	}

	@Override
	public User findByEmail(String email) {
		return userDao.findByEmail(email);
	}
	
	@Override
	public User findById(Long user_id) {
		return userDao.findById(user_id).get();
	}
	
	
	
	
//	public List<Jobs> getAllJobs()
//	{
//		return userDao.getJoinInformation();
//	}

//	@Override
//	public void updatePassword(String password, String email) {
//		userDao.updatePassword(password, email);
//		
//	}

}