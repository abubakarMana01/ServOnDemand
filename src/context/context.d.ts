interface IAppContext {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<IAppContext['theme']>>;
  user: {} | null;
  setUser: React.Dispatch<React.SetStateAction<IAppContext['user'] | null>>;
}
