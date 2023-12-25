import { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {/* @modal(패러랠 라우터)를 사용하기 위해선 layout이 동일 경로에 있어야 해서 layout을 또 하나 만듦. */}
      {children}
      {modal}
    </div>
  );
}
