import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_24px_-8px_rgba(212,165,55,0.6)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800",
  ghost:
    "bg-transparent text-white border border-white/30 hover:border-white/70",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
