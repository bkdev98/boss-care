import axios, {AxiosResponse} from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {CONSTANTS} from '@constants';

export interface IApiOptions {
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  data?: any;
  headers?: any;
  params?: any;
}

interface IResponse extends AxiosResponse {
  data: any;
  message?: any;
  config: any;
}

export default async ({
  method = 'GET',
  endpoint = '/',
  data,
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params,
}: IApiOptions): Promise<IResponse> => {
  // const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
  try {
    return await axios({
      method,
      url: CONSTANTS.API_URL + endpoint,
      data,
      params,
      headers,
      validateStatus() {
        // allow status >= 400 get through
        return true;
      },
    });
  } catch (error) {
    return {
      status: 500,
      statusText: 'Something went wrong',
      data: null,
      config: null,
      headers: null,
      message: error.message || 'Something went wrong',
    };
  }
};
