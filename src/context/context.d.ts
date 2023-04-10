interface IAppContext {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<IAppContext['theme']>>;
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<IAppContext['user'] | null>>;
}

type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
};
