import Button from "@/components/Button";
import Link from "next/link";
import FormInput from "../components/FormInput";
import FormOauth from "../components/FormOauth";

export default function Signup() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">アカウント作成</h2>
      <div className="mt-9">
        <FormInput label="メールアドレス" />
        <FormInput label="メールアドレス（確認）" />
        <FormInput label="パスワード" />
        <div className="flex justify-end">
          <Button className="py-2 px-8 text-acc tracking-wide rounded-full nueumorphism">
            作成
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <FormOauth imagePath="/google-logo.png" innerText="Googleでログイン" />
        <FormOauth imagePath="/line-logo.png" innerText="Lineでログイン" />
      </div>
      <div className="mt-10 text-center">
        <Link href="/signin" className="text-sm text-acc">
          アカウント作成済みの方はこちら
        </Link>
      </div>
    </>
  );
}
