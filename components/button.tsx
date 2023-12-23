import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  href: string;
};

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg bg-orange px-3 py-2 text-sm font-medium text-white hover:bg-amber-400 focus:outline-none"
    >
      {text}
    </Link>
  );
};

export default Button;
