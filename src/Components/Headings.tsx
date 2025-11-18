import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1
      className={clsx(
        "text-2xl font-[Georgia,_serif] md:text-4xl lg:text-[40px] leading-snug sm:leading-[1.3] mb-4 sm:mb-6 font-bold text-[#a0430a]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2
      className={clsx(
        "text-[17px] lg:text-[20px] md:text-[15px] font-[Georgia,_serif] font-bold text-[#a0430a] mb-3",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: Props) {
  return (
    <h3
      className={clsx(
        "text-[15px] font-['Roboto','sans-serif'] lg:mb-4 sm:text-[1rem] md:text-[15px] leading-[1.6] text-[#7f7060] mb-8 sm:mb-9 px-0",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: Props) {
  return (
    <h4
      className={clsx(
        "text-[18px] sm:text-[22px] md:text-[24px] font-[Georgia,_serif] font-bold text-[#a0430a] mb-1",
        className
      )}
    >
      {children}
    </h4>
  );
}
