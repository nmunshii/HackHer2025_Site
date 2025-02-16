import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { About } from "../about/about";
import { LogIn } from "~/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <LogIn />;
}
