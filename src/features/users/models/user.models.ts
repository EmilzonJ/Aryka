export interface User {
  id: string;
  name: string;
  email: string;
  cel: string;
  area: string;
}

export interface UserUpsertData extends Omit<User, "id"> {
  password: string;
}

export interface UserFirebaseAuth extends Omit<UserUpsertData, "cel" | "area"> {
    uid: string;
}

export interface UserDataEdit extends Omit<User, "id" | "email">{
  
}