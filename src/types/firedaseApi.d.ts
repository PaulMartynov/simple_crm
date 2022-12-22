type LoginData = {
  email: string;
  password: string;
};

interface NewUserData extends LoginData {
  name: string;
}

type CategoryData = {
  title: string;
  limit: number;
};

interface Category extends CategoryData {
  id: string;
}
