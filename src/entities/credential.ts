export type IRegisterCredential = {
  fullName: string;
  email: string;
  password: string;
  receiveNewsletter: boolean;
};

export type ISignInCredential = {
  email: string;
  password: string;
};
