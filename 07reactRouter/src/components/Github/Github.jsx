import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  // //method 1 (for method 2 see githubInfoLoader function and also see in main.jsx ,loader key in github route)
  //   const[data,setData]=useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/SurajPradhan9')
  //       .then(response=>response.json())
  //       .then(data=>{
  //           console.log(data)
  //           setData(data)
  //       })
  //   },[])

  //method 2//optimized method
  const data=useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div>Name: {data.name}</div>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="github profile pic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/SurajPradhan9')
  return response.json();
}
