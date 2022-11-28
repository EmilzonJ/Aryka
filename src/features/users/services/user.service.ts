import {User} from "firebase/auth";
import {auth} from "@/firebase";

export const getCurrentUser = async (): Promise<User | null> => {
  return auth.currentUser;
}
