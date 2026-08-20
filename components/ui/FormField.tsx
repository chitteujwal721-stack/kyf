import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  rows?: number;
  options?: { label: string; value: string }[];
  helperText?: string;
  error?: string;
}

export default function FormField({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  rows = 4,
  options,
  helperText,
  error,
}: FormFieldProps) {
  const inputClasses =
    'w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition text-stone-900 bg-white placeholder-stone-400 text-sm';

  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-stone-700">
        {label} {required && <span className="text-rose-600">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        >
          <option value="">Select option</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}

      {helperText && !error && <p className="text-xs text-stone-500">{helperText}</p>}
      {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}
    </div>
  );
}
