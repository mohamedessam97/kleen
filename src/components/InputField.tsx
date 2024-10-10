export default function InputField({
  label,
  value,
  required,
  invalid,
  onChange,
  error,
}: {
  label: string;
  required?: boolean;
  invalid?: boolean;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-col w-full items-start gap-2 mb-3 ">
      <label
        htmlFor=""
        className={`text-[#292929]  ${invalid && "text-red-500"}`}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        type="text"
        className={`w-full border focus:outline-2 border-[#949494] focus:outline-[#0097CE] rounded-[8px] p-3 ${
          invalid && "border-red-500"
        }`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
