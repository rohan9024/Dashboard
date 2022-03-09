import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

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
      <div>
        <h1 className='text-2xl font-medium'>Hello David</h1>
        <h3 className='text-normal'>Welcome Back!</h3>
      </div>


      {/* Pahila dabba */}
      <div className='bg-yellow-200 rounded-lg'>
        <div>
          <h1>Views</h1>
        </div>
        <div>
          <h1>Visits</h1>

        </div>
        <div>
          <h1>Orders</h1>

        </div>
      </div>

    </div>


  )
}

export default Second
