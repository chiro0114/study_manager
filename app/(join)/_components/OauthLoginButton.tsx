import Button from "@/components/Button";
import { useUser } from "@/store";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React from "react";

type OauthLoginButtonProps = {
  imagePath: string;
  innerText: string;
};

const OauthLoginButton: React.FC<OauthLoginButtonProps> = ({ imagePath, innerText }) => {
  const { createUser } = useUser();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const logginOauth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);

        const user = result.user;
        createUser(user.uid);
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };
  return (
    <Button
      onClick={logginOauth}
      className="flex items-center gap-3 w-2/3 mx-auto py-3 pl-3 mb-5 nueumorphism"
    >
      <Image src={imagePath} width={28} height={28} alt="Google ロゴ" />
      <p className="font-bold">{innerText}</p>
    </Button>
  );
};

export default OauthLoginButton;
