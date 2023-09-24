"use client";

import Button from "@/components/Button";
import FormInput from "../components/FormInput";
import FormOauth from "../components/FormOauth";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type SignupInputType = {
  email: string;
  confirmEmail: string;
  password: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInputType>();
  const signinSubmitHandler: SubmitHandler<SignupInputType> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-center">ログイン</h2>
      <form onSubmit={handleSubmit(signinSubmitHandler)} className="mt-9">
        <FormInput label="メールアドレス" />
        <FormInput label="パスワード" />
        <div className="flex justify-end">
          <Button className="py-2 px-8 text-acc tracking-wide rounded-full nueumorphism">
            ログイン
          </Button>
        </div>
      </form>
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
