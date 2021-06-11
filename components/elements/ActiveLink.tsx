// react
import React, { FC } from "react";
// next
import Link from "next/link";
// next
import { useRouter } from "next/router";

export interface IActiveLink {
  href: string;
  children: any;
}

const ActiveLink: FC<IActiveLink> = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";

  if (router.pathname.endsWith(href)) {
    className = `${className} bg-light-primary text-primary`;
  }
  return <Link href={href}>{React.cloneElement(children, { className, href })}</Link>;
};

export default ActiveLink;
