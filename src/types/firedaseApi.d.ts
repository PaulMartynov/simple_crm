type LoginData = {
  email: string;
  password: string;
};

interface NewUserData extends LoginData {
  name: string;
}
