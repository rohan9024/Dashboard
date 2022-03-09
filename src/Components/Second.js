import React, { useEffect, useState } from 'react'
import FOLLOWERS from '../Assets/followers.png'
import following from '../Assets/following.png'
import posts from '../Assets/posts.png'

function Second() {

  const [feedsData, setFeedsData] = useState({});
  const [token, setToken] = useState('');
  const [obj, setObj] = useState("")
  const [followers, setFollowers] = useState("")


  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(`https://graph.facebook.com/v3.2/17841415660831513?fields=business_discovery.username(_is.it_raghav){followers_count,media_count}&access_token=EABCgQOxqTP8BADykWHQlubLRQtlLd6tYSncCRWZADPufbse7ombSZC8cLYFQdhp9Boxb0ZBUXKD5wSnTWedZBKTRvBZA5VsbSlOabNsbCmN3qOpkZBDUgZBd2Arju4bfYxNmhWPB3xB0RB16MZBQc3O0nliimTBoUn2S1mfSZA7kKZAwZDZD`);
  //     res
  //       .json()
  //       .then(res => setFeedsData(res))
  //       .catch((err) => console.log(err));

  //       // console.log(res)f
  //     const str = JSON.stringify(feedsData);
  //     setObj(JSON.parse(str));
  //     console.log(obj)
  //     // setFollowers(obj.business_discovery.followers_count);
  //     // console.log(followers)
  //   }
  //   fetchData()
  // }, [])



  return (
    <div className='flex-col items-center justify-center mt-10 ml-20'>

      {/* Welcome user */}
      <div className='mt-5'>
        <h1 className='text-4xl font-medium'>Hello David</h1>
        <h3 className='text-lg mt-6 mb-6 text-gray-500'>Welcome Back!</h3>
      </div>


      {/* Pahila dabba */}
      <div className=' bg-yellow-100 rounded-lg mt-5 w-[800px] h-[300px] flex justify-evenly items-center space-x-12'>
        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-yellow-500 rounded-full'>
            <img className='w-10 h-10' src={FOLLOWERS} alt="followers" />
          </div>
          <h1 className='text-normal mt-6 ml-1 text-gray-600'>Followers</h1>
          <h3 className='text-4xl font-bold mt-10 ml-1'>1M</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-yellow-500 rounded-full'>
            <img className='w-10 h-10 ' src={following} alt="following" />
          </div>
          <h1 className='text-normal mt-6 ml-1 text-gray-600'>Following</h1>
          <h3 className='text-4xl font-bold mt-10 ml-1'>100</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-yellow-500 rounded-full'>
            <img className='w-10 h-10' src={posts} alt="posts" />
          </div>
          <h1 className='text-normal mt-6 ml-4 text-gray-600'>Posts</h1>
          <h3 className='text-4xl font-bold mt-10 '>2000</h3>
        </div>
      </div>
    </div>
  )
}

export default Second
