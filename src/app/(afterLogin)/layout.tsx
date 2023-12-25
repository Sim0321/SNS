type Props = { children: React.ReactNode };
export default function AfterLoginLayout({ children }: Props) {
  return (
    <div>
      에프터 로그인 레이아웃
      {children}
    </div>
  );
}
