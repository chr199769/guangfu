import axios from 'axios';
import { BaseRequestFunc, ServiceMap } from '../typings';
import { serviceMap } from './servicemap'

const service = {} as Record<keyof typeof serviceMap, BaseRequestFunc>;

const ServiceCreator = (serviceMap: ServiceMap) => {
  const directService: any = {};

  Object.keys(serviceMap).forEach(key => {
    const mapItem = serviceMap[key];
    directService[key] = async function (params: any) {
      return axios(`${mapItem.url}`, {
        method: mapItem.method,
        params: mapItem.method === 'GET' ? params : undefined,
        headers: mapItem.headers,
        timeout: mapItem.timeout,
        data: mapItem.method === 'POST' ? params : undefined,
      });
    };
  })

  Object.assign(service, directService);
}

ServiceCreator(serviceMap)

export default service;