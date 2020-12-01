import {Alert} from 'react-native';
import fetchApi, {IApiOptions} from '@utils/fetchApi';
// import {logout} from './auth';

export function generateThunkType(type: string) {
  return {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`,
  };
}

export interface IAction {
  type: string;
  payload?: any;
}

interface IActionType {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}

export interface ICallback {
  success?: (data: any, dispatch: any) => void;
  failure?: (error: any, dispatch: any) => void;
}

interface IGenerateThunkType {
  actionType: IActionType;
  callback?: ICallback;
  preCallback?: (data: any) => void;
  inputPayload?: any;
  apiOptions?: IApiOptions;
  acceptStatus?: Number[];
}

export function generateThunkAction({
  actionType = generateThunkType('ACTION'),
  callback,
  preCallback,
  inputPayload,
  apiOptions = {
    endpoint: '/',
    method: 'GET',
    data: null,
  },
  acceptStatus = [200, 201],
}: IGenerateThunkType) {
  return () => {
    return async (dispatch: any, getState: any) => {
      // console.log(actionType.REQUEST);
      dispatch({
        type: actionType.REQUEST,
        payload: {...apiOptions, inputPayload},
      });
      try {
        const {status, data} = await fetchApi(apiOptions);
        // console.log(status, data);
        if (
          acceptStatus.includes(status) &&
          /** authentication */ (data.success ||
            /** list movies */ data.page ||
            /** detail movie */ data.id)
        ) {
          // console.log(actionType.SUCCESS, status, data);
          preCallback && (await preCallback(data));
          dispatch({
            type: actionType.SUCCESS,
            payload: {
              ...data,
              inputPayload: inputPayload || apiOptions.data,
            },
          });
          callback?.success?.(data, dispatch);
        } else {
          const isAuth = getState().auth.isAuth;
          if ((status === 401 || data?.message === 'Unauthenticated.') && isAuth) {
            // Perform logout action
            // dispatch(logout(true));
          } else {
            throw new Error(data?.status_message);
          }
        }
      } catch (error) {
        // console.log(actionType.FAILURE, error);
        dispatch({
          type: actionType.FAILURE,
          payload: {error, inputPayload},
        });
        callback?.failure
          ? callback?.failure(error.message, dispatch)
          : error.message !== 'Unauthenticated.' && Alert.alert('Error', error.message);
      }
    };
  };
}
