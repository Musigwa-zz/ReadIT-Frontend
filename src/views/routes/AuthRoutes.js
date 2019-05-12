import Login from "../Login";
import SocialAuth from "../SocialAuth";

const AuthRoutes = [
  {
    path: "/sign_in",
    component: Login,
  },
  {
    path: "/social_auth",
    component: SocialAuth,
  },
];
export default AuthRoutes;
