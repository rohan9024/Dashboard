import React from 'react'
import Home from '../Assets/home.png';
import Project from '../Assets/achievement.png';
import Billing from '../Assets/bank.png';
// import Team from '../Assets/group.png';
import Members from '../Assets/user.png'
import Stats from '../Assets/bar-chart.png';
import Settings from '../Assets/gear.png';


function First() {
  return (
    <div>
      <div className='flex justify-center mt-20 hover:cursor-pointer'>
        <img className='w-10 h-10 mr-5' src={Home} alt="Home Icon" />
        <h1 className='mt-3'>Home</h1>
      </div>

      <div className='flex justify-center mt-7 hover:cursor-pointer'>
        <img className='w-10 h-10 mr-5' src={Project} alt="Project Icon" />
        <h1 className='mt-3'>Projects</h1>
      </div>

      <div className='flex justify-center mt-7 hover:cursor-pointer'>
        <img className='w-8 h-8 mr-5' src={Billing} alt="Billing Icon" />
        <h1 className='mt-3'>Billings</h1>
      </div>

      <div className='flex ml-11 mt-7 hover:cursor-pointer'>
        <img className='w-10 h-10 mr-5' src={Members} alt="Team Icon" />
        <h1 className='mt-3'>Team Members</h1>
      </div>
      
      <div className='flex justify-center mt-7 hover:cursor-pointer'>
        <img className='w-10 h-10 mr-5' src={Stats} alt="Stats Icon" />
        <h1 className='mt-3'>Stats</h1>
      </div>

      <div className='flex justify-center mt-7 hover:cursor-pointer'>
        <img className='w-10 h-10 mr-5' src={Settings} alt="Settings Icon" />
        <h1 className='mt-3'>Setings</h1>
      </div>
      
    </div>
  )
}

export default First