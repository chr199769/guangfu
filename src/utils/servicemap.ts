import { ServiceMap } from "../typings";

export const serviceMap: ServiceMap = {
  login: {
    url: '/login',
    method: 'POST',
    headers: {
      isToken: false
    },
  },
  register: {
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'POST',
  },
  getUserInfo: {
    url: '/getInfo',
    method: 'GET'
  },
  logout: {
    url: '/logout',
    method: 'POST'
  },
  getErCode: {
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'GET',
    timeout: 20000
  }
}