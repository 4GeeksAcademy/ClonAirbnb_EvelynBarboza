interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder ?? "Busca destinos"}
      className="w-full bg-transparent text-[15px] font-medium text-zinc-700 placeholder:font-normal placeholder:text-zinc-500 outline-none"
      aria-label="Buscar alojamiento"
    />
  );
}
