import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const styles = {
  primary: "border-moss bg-moss text-white hover:bg-transparent hover:text-moss",
  outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  light: "border-white bg-transparent text-white hover:bg-white hover:text-moss",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}) {
  const classes = `group inline-flex min-h-11 items-center justify-center gap-5 border px-6 py-3 text-xs font-medium tracking-[0.18em] transition-colors duration-300 ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>;
  if (href) return <a className={classes} href={href} {...props}>{content}</a>;
  return <button className={classes} type="button" {...props}>{content}</button>;
}
