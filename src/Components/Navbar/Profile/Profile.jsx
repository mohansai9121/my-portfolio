//import React from 'react'
import profile from '../../../assets/profile.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <img src={profile} alt='Mohan Sai' title='Mohan Sai' height='300px' width='300px' style={{borderRadius:'100%'}}/>
      <h1><span className='name'>I'm Mohan Sai,</span> from Guntur</h1>
      <h2>Front-end Developer</h2>
      <h3>Working on basic projects with React</h3>
      <div className='profile-respond'>
        <div className='connect'>Connect with me</div>
        <div className='resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Profile
