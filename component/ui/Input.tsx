interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200 focus:border-orange-500 outline-none"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}

export { Input }
