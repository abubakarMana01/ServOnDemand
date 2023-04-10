import {Alert} from 'react-native';
import {getUserInfo, login} from '../../utils';
import * as yup from 'yup';

type TAttemptLogin = {
  values: {
    email: string;
    password: string;
  };
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
};

export const attemptLogin = async ({
  values,
  setIsLoading,
  setUser,
}: TAttemptLogin) => {
  setIsLoading(true);

  try {
    const data = await login({
      email: values.email,
      password: values.password,
    });

    const res = await getUserInfo(data.token);
    setUser(res.data);
  } catch (ex: any) {
    console.log(ex.response?.data?.error || ex.message);
    Alert.alert(
      'Something failed',
      ex?.response?.data?.error?.message || ex.message,
    );
  } finally {
    setIsLoading(false);
  }
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: yup
    .string()
    .min(8)
    .required('Password is required')
    .label('Password'),
});

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: yup
    .string()
    .min(8)
    .required('Password is required')
    .label('Password'),
  firstName: yup
    .string()
    .min(2)
    .max(255)
    .required('First name is required')
    .label('First name'),
  lastName: yup
    .string()
    .min(2)
    .max(255)
    .required('Last name is required')
    .label('Last name'),
});
