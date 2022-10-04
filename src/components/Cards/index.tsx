import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;
interface Prop{
  width?: number,
  height?: number,
  title?: string,
  description?:string,
  imgSrc?:string,
}
const Cards: React.FC<any> = ({width=240,height=390,title="Europe Street beat",description="www.instagram.com",imgSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}:Prop) => (
  <Card
    hoverable
    style={{ width,height }}
    cover={<img alt="example" src={imgSrc} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default Cards;