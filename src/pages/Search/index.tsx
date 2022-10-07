import React,{useEffect,useState} from 'react'
import { Outlet, NavLink,useParams } from 'react-router-dom';
import './index.scss'
import { SearchShow } from 'Api/search';

const Search = () => { 

  const params = useParams()
  console.log(params);
  
  let [textData,setData] = useState<any[]>()
  const text:any = params.name
  
  useEffect(()=>{
    SearchShow(text).then((data:any)=>{
      setData(data.res)
    })
  },[text])
  
  return (
    <div>
      <div className='search-tip'>
        <h1>{text} 有{textData?.length}个搜索结果</h1>
      </div>
      <div className="three-tab">
        <NavLink style={linkActive} to={`/search/product/${text}`}><p>产品({textData?.length})</p></NavLink>
        <NavLink style={linkActive} to='/search/activity'><p>活动(0)</p></NavLink>
        <NavLink style={linkActive} to='/search/show'><p>买家秀(5)</p></NavLink>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Search

function linkActive ( {isActive}: { isActive: boolean } ){
  if(isActive){
      // 高亮展示的路由 
      return {
        backgroundColor: '#333',
        color: '#fff',
      }
  }else{
      return {
        color: '#5a5a5a',
      }
  }
}
