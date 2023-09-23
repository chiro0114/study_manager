import Button from "@/components/Button";
import FormInput from "../components/FormInput";
import FormOauth from "../components/FormOauth";
import Link from "next/link";

export default function Signin() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">ログイン</h2>
      <div className="mt-9">
        <FormInput label="メールアドレス" />
        <FormInput label="パスワード" />
        <div className="flex justify-end">
          <Button className="py-2 px-8 text-acc tracking-wide rounded-full nueumorphism">
            ログイン
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <FormOauth imagePath="/google-logo.png" innerText="Googleでログイン" />
        <FormOauth imagePath="/line-logo.png" innerText="Lineでログイン" />
      </div>
      <div className="mt-10 text-center">
        <Link href="/signup" className="text-sm text-acc">
          アカウントをお持ちでない方はこちら
        </Link>
      </div>
    </>
  );
}
