import React from "react";
import LoginForm from "./LoginForm";
import styles from './index.module.less';
import { Card, Image } from "antd";
import LoginCardImg from '../../static/LoginCardImg.jpeg';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['login-container']}>
      <Card 
        bordered={false}
        bodyStyle={{ width: '600px', height: '400px', }}
      >
        <Image width={200} preview={false} src={LoginCardImg} />
        <div className={styles['form-container']}>
          <span>登录</span>
          <span>分布式光伏运维管理平台</span>
          <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
      </Card>  
    </div>
  );
};

export default Login