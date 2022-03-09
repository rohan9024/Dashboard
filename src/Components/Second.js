import React from 'react'
import Shop from '../Assets/shop.png'
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

function Second() {
  return (
    <div className='flex-col items-center justify-center mt-10'>

      <div className='flex justify-center items-center '>
        {/* Search bar */}
        <div className='flex justify-center items-center bg-gray-200 space-x-4 rounded-lg '>
          <div className='ml-4'>
            <SearchIcon />
          </div>
          <div className='mr-4'>
            <input placeholder='Search' type="text" className='outline-none bg-transparent border-none' />
          </div>
        </div>

      </div>

      {/* Welcome user */}
      <div className='mt-5'>
        <h1 className='text-2xl font-medium'>Hello David</h1>
        <h3 className='text-normal text-gray-500'>Welcome Back!</h3>
      </div>


      {/* Pahila dabba */}
      <div className='bg-yellow-100 rounded-lg mt-5 p'>
        <div className='flex justify-center items-center space-x-20'>
          <div>
            <VisibilityOutlinedIcon/>
            <h1 className='text-gray-500'>Views</h1>
            <h3 className='text-2xl font-medium'>500</h3>
            <h3>Per Day</h3>
          </div>

          <div className='justify-center items-center'>
            <ExploreOutlinedIcon/>
            <h1 className='text-gray-500'>Visits</h1>
            <h3 className='text-2xl font-medium'>2000</h3>
            <h3>Per Minutes</h3>
          </div>

          <div>
            <img className='w-8 h-8 mr-5' src={Shop} alt="Shop Icon" />
            <h1 className='text-gray-500'>Orders</h1>
            <h3 className='text-2xl font-medium'>5100</h3>
            <h3>Per Day</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
