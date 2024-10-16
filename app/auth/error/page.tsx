import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface ErrorPageProps {
  searchParams: {
    error?: string;
  };
}

const ErrorPage = ({ searchParams }: ErrorPageProps) => {
  return (
    <div className="min-h-screen flex items-center text-center flex-col justify-center">
      <div className="max-w-[768px] mx-auto p-4 space-y-4">
        <h1 className="font-bold text-2xl">Something went wrong</h1>

        <p>{searchParams.error}</p>

        <div>
          <Link href={"/"}>
            <Button className="w-full">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
