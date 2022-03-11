import React from 'react'
import Home from '../Assets/home.png';
import Project from '../Assets/achievement.png';
import Billing from '../Assets/bank.png';
import Influencer from '../Assets/user.png'
import Stats from '../Assets/bar-chart.png';
import Settings from '../Assets/gear.png';
import Manager from '../Assets/manager.png';


function First() {
  return (
    <div className='flex-col mt-28'>

      <div className='flex justify-center items-center ml-10 mb-72'>
        <div className='flex-col space-y-8'>
          <div className=''>
            <img className='w-6 h-6 mr-5' src={Home} alt="Home Icon" />
          </div>
          <div className=''>
            <img className='w-6 h-6 mr-5' src={Manager} alt="Project Icon" />
          </div>
          <div className=''>
            <img className='w-6 h-6 mr-5' src={Influencer} alt="Billing Icon" />
          </div>
          <div className=''>
            <img className='w-6 h-6 mr-5' src={Settings} alt="Settings Icon" />
          </div>
        </div>

        <div className='flex-col space-y-8'>
          <div>
            <h1 className=''>Home</h1>
          </div>
          <div>
            <h1 className=''>View Managers</h1>
          </div>
          <div>
            <h1 className=''>View Influencers</h1>
          </div>
          <div>
            <h1 className=''>Settings</h1>
          </div>
        </div>
      </div>
      <div className='flex-col ml-16 items-center justify-center'>
        <div className='hover:border-blue-500 hover:border-2 hover:rounded-full transition hover:scale-125 hover:cursor-pointer hover:ease-out w-20 h-20 ml-3 mb-4'>
          <img className='rounded-full' src="https://avatarfiles.alphacoders.com/161/thumb-161485.png" alt="morty" />
        </div>
        <h1 className='font-semibold text-lg'>David Warner</h1>
      </div>

    </div>
  )
}

export default First
