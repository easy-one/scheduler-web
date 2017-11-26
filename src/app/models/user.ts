export default class User {
  googleId: number;
  email: string;
  name: string;
  photoUrl: string;
  token: string;
  expires: number;
}

// note: this is what is saved in DB. See also SocialUser