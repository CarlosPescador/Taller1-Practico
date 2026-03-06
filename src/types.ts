// ─── Interfaces para la Random User API ───────────────────────────────────────

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
}

export interface UserLogin {
  uuid: string;
  username: string;
}

export interface UserDob {
  date: string;
  age: number;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDob;
  phone: string;
  picture: UserPicture;
  nat: string;
}

export interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
