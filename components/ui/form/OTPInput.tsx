import { ChangeEvent, Dispatch, Fragment, SetStateAction } from 'react';

interface IProps {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  containerStyles?: string;
  inputStyles?: string;
}

const OTPInput: React.FC<IProps> = ({
  otp,
  setOtp,
  containerStyles,
  inputStyles,
}) => {
  const handleOTPInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const value = e.target.value;
    const newValue = value.substring(value.length - 1);
    setOtp((prev) => prev.map((el, index) => (+index === +i ? newValue : el)));

    if (i > 4 || !newValue) return;

    const nextInput = document.querySelector(
      `input[name='${i + 1}']`
    ) as HTMLInputElement;
    nextInput.focus();
  };

  return (
    <div className={`flex items-center space-x-2 ${containerStyles || ''}`}>
      {otp.map((_, i) => (
        <Fragment key={i}>
          <input
            type="number"
            name={`${i}`}
            value={otp.find((_, index) => index === i)}
            onChange={(e) => handleOTPInputChange(e, i)}
            className={
              inputStyles ||
              'w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded bg-transparent outline-none text-center font-medium text-xl foxus:text-gray-700 transition spin-btn-none'
            }
          />
          {i === otp.length - 1 ? null : (
            <span className="hidden md:flex w-2 py-0.5 bg-gray-400" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default OTPInput;
