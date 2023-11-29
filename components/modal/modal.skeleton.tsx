import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({
  children,
  className = '',
  ref,
}: { ref: any } & Props) => {
  return (
    <div
      ref={ref}
      className="fixed p-1 z-10 backdrop-blur bg-black/50 w-full h-screen flex justify-center items-center top-0 left-0"
    >
      <div
        className={`w-3/4 md:w-1/2 lg:w-1/3 text-center absolute rounded-md overflow-hidden bg-white border-[1px] border-neutral-500 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export const Header = function Header({ children, className = '' }: Props) {
  return <div className={`p-4 text-xl ${className}`}>{children}</div>;
};

export const Body = function Body({ children, className = '' }: Props) {
  return (
    <div className={`p-4 max-h-[80vh] overflow-auto ${className}`}>
      {children}
    </div>
  );
};

export const Footer = function Footer({ children, className = '' }: Props) {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
