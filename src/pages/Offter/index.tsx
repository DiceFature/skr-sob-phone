import type { RadioChangeEvent } from 'antd';
import { Steps, Divider, Radio, Form, Input } from 'antd';
import React, { useState } from 'react';
import recruit from '../../assets/img/following/img-recruit.jpg'
import '../../themes/Offter/index.scss'
import 'antd/dist/antd.css';


const Offter = () => {
  const { Step } = Steps;
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='offter'>
      <div className='offter_text'>招聘信息</div>
      <div className='offter_img'>
        <img src={recruit} alt="" />
      </div>
      <div className='off_text'>
        <h3>招聘程序</h3>
        <p>每次筛选的成功申请者公告均单独进行。</p>
        <p>如果申请表中有任何虚假信息，入场可能会被取消。</p>
      </div>
      <div className='steps'>
        <div>
          <Steps current={1}>
            <Step title="收到文件" />
            <Step title="面试" />
            <Step title="第二次面试" />
            <Step title="加入" />
          </Steps>
        </div>
        <div className='steps_text'>
          <div className='steps_text_left'>
            <p>薪资条件</p>
            <p>根据公司章程-最终面试后的决定</p>
          </div>
          <div className='steps_text_right'>
            <p>工作地点</p>
            <p>首尔特别市江南区德黑兰路14街16号5楼线(馆驿三洞)</p>
          </div>
        </div>
      </div>
      <div className='claim'>
        <h3>应用</h3>
        <div className='claim_form'>
          <div className='claim_form_'>
            <div>支援地区：</div>
            <div>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}> 产品计划(w概念频道MD) </Radio>
                <Radio value={2}>营销</Radio>
                <Radio value={3}>手术</Radio>
                <Radio value={4}>设计</Radio>
                <Radio value={5}>产品开发(前排)</Radio>
                <Radio value={6}>其他</Radio>
              </Radio.Group>
            </div>
          </div>
          <Divider className='form_divider' />
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="申请人姓名:">
                <Input />
              </Form.Item>
            </Form >
          </div>
          <Divider className='form_divider' />
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="出生日期:">
                <Input placeholder="2021/4/15" />
              </Form.Item>
            </Form >
          </div>
          <Divider className='form_divider' />
          <div>性别：</div>
          <div>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </div>
          <Divider className='form_divider' />
          <div>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
          </div>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider className='form_divider' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Offter