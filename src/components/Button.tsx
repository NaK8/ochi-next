import React from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonTypes = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

const btnTypes = {
  primary: "btn--primary",
  secondary: "btn--default",
};

function Button({ children, variant }: ButtonTypes) {
  return (
    <button className={`btn ${btnTypes[variant]}`}>
      {children}
      <span className="icon">
        <i>
          <ArrowUpRight size={30} strokeWidth={1} color="#333" />
        </i>
      </span>
    </button>
  );
}

export default Button;
