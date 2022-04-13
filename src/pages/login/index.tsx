import React from "react";
import LoginForm from "./LoginForm";
import styles from './index.module.less';
import { Card, Image, notification } from "antd";
import LoginCardImg from '../../static/LoginCardImg.jpeg';
import Service from '../../utils/api';
import { useNavigate } from "react-router";


const Login = () => {
  let nav = useNavigate()
  const onFinish = async () => {
    try {
      const { statusCode } = await Service.login();
      if (statusCode === 0) {
        nav('/platform')
      }
    } catch {
      notification['error']({
        message: '网络连接失败',
        placement: 'top',
      });
    }
    
  };

  const onFinishFailed = () => {
    notification['error']({
      message: '登录校验失败，请重新输入',
      placement: 'top',
    });
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