//import React from 'react'
import profile from '../../../assets/profile.jpg'

const Profile = () => {
  return (
    <div>
      <img src={profile} alt='Mohan Sai' title='Mohan Sai' height='300px' width='300px' style={{borderRadius:'100%'}}/>
      <h1>I'm Mohan Sai, from Guntur</h1><br></br>
      <h2>Front-end Developer</h2>
    </div>
  )
}

export default Profile
