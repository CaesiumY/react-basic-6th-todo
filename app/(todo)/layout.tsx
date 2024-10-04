import React, { PropsWithChildren } from "react";

const TodoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <main className="max-w-[768px] mx-auto p-4">{children}</main>
    </div>
  );
};

export default TodoLayout;
