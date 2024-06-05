import Link from "next/link";
import { LinkProps } from "next/link";

type NextLinkProps = {
  children: React.ReactNode;
  fz?: number;
  fw?: number;
  c?: string;
  className?: string | undefined;
} & LinkProps;

export const NextLink = ({
  children,
  fz = 16,
  fw = 400,
  href,
  c = "black",
  ...rest
}: NextLinkProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", color: c, fontSize: fz, fontWeight: fw }}
      {...rest}
    >
      {children}
    </Link>
  );
};
