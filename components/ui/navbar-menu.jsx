// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const NavbarMenu = ({ navItems, className }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(true);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit  justify-center fixed top-10 inset-x-0 mx-auto  dark:border-white/[0.2] rounded-full z-[5000] pr-2 pl-8 py-2  items-center  space-x-8",
//           className
//         )}
//       >
//         {navItems.map((navItem, idx) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center flex space-x-4 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 mx-4"
//             )}
//           >
//             <span className=" text-xl font-bold uppercase">{navItem.name}</span>
//             {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
//             <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent  h-px" />
//           </Link>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavbarMenu = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  // Separate the "HelloWorld" item from the rest
  const helloWorldItem = navItems[0];
  const otherNavItems = navItems.slice(1);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex items-center fixed top-10 inset-x-0 px-8 z-[5000]",
          className
        )}
      >
        {/* HelloWorld Link on the left */}
        <div className="absolute left-8">
          <Link
            href={helloWorldItem.link}
            className={cn(
              "relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-xl font-bold uppercase">
              {helloWorldItem.name}
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          </Link>
        </div>

        {/* Other Nav Items in the center */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-8 items-center justify-center">
            {otherNavItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 flex items-center text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="text-xl font-bold uppercase">
                  {navItem.name}
                </span>
                {/* Optional underline effect */}
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
