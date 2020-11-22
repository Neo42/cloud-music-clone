import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import style from './index.css';
import api from '../../services/api';

function Login({ dispatch, history }) {
  const [form, setForm] = useState({ phone: '', password: '' });
  const handlePhone = ({ target: { value } }) => setForm({ ...form, ...{ phone: value } });
  const handlePassword = ({ target: { value } }) => setForm({ ...form, ...{ password: value } });
  const inputStyle = {
    marginRight: '-20px',
    width: 190,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const login = () => {
    const { phone, password } = form;
    if (phone === '' || password === '') {
      console.error('请输入您的电话号码和密码。');
      return undefined;
    }
    console.log('正在登录...');
    (async () => {
      const response = await api.loginViaPhoneNumber({ phone, password });
      if (response.data.code === 200) {
        console.log('登录成功！');
        dispatch({
          type: 'user/setUserProfile',
          payload: { userProfile: response.data.profile },
        });
      }
    })();
    history.push('/');
    return undefined;
  };

  const { phone, password } = form;
  return (
    <div className={style['login-page']}>
      <header><h1>网易云音乐</h1></header>
      <main className={style.main}>
        <div className={style['phone-input']}>
          <label htmlFor="phone">
            手机号码
          </label>
          <Input
            style={inputStyle}
            allowClear
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhone}
          />
        </div>
        <div className={style['password-input']}>
          <label htmlFor="password">
            密码
          </label>
          <Input.Password
            style={{
              marginRight: '-20px',
              width: 190,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className={style['login-button']}>
          <Button onClick={login} type="submit">
            登录
          </Button>
        </div>
      </main>
    </div>
  );
}

export default connect(({ user: { userProfile } }) => ({ userProfile }))(Login);
