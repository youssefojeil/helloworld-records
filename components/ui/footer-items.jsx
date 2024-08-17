import { cn } from "@/lib/utils";
import Link from "next/link";

import { IconBrandInstagram } from "@tabler/icons-react";

const navigation = {
  title: "Services",
  links: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/galenaaesthetics",
      icon: <IconBrandInstagram className=" text-4xl" />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/galenaaesthetics/",

      icon: <IconBrandInstagram className="text-4xl" />,
    },
  ],
};

const FooterItems = () => {
  return (
    <footer>
      <div className="text-center flex flex-col items-center justify-center mb-1">
        <Link href={"/"}>
          <h2 className="font-bold text-3xl  mb-4 md:mb-0 text-center md:text-start text-neutral-200 ">
            HelloWorld
          </h2>
        </Link>

        <p className="text-sm text-neutral-200 mt-4  text-center md:text-end">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterItems;
