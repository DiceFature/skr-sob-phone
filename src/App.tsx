import React,{
  useEffect,
  useState
} from 'react';

import { useRoutes,useLocation } from 'react-router-dom';
// 引入路由表
import MyRouter from 'router';
// 设置cookie
import { setCookie } from './assets/ts/cookie';
// 引入加载中组件
import Loading from 'components/Loading';
// 进度条加载
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function App() {
  const location = useLocation();
  const [offLoad,setoffLoad] = useState<boolean>(true);

  // 路由监听
  useEffect(() => {
    let setLoad = setTimeout(()=>{
      NProgress.done() // 关闭进度条
      setoffLoad(false)
    },800);

    return ()=>{
      // 销毁组件清除定时器，其实就是切换路由的时候
      clearTimeout(setLoad)
    }
  }, [location]);

  return (
    <div>
      <h1>顶部导航组件</h1>
        <MyRouter/>
      <h1>底部导航组件</h1>
      {offLoad?<Loading/>:''}
    </div>
  )
}

export default App;