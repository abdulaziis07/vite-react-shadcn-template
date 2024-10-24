import React from "react";

type WelcomeComponentProps = {
  className?: string | undefined;
  onClick: () => void;
  count: number;
}

export const Welcome: React.FC<WelcomeComponentProps> = ({ className, onClick, count }) => {
  return (
    <div className={`grid grid-cols-1 place-items-center p-4 ${className}`}>
      <h1 className="font-sans font-bold text-2xl md:text-4xl tracking-tight antialiased text-slate-300">Welcome!</h1>
      <button className="bg-gradient-to-r from-violet-600 to-violet-800 text-slate-300 px-4 py-2 rounded-lg" onClick={onClick}>Count: <span>{count}</span></button>
    </div>
  )
}
