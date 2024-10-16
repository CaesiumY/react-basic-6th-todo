import { SignupForm } from "@/components/auth/SignupForm";
import React from "react";

interface SignupPageProps {
  searchParams: {
    error?: string;
  };
}

const SignupPage = ({ searchParams }: SignupPageProps) => {
  return (
    <div className="min-h-screen flex items-center">
      <SignupForm />

      {searchParams.error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center p-2">
          {searchParams.error}
        </div>
      )}
    </div>
  );
};

export default SignupPage;
