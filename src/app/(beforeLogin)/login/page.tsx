import { redirect } from "next/navigation";

export default function Login() {
  redirect("/i/flow/login");
  return <div>모달떠요</div>;
}
