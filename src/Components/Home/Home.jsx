import React from 'react'
import Search from '../Search'
import Trending from "./Trending"
// import Streamings from "../Latest Trailers/Streamings"

export default function Home() {
  return (
    <div>
      <Search/>
      <Trending/>
      {/* <Streamings/> */}
    </div>
  )
}
