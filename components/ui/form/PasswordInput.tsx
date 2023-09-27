import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface IPasswordInput {
  getFieldProps: any;
}

const PasswordInput: React.FC<IPasswordInput> = ({ getFieldProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center rounded-md overflow-hidden border border-teal-900/50 outline-none bg-white text-sm placeholder:text-sm pr-2 relative">
      <input
        type={showPassword ? 'text' : 'password'}
        {...getFieldProps('password')}
        placeholder="Password"
        className="flex-grow py-2 px-4 border-none outline-none bg-white text-sm placeholder:text-sm"
      />

      <div
        onClick={() => setShowPassword((prev) => !prev)}
        className="hover:bg-text-teal-500 w-10 h-10 grid place-items-center cursor-pointer"
      >
        {showPassword ? (
          <FaEye className="w-5" />
        ) : (
          <FaEyeSlash className="w-5" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
