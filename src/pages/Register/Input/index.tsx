import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';


interface Prop{}
export interface Shop{
  id:string;
  name: string;
  price: number;
  count: number;
}

const Input1: React.FC<Prop> = (props:Prop) => {
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  

  return (
    <div className='Inputs'>
      <div className="register-tips">
        <h2>如果您注册成为会员，您将获得10％的折扣券,可以立即使用。
          <span>（每个完成自我认证的帐户只能使用一次）</span>
        </h2>
      </div>
      <div className="Input">
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          labelAlign='left'
          rules={[
            { required: false},
            {max:6,message:'用户名长度不能超过6'},
            { pattern:/[a-zA-Z\u4e00-\u9fa5]/g,message:'用户名必须是中文' }
      ]}
        >
          <Input size='large' placeholder="请输入用户名！" />
        </Form.Item>

        <Form.Item
          label="密码"
          labelAlign='left'
          name="password"
          rules={[{ required: false },
          {pattern:/^\d{0,6}$/g,message: '用户密码只能是数字且在0-6位'}
        ]}
        >
          <Input size='large' placeholder="请填写用户密码!" />
        </Form.Item>
        <Form.Item
          label="邮箱"
          labelAlign='left'
          name="emailShow"
          rules={[
            {
              required: false,
            },{
              pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: '请正确填写邮箱'
            }
          ]}
        >
          <Input size='large' placeholder="请填写邮箱!" />
        </Form.Item>
        <Form.Item
          label="手机号"
          labelAlign='left'
          name="phoneShow"
          rules={[
            {
              required: false
            },{
              pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message: '请正确填写手机号'
            }
          ]}
        >
          <Input size='large' placeholder="请填写手机号!"/>
          
          
        </Form.Item>
        <div className="Verification-Code">
            <Button type="primary" htmlType="submit">
              发送验证码
          </Button>
          </div>
      </Form>
    </div>
    <div className="Input">
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="验证码"
          labelAlign='left'
          name="codeShow"
          rules={[
            {
              required: false,
            },{
              pattern:/^\d{6}$/g,message: '验证码是数字且6位'
            }
          ]}
        >
          <Input size='large' placeholder="请填写6位数字验证码!"/>
        </Form.Item>
        <div className="submit">
          <Button type="primary" htmlType="submit" size='large'>
              取消
          </Button>
          <Button type="primary" htmlType="submit" size='large'>
              确认
          </Button>
    </div>
      </Form>
    </div>
    </div>
  );
};

export default Input1;