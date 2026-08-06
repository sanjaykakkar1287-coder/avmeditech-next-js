"use client";

import Link from "next/link";

const Button = ({ href, variant = "primary", children }) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;