import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.GoogleProvider = new GoogleAuthProvider();
    this.GithubProvider = new GithubAuthProvider();
  }
  login(provider) {
    signInWithPopup(this.auth, this[`${provider}Provider`]);
  }
  logout() {
    this.auth.signOut();
  }
  onAuthStateChanged(onChangedUser) {
    this.auth.onAuthStateChanged((user) => {
      onChangedUser(user);
    });
  }
}

export default AuthService;
