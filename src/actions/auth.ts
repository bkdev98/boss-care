import {generateThunkAction, generateThunkType} from '@utils/redux';
import {ICredential} from '@entities/credential';

export const GENERATE_REQUEST_TOKEN = generateThunkType('GENERATE_REQUEST_TOKEN');
export const generateRequestToken = () =>
  generateThunkAction({
    actionType: GENERATE_REQUEST_TOKEN,
    apiOptions: {
      endpoint: '/authentication/token/new',
    },
  })();

interface ILoginCredential extends ICredential {
  request_token: string;
}

export const LOGIN = generateThunkType('LOGIN');
export const login = (credentials: ILoginCredential) =>
  generateThunkAction({
    actionType: LOGIN,
    apiOptions: {
      endpoint: '/authentication/token/validate_with_login',
      method: 'POST',
      data: credentials,
    },
  })();

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
