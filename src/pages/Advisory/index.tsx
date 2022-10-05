import React, { useState } from 'react'
import './index.scss'
import type { RadioChangeEvent, UploadProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Steps, Select, Input, Space, Radio, Button, Upload, Checkbox, Col, Row, Empty } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { SnippetsOutlined } from '@ant-design/icons';


const { Option } = Select;
const { TextArea } = Input;
const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);
const props: UploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};
const Advisory: React.FC = () => {
  const { Step } = Steps;
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChange1 = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange2 = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  const onc = () => {
    var mask: any = document.querySelector('.fl-q-advisory-context-mask')
    mask.style.display = 'block';
  }
  const onc1 = () => {
    var mask: any = document.querySelector('.fl-q-advisory-context-mask')
    mask.style.display = 'none';
  }
  return (
    <div className='fl-q-advisory'>
      <div className='fl-q-advisory-adv'><h2>咨询服务</h2></div>
      <div className="fl-q-advisory-fromStep">
        <ul>
          <li>
            <span className='fl-q-advisory-fromStep-span'>步骤01</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>填写合作伙伴/进入申请</span></strong>
            <p>请申请隶属关系/进入</p>
          </li>
          <li>
            <span className='fl-q-advisory-fromStep-span'>步骤02</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>查看并与负责人联系</span></strong>
            <p>在每个领域的负责人审核之后，如果商店合适，我们将通过电话或电子邮件与您联系</p>
          </li>
          <li>
            <span className='fl-q-advisory-fromStep-span'>步骤01</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>条件咨询及合同签订</span></strong>
            <p>在讨论合伙的细节和条件后，订立合同</p>
          </li>
        </ul>
      </div>
      <div className="fl-q-advisory-note">
        <div className='fl-q-advisory-note-1'>※申请店铺咨询时的注意事项</div>
        <p className='fl-q-advisory-note-2'>1.如果您申请商店咨询，我们将在内部审查后通知您进入商店的可能性和合同程序。 </p>
        <p className='fl-q-advisory-note-3'>2.办理入住手续可能需要一段时间，因此请避免注册重复，并避免与MD联络以及通过客户中心查询可用性。 </p>
        <p className='fl-q-advisory-note-4'>3. W. Concept基于真正的处理方式，只有设计和生产自己的品牌公司才可以进入商店。（不允许进入商店买卖品牌或处理假货） </p>
        <p className='fl-q-advisory-note-5'>4.必须指定负责人以促进产品管理（MD）和订单管理（交货/ CS处理），如果不能这样做，则可能会拒绝接纳。 </p>

      </div>
      <div className="fl-q-advisory-context">
        <div className="fl-q-advisory-context-fromMain">
          <div className="fl-q-advisory-context-fromMain-list">
            <div className='fl-q-advisory-context-fromMain-l'><label>查询分类：</label></div>
            <div className='fl-q-advisory-context-fromMain-r'><Select
              labelInValue
              defaultValue={{ value: 'jack', label: 'Zone one' }}
              style={{ width: 180 }}
              onChange={handleChange}
            >
              <Option value="jack">Zone one</Option>
              <Option value="lucy">Zone two</Option>
            </Select></div>

          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className='fl-q-advisory-context-fromMain-l'><label>查询分类：</label></div>
            <div className='fl-q-advisory-context-fromMain-r'>
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: 'Zone one' }}
                style={{ width: 180 }}
                onChange={handleChange}
              >
                <Option value="jack">Zone one</Option>
                <Option value="lucy">Zone two</Option>
              </Select>
              &nbsp;&nbsp;&nbsp;
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: 'Zone one' }}
                style={{ width: 180 }}
                onChange={handleChange}
              >
                <Option value="jack">Zone one</Option>
                <Option value="lucy">Zone two</Option>
              </Select></div>

          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">公司名称：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">品牌：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">负责人：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          {/* 电话号码 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">电话号码：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: '018' }}
                style={{ width: 80 }}
                onChange={handleChange}
              >
                <Option value="jack">018</Option>
              </Select>&nbsp;&nbsp;
              <Input placeholder="" style={{ width: 80 }} />&nbsp;&nbsp;
              <Input placeholder="" style={{ width: 80 }} />
            </div>
          </div>
          {/* 负责人手机号码 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">负责人手机号码：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: '018' }}
                style={{ width: 80 }}
                onChange={handleChange}
              >
                <Option value="jack">018</Option>
              </Select>&nbsp;&nbsp;
              <Input placeholder="" style={{ width: 80 }} />&nbsp;&nbsp;
              <Input placeholder="" style={{ width: 80 }} />

            </div>
          </div>
          {/* 联系电子邮件 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">联系电子邮件：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="123" style={{ width: 80 }} />&nbsp;@&nbsp;
              <Input placeholder="qq.com" style={{ width: 80 }} />&nbsp;&nbsp;
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: '直接输入' }}
                style={{ width: 80 }}
                onChange={handleChange}
              >
                <Option value="jack">直接输入</Option>
              </Select>


            </div>
          </div>
          {/* 网站地址 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">网站地址：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Space direction="vertical">
                <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
              </Space>

            </div>
          </div>
          {/* 公司地址 */}
          <div className="fl-q-advisory-context-fromMain-list-1">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">公司地址：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" className='fl-q-advisory-context-fromMain-r-1' style={{ width: 300 }} />
              <div className='fl-q-advisory-context-fromMain-r-div'>查找邮政编码</div>
              <Input placeholder="Basic usage" style={{ width: 280 }} />&nbsp;&nbsp;
              <Input placeholder="Basic usage" style={{ width: 280 }} />

            </div>
          </div>
          {/* 关于我们 */}
          <div className="fl-q-advisory-context-fromMain-list-2">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">关于我们：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <TextArea rows={2} style={{ width: 500 }} />
              <br />
              <br />
              {/* <TextArea rows={2} placeholder="maxLength is 6" maxLength={0} /> */}

            </div>
          </div>
          {/* 产品类别 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">产品类别：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>国内产品经销</Radio>
                <Radio value={2}>收入</Radio>
                <Radio value={3}>自我生产</Radio>
              </Radio.Group>

            </div>
          </div>
          {/* 销售方式 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">销售方式：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              {/* <Radio.Group onChange={onChange} value={value}>
                <Radio value={4}>寄售</Radio>
              </Radio.Group> */}

              <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>
                <Row>
                  <Col span={30}>
                    <Checkbox value="寄售">寄售</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>

            </div>
          </div>
          {/* 产品介绍 */}
          <div className="fl-q-advisory-context-fromMain-list-2">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">产品介绍：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <TextArea rows={2} style={{ width: 500 }} />
              <br />
              <br />

            </div>
          </div>
          {/* 领带店进入状态 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">领带店进入状态：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="" style={{ width: 500 }} />
            </div>
          </div>
          {/* 品牌介绍 */}
          <div className="fl-q-advisory-context-fromMain-list-3">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">品牌介绍：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" style={{ width: 500 }} />
              <div className="fl-q-advisory-context-fromMain-r-1">
                <Upload {...props} >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </div>

            </div>
          </div>
          {/* 防止自动注册 */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">防止自动注册：</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">


            </div>
          </div>
        </div>
        <div className="fl-q-advisory-context-viewContent">
          <Checkbox onChange={onChange1} >同意收集和使用个人信息(必填)</Checkbox>
          <button onClick={() => { onc() }}><span >查看内容</span></button>
        </div>
        <div className="fl-q-advisory-context-application">
          <button className='fl-q-advisory-context-application-btn'><span>取消</span></button>
          <button className='fl-q-advisory-context-application-btn1'><span>申请</span></button>
        </div>
        <div className="fl-q-advisory-context-mask">
          <div className='fl-q-advisory-context-mask_box'>
            <div className="fl-q-advisory-context-mask-mbar">
              <h2>收集和使用个人信息(必填)</h2>
              <span onClick={() => { onc1() }} >x</span>
            </div>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Advisory



