import {axiosInstance} from '../libs';

export const getUsers = async () => {
  const {data} = await axiosInstance.get('/users/all');
  return data.data;
};

type TLoginPayload = {
  email: string;
  password: string;
};

export const login = async (payload: TLoginPayload) => {
  const {data} = await axiosInstance.post('/auth/login', payload);
  return data;
};

type TSignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export const signup = async (payload: TSignupPayload) => {
  const {data} = await axiosInstance.post('/auth/signup', payload);
  return data;
};

export const getUserInfo = async (token: string) => {
  const {data} = await axiosInstance.get('/users/me', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data;
};
