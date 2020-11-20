import React, { useState } from 'react';
import style from './index.css';
import api from '../../services/api';

export default function Login() {
  const [form, setForm] = useState({ phone: '', password: '' });
  const handlePhone = ({ target: { value } }) => setForm({ ...form, ...{ phone: value } });
  const handlePassword = ({ target: { value } }) => setForm({ ...form, ...{ password: value } });

  const login = () => {
    const { phone, password } = form;
    if (phone === '' || password === '') {
      console.error('请输入您的电话号码和密码。');
      return undefined;
    }
    console.log('Login...');
    (async () => {
      const response = await api.loginViaPhoneNumber({ phone, password });
      if (response.data.code === 200) {
        console.log('登录成功！');
        console.log(response.data);
      }
    })();
    return 'Finished';
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
          <input type="text" id="phone" value={phone} onChange={handlePhone} />
        </div>
        <div className={style['password-input']}>
          <label htmlFor="password">
            密码
          </label>
          <input type="password" id="password" value={password} onChange={handlePassword} />
        </div>
        <div className={style['login-button']}>
          <button onClick={login} type="submit">
            登录
          </button>
        </div>
      </main>
    </div>
  );
}
