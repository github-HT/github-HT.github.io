import axios from 'axios';

export class Request {
  constructor(initConfig = {}) {
    this.instance = null;
    this.initReqest(initConfig);
  }
  initReqest(initConfig) {
    this.instance = axios.create(initConfig);
    this.addInterceptor();
  }

  addInterceptor() {
    // Add a request interceptor
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.data = JSON.stringify(config.data);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );
    // Add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        // Do something with response data
        return response;
      },
      function (error) {
        // Do something with response error
        return Promise.reject(error);
      },
    );
  }

  post(url, data, config) {
    return this.instance.post(url, data, config);
  }

  get(url, config) {
    return this.instance.get(url, config);
  }
}
