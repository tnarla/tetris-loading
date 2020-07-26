import React from "react";

export default ({ children, ...props }: { children: any }) => {
  return (
    <div className="h-screen w-screen" {...props}>
      {children}
    </div>
  );
};
