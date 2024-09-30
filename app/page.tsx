import Link from "next/link";
import React from "react";

const RootPage = () => {
  return (
    <div>
      RootPage
      <Link href="/todo/123">detail</Link>
    </div>
  );
};

export default RootPage;
