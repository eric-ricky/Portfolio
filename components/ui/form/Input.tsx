interface IInputComponent {
  type: string;
  field: string;
  getFieldProps: any;
  placeholder: string;
  id?: string;
}

const InputComponent: React.FC<IInputComponent> = ({
  getFieldProps,
  type,
  field,
  placeholder,
  id,
}) => {
  return (
    <input
      type={type}
      id={id}
      {...getFieldProps(field)}
      placeholder={placeholder}
      className="w-full rounded-md py-2.5 px-4 border border-teal-900/50 outline-none bg-white text-sm placeholder:text-sm"
    />
  );
};

export default InputComponent;
