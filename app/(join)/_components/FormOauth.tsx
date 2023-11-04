import Image from "next/image";
import React from "react";

type FormOauthProps = {
  imagePath: string;
  innerText: string;
};

const FormOauth: React.FC<FormOauthProps> = ({ imagePath, innerText }) => {
  return (
    <div className="flex items-center gap-3 w-2/3 mx-auto py-3 pl-3 mb-5 nueumorphism">
      <Image src={imagePath} width={28} height={28} alt="Google ロゴ" />
      <p className="font-bold">Googleでログイン</p>
    </div>
  );
};

export default FormOauth;
