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

export const getAllServices = async (token: string): Promise<IService[]> => {
  const {data} = await axiosInstance.get('/services/all', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data;
};

export const getMostBookedServices = async (
  token: string,
): Promise<IService[]> => {
  const {data} = await axiosInstance.get('/services/most-booked', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data;
};

export const getAllBookings = async (token: string): Promise<IBooking[]> => {
  const {data} = await axiosInstance.get('/bookings/all', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data.data;
};

export const getUpcomingBookings = async (
  token: string,
): Promise<IBooking[]> => {
  const {data} = await axiosInstance.get('/bookings/upcoming', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data.data;
};
