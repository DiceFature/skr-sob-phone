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
      <div className='fl-q-advisory-adv'><h2>????????????</h2></div>
      <div className="fl-q-advisory-fromStep">
        <ul>
          <li>
            <span className='fl-q-advisory-fromStep-span'>??????01</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>??????????????????/????????????</span></strong>
            <p>?????????????????????/??????</p>
          </li>
          <li>
            <span className='fl-q-advisory-fromStep-span'>??????02</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>???????????????????????????</span></strong>
            <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          </li>
          <li>
            <span className='fl-q-advisory-fromStep-span'>??????01</span>
            <Space>
              <SnippetsOutlined id='fl-q-advisory-fromStep-i' />
            </Space>
            {/* <span className="iconfont icon-wenjian" id='fl-q-advisory-fromStep-i'></span> */}
            <strong><span>???????????????????????????</span></strong>
            <p>???????????????????????????????????????????????????</p>
          </li>
        </ul>
      </div>
      <div className="fl-q-advisory-note">
        <div className='fl-q-advisory-note-1'>???????????????????????????????????????</div>
        <p className='fl-q-advisory-note-2'>1.???????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>
        <p className='fl-q-advisory-note-3'>2.???????????????????????????????????????????????????????????????????????????????????????MD???????????????????????????????????????????????? </p>
        <p className='fl-q-advisory-note-4'>3. W. Concept?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>
        <p className='fl-q-advisory-note-5'>4.?????????????????????????????????????????????MD???????????????????????????/ CS??????????????????????????????????????????????????????????????? </p>

      </div>
      <div className="fl-q-advisory-context">
        <div className="fl-q-advisory-context-fromMain">
          <div className="fl-q-advisory-context-fromMain-list">
            <div className='fl-q-advisory-context-fromMain-l'><label>???????????????</label></div>
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
            <div className='fl-q-advisory-context-fromMain-l'><label>???????????????</label></div>
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
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">?????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" />

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
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
          {/* ????????????????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">????????????????????????</label>
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
          {/* ?????????????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">?????????????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="123" style={{ width: 80 }} />&nbsp;@&nbsp;
              <Input placeholder="qq.com" style={{ width: 80 }} />&nbsp;&nbsp;
              <Select
                labelInValue
                defaultValue={{ value: 'jack', label: '????????????' }}
                style={{ width: 80 }}
                onChange={handleChange}
              >
                <Option value="jack">????????????</Option>
              </Select>


            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Space direction="vertical">
                <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
              </Space>

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list-1">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="Basic usage" className='fl-q-advisory-context-fromMain-r-1' style={{ width: 300 }} />
              <div className='fl-q-advisory-context-fromMain-r-div'>??????????????????</div>
              <Input placeholder="Basic usage" style={{ width: 280 }} />&nbsp;&nbsp;
              <Input placeholder="Basic usage" style={{ width: 280 }} />

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list-2">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <TextArea rows={2} style={{ width: 500 }} />
              <br />
              <br />
              {/* <TextArea rows={2} placeholder="maxLength is 6" maxLength={0} /> */}

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>??????????????????</Radio>
                <Radio value={2}>??????</Radio>
                <Radio value={3}>????????????</Radio>
              </Radio.Group>

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              {/* <Radio.Group onChange={onChange} value={value}>
                <Radio value={4}>??????</Radio>
              </Radio.Group> */}

              <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>
                <Row>
                  <Col span={30}>
                    <Checkbox value="??????">??????</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>

            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list-2">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <TextArea rows={2} style={{ width: 500 }} />
              <br />
              <br />

            </div>
          </div>
          {/* ????????????????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">????????????????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">
              <Input placeholder="" style={{ width: 500 }} />
            </div>
          </div>
          {/* ???????????? */}
          <div className="fl-q-advisory-context-fromMain-list-3">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">???????????????</label>
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
          {/* ?????????????????? */}
          <div className="fl-q-advisory-context-fromMain-list">
            <div className="fl-q-advisory-context-fromMain-l">
              <label htmlFor="">?????????????????????</label>
            </div>
            <div className="fl-q-advisory-context-fromMain-r">


            </div>
          </div>
        </div>
        <div className="fl-q-advisory-context-viewContent">
          <Checkbox onChange={onChange1} >?????????????????????????????????(??????)</Checkbox>
          <button onClick={() => { onc() }}><span >????????????</span></button>
        </div>
        <div className="fl-q-advisory-context-application">
          <button className='fl-q-advisory-context-application-btn'><span>??????</span></button>
          <button className='fl-q-advisory-context-application-btn1'><span>??????</span></button>
        </div>
        <div className="fl-q-advisory-context-mask">
          <div className='fl-q-advisory-context-mask_box'>
            <div className="fl-q-advisory-context-mask-mbar">
              <h2>???????????????????????????(??????)</h2>
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



