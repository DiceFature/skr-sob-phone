import React from 'react'
import { Outlet } from 'react-router-dom'

const Search = () => {
  return (
    <div>
      搜索页面
      <h4>三个tab切换</h4>
      <Outlet/>
    </div>
  )
}

export default Search
