import React, { useEffect, useState } from 'react'
import FOLLOWERS from '../Assets/followers.png'
import following from '../Assets/following.png'
import posts from '../Assets/posts.png'

function Second() {

  const [feedsData, setFeedsData] = useState({});
  const [token, setToken] = useState('');
  const [obj, setObj] = useState()
  const [followers, setFollowers] = useState()
  // const [posts, setPosts] = useState()

  //   {
  //     "business_discovery": {
  //        "followers_count": 1,
  //        "media_count": 2,
  //        "media": {
  //           "data": [
  //              {
  //                 "comments_count": 1,
  //                 "like_count": 2,
  //                 "id": "17917228841192422"
  //              },
  //              {
  //                 "comments_count": 1,
  //                 "like_count": 2,
  //                 "id": "17951548414706253"
  //              }
  //           ]
  //        },
  //        "id": "17841452131317817"
  //     },
  //     "id": "17841452131317817"
  //  }


  // function fetchData() {
  //   fetch(`https://graph.facebook.com/v3.2/17841452131317817?fields=business_discovery.username(_aaila_aalia_){followers_count,media_count,media{comments_count,like_count}}&access_token=EAANFg0BMulMBADqQaDJGzZAC5Bmf5BQBLHKhFBDoZADXJLK1gGCbJ79Tw9sjilS8zfKPg2CTKsuEdR3q2wrAjoVqJOsee8l1rsscsVI1sTTxIRDCuHhnOCyl2kYJpZCuitTTnSqMeVaAfiL7YB01fYY7OrZANidVDnbn5alYvHPiyaLiEEnH`)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setFeedsData(data)
  //     })
  //   console.log(feedsData)
  //   const str = JSON.stringify(feedsData);
  //   setObj(JSON.parse(str));
  //   console.log(obj)
  //   setFollowers(str.business_discovery.followers_count);
  //   console.log(followers)

  // }

  // useEffect(() => {
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
      <div className=' bg-red-100 rounded-lg mt-5 w-[800px] h-[300px] flex justify-evenly items-center space-x-12'>
        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-red-500 rounded-full'>
            <img className='w-6 h-6' src={FOLLOWERS} alt="followers" />
          </div>
          <h1 className='text-normal mt-6 ml-1 text-gray-600'>Followers</h1>
          <h3 className='text-4xl font-bold mt-10 ml-1'>1M</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-red-500 rounded-full'>
            <img className='w-6 h-6 ' src={following} alt="following" />
          </div>
          <h1 className='text-normal mt-6 ml-1 text-gray-600'>Following</h1>
          <h3 className='text-4xl font-bold mt-10 ml-1'>100</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-red-500 rounded-full'>
            <img className='w-6 h-6' src={posts} alt="posts" />
          </div>
          <h1 className='text-normal mt-6 ml-4 text-gray-600'>Posts</h1>
          <h3 className='text-4xl font-bold mt-10 '>2000</h3>
        </div>
      </div>
    </div>
  )
}

export default Second
