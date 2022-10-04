import { lazy,Suspense } from "react";
import { Navigate,Routes,Route } from "react-router-dom";

// 引入获取cookie的工具ts函数
import { getCookie } from 'assets/ts/cookie';

import Home from '../pages/Home'; // 首页
import NotFound from '../pages/404/index'; // 404 错误页面
import Loading from "components/Loading";

// 进度条加载
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// React 组件懒加载

// 快速导入工具函数
const lazyLoad = (moduleName: string) => {
    NProgress.start() // 显示进度条
    const Module = lazy(() => import(`pages/${moduleName}`));
    return <Module></Module>;
};

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
    if (!getCookie("login")) {
        return <Navigate to="/login" replace />;
    }else{
        return children
    }

};
  

interface Router {
    path: string, // 路由路径
    children?: Array<Router>,  // 子路由
    element: any, // 路由页面
    auth?:boolean // 需要路由鉴权
}

const routes: Array<Router> = [
    // 主页
    {
        path: '/home',
        element:<Home></Home>,
    },
    // 登录页
    {
        path: '/login',
        element:lazyLoad("Login"),
    },
    // 注册页
    {
        path: '/signup',
        element:lazyLoad('Home')
    },
    // 一级分类页
    {
        path: '/primary',
        element:lazyLoad('Home')
    },
    // 独家
    {
        path: '/exclusive',
        element:lazyLoad('Home')
    },
    // WDNA(3D轮播图)
    {
        path: '/wdna',
        element:lazyLoad('Home')
    },
    // Event
    {
        path: '/event',
        element:lazyLoad('Home')
    },
    // Best
    {
        path: '/best',
        element:lazyLoad('Home')
    },
    // 个人中心(需要登陆)
    {
        path: '/mypage',
        element:lazyLoad('Mypage'),
        auth:true
    },
    // 购物车(需要登陆)
    {
        path: '/shopcar',
        element:lazyLoad('Mypage'),
        auth:true
    },
    // 二级数据
    {
        path: '/secondary',
        element:lazyLoad('Home')
    },
    // 搜索
    {
        path: '/search',
        element:lazyLoad('Search'),
        children:[
            {
                path:'product',
                element:lazyLoad('Product')
            },
            {
                path:'activity',
                element:lazyLoad('Activity')
            },
            {
                path:'show',
                element:lazyLoad('Show')
            },
            {
                path:'/search',
                element:<Navigate to="/search/product"></Navigate>
            }
        ]
    },
    // 底部路由跳转
    {
        path:'/about', // 关于我们
        element:lazyLoad('About')
    },
    {
        path:'/advisory', // 咨询服务
        element:lazyLoad('Home')
    },
    {
        path:'/partner', // 合作伙伴查询
        element:lazyLoad('Partner')
    },
    {
        path:'/terms', // 服务条款
        element:lazyLoad('Home')
    },
    {
        path:'/privacy', // 隐私政策
        element:lazyLoad('Home')
    },
    {
        path:'/serviceCenter', // 服务中心
        element:lazyLoad('Home')
    },
    {
        path:'/offers', // 招聘信息
        element:lazyLoad('Offter')
    },
    {
        path:'/',
        element:<Navigate to="/home"></Navigate>
    },
    {
        path: '*',
        element:<NotFound/>,
    },
];

const MyRouter =()=>{
    return (
        <Suspense fallback={<Loading/>}> 
            <Routes>
                {
                    routes.map((item,index)=>{
                        if (item.auth) {
                            return <Route key={index} path={item.path} element={<Appraisal>{item.element}</Appraisal>}></Route>
                        }
                        return (item.children ? 
                            <Route key={index} path={item.path} element={item.element}>
                                {
                                    item.children.map((e,i)=>
                                        <Route key={i} path={e.path} element={e.element}/>
                                    )
                                }
                            </Route>:
                            <Route key={index} path={item.path} element={item.element}></Route>
                    )})
                }
            </Routes>
        </Suspense>     
    )
}


export default MyRouter;



