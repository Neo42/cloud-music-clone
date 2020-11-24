import React from 'react';
import { connect } from 'dva';
import {
  Button, Input, Form, Select,
} from 'antd';
import { Redirect } from 'dva/router';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../services/api';

import 'antd/dist/antd.css';
import style from './index.css';

const { Option } = Select;

function Login({ dispatch, userProfile }) {
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const login = (values) => {
    const { phone, password } = values;
    (async () => {
      const response = await api.loginViaPhoneNumber({ phone, password });
      if (response.data.code === 200) {
        dispatch({
          type: 'user/setUserProfile',
          payload: { userProfile: response.data.profile },
        });
      } else Promise.reject(response.data);
    })();
    return undefined;
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
          height: '100%',
        }}
      >
        <Option value="1">+1</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={style['login-page']}>
      {userProfile && <Redirect to="/" />}
      <header><h1>网易云音乐</h1></header>
      <main className={style.main}>
        <Form
          validateStatus="error"
          form={form}
          onFinish={login}
          onFinishFailed={onFinishFailed}
          name="login"
          initialValues={{
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="phone"
            rules={[{ required: true, message: '请输入您的手机号码。' }]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="手机号码"
              allowClear
              addonBefore={prefixSelector}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入您的密码。' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" className="login-form-button">
              登录
            </Button>
            {' '}
            <a href="">注册</a>
          </Form.Item>
        </Form>
      </main>
    </div>
  );
}

export default connect(({ user: { userProfile } }) => ({ userProfile }))(Login);
