import { ReactNode } from 'react';

const FormButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="submit"
      className="py-2 px-4 rounded-md bg-teal-900 text-center font-bold text-white active:scale-95 duration-150"
    >
      {children}
    </button>
  );
};

export default FormButton;
