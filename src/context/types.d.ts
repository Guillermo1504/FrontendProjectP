export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  signUp: (user: User) => void;
  isAuthenticated: boolean;
};
