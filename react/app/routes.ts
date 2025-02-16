import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "login",
    file: "login/login.tsx"
  },
  {
    path: "signup",
    file: "signup/signup.tsx"
  },
  {
    path: "upload",
    file: "upload/upload.tsx"
  },
  {
    path: "verify",
    file: "verify/verify.tsx"
  },
  {
    path: "welcome",
    file: "welcome/welcome.tsx"
  }
] satisfies RouteConfig;
