import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex gap-x-4">
      <div>로그인 된 유저만 접근 가능한 화면입니다</div>
      <UserButton />
    </div>
  );
}
