"use client"
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Select, Upload } from 'antd';
import React, { useState } from 'react';
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
}

function Yug() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    setData(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  const [data,setData]=useState(null)
  
  return (
      <>
      <Form
      form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
          prefix:"+91",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
         
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
            {
              pattern: /^[a-z]+$/,
              message: 'Username must be in lowercase!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem
          name="firstName" 
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
            {
              pattern: /^[A-Za-z]+$/,
              message: 'First name cannot contain numbers!',
            },
          ]}
          >
            <Input />
          </MyFormItem>
          <MyFormItem 
          name="lastName" 
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
            {
              pattern: /^[A-Za-z]+$/,
              message: 'Last name cannot contain numbers!',
            },
          ]}
          >
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {
            pattern: /^[0-9]{10}$/,
            message: 'Phone number must be exactly 10 digits!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          maxLength={10}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
      name="upload"
      label="Profile Photo"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload  name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload </Button>
      </Upload >
    </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {data&& (
        <Card
        title="User Details"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p><strong>User Name:</strong>{data.username}</p>
        <p><strong>First Name:</strong>{data.name?.firstName}</p>
        <p><strong>Last Name:</strong> {data.name?.lastName}</p>
        <p><strong>Phone Number:</strong> {data.prefix} {data.phone}</p>
        <p><strong>Password:</strong> {data.password}</p>
      </Card>
      )}
      </>
    );
}

export default Yug;