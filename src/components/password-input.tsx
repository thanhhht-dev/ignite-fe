'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Eye, EyeOff } from 'lucide-react';

function PasswordInput({ type, ...props }: React.ComponentProps<'input'>) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-md">
      <Input type={showPassword ? 'text' : 'password'} {...props} />
      <Button
        type="button"
        variant="ghost"
        onClick={togglePasswordVisibility}
        className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent"
      >
        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </Button>
    </div>
  );
}

export { PasswordInput };
