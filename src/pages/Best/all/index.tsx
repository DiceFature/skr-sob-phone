import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopImg } from 'Api/bestShop'
import Select from '../select'

function All() {
	let navigate = useNavigate()
	let [allImg,setAllImg]:any = useState()
	let shoes = {
		parent_name:'鞋类',
		end:46
	}
	let clothes = {
		parent_name:'服饰',
		end:42
	}
	let parts = {
		parent_name:'配件',
		end:5
	}
	let children = {
		parent_name:'儿童专区',
		end:10
	}
	useEffect(()=>{
		let shoplist:any[] = []
		let p1 = ShopImg(shoes).then((data:any)=>{
			shoplist.push(...data)
		})
		let p2 = ShopImg(clothes).then((data:any)=>{
			shoplist.push(...data)
		})
		let p3 = ShopImg(parts).then((data:any)=>{
			shoplist.push(...data)
		})
		let p4 = ShopImg(children).then((data:any)=>{
			shoplist.push(...data)
		})
		Promise.all([p1,p2,p3,p4]).then(()=>{
			shoplist.sort(function (a:any, b:any) {
				return (b.sale - a.sale)
			});
			setAllImg([...shoplist])
		})
	},[])
	const goDetail = (id:number)=>{
		navigate('/details',{state:{id}})
	}
	
	return (
		<div className='child'>
			<ul className='child-classify'></ul>
			<Select />
			<div className='child-hot'>
				<ul className='child-hot-top'>
					{
						allImg?allImg.map((shop:any,index:number)=>{
							while(index<3){
								return (
									<li key={index} onClick={()=>{goDetail(shop.id)}}>
										<img src={shop.img} alt="" />
										<div className='child-sort'>
											<strong>{index+1}</strong>
											<div className='child-sort-best'>BEST</div>
											<div className='child-sort-triangle'></div>
										</div>
										<div className="textMax">
											<div className="text_wrap">
												<div className="brand">LOEUVRE</div>
												<div className="front"> [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송] </div>
												<div className="product"> Sac de Trompette Small FA0SB013-10 </div>
											</div>
											<div className="price">
												<span className="discount_price">{shop.price}</span>
												<span className="base_price">42,000</span>
												<span className="discount_rate">10%</span>
											</div>
											<p className="reservation">预定</p>
											<div className="review_box">
												<div className="graph">
													<span className="inner" style={{width: '98%'}}></span>
												</div>
												<div className="review_count"></div>
											</div>
										</div>
									</li>
								)
							}
						}):null
					}
				</ul>
				<ul className='child-hot-bottom'>
					{
						allImg?allImg.map((shop:any,index:number)=>{
							while(2<index && index<7){
								return (
									<li key={index} onClick={()=>{goDetail(shop.id)}}>
										<img src={shop.img} alt="" />
										<strong>{index+1}</strong>
										<div className="textMax">
											<div className="text_wrap">
												<div className="brand">vunque</div>
												<div className="front"> [댓글 이벤트] | [04/16 예약배송] </div>
												<div className="product"> Toque tote S (토크 토트 스몰) Light beige </div>
											</div>
											<div className="price">
												<span className="discount_price">{shop.price}</span>
												<span className="base_price">42,000</span>
												<span className="discount_rate">10%</span>
											</div>
											<p className="reservation">预定</p>
										</div>
									</li>
								)
							}
						}):null
					}
				</ul>
			</div>
			<div className='child-list'>
				{
					allImg?allImg.map((shop:any,index:number)=>{
						while(index>6){
							return (
								<li key={index} onClick={()=>{goDetail(shop.id)}}>
									<img src={shop.img} alt="" />
									<strong>{index+1}</strong>
									<div className="textMax">
										<div className="text_wrap">
											<div className="brand">Dunst for WOMEN</div>
											<div className="front">[04/23 예약배송]</div>
											<div className="product"> HALF-SLEEVES BELTED SUMMER-WOOL JACKET SOFT GREIGE_UDJA1E211G1 </div>
										</div>
										<div className="price">
											<span className="discount_price">{shop.price}</span>
											<span className="base_price">42,000</span>
											<span className="discount_rate">10%</span>
										</div>
										<p className="reservation">预定</p>
									</div>
								</li>
							)
						}
					}):null
				}
			</div>
		</div>
	)
}

export default All