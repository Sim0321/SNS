"use client";
import { redirect, useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function Login() {
  // redirect("/i/flow/login"); // 기본적으로 server component인데 서버에서 이렇게 리다이렉트하면 인터셉팅이 제대로 되지 않는다.
  const router = useRouter();
  router.replace("i/flow/login");
  return <Main />;
}

// replace(뒤로가기 이동 후에 히스토리를 없앤다.) vs push(뒤로가기 이동 후의 바로 전 히스토리로 가진다.)
