"use client";

import Button from "@/components/Button";
import Link from "next/link";
import FormInput from "../components/FormInput";
import FormOauth from "../components/FormOauth";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "@/db/firebase";

type SigninInputType = {
  email: string;
  confirmEmail: string;
  password: string;
};

export default function Signup() {
  const database = db;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SigninInputType>();
  const signupSubmitHandler: SubmitHandler<SigninInputType> = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-center">アカウント作成</h2>
      <form onSubmit={handleSubmit(signupSubmitHandler)} className="mt-9">
        <FormInput {...register("email")} label="メールアドレス" />
        <FormInput {...register("confirmEmail")} label="メールアドレス（確認）" />
        <FormInput {...register("password")} label="パスワード" />
        <div className="flex justify-end">
          <Button className="py-2 px-8 text-acc tracking-wide rounded-full nueumorphism">
            作成
          </Button>
        </div>
      </form>
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
