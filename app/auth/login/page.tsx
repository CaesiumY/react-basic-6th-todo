import LoginForm from "@/components/auth/LoginForm";
import React from "react";

interface LoginPageProps {
  searchParams: {
    error?: string;
  };
}

const LoginPage = ({ searchParams }: LoginPageProps) => {
  return (
    <div className="min-h-screen flex items-center">
      <LoginForm />
      {searchParams.error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center p-2">
          {searchParams.error}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
