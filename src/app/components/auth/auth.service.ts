import { AuthData } from "./auth.data.model";
import { User } from "./user.model";

export class AuthService {
  private user: User;
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
  }
  signIn(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
  }
  signOut() {
      this.user = null;
  }

  getUser() {
      return {...this.user};
  }

isAuth() {
    return this.user != null;
}

}
