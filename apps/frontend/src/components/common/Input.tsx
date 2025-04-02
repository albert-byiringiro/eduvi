import clsx from 'clsx';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = 'text', name, disabled = false, placeholder, label, error, icon, className, ...props },
    ref,
  ) => {
    return (
      <div className={className}>
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && <span className="absolute left-3 text-[#667085]">{icon}</span>}
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            className={clsx(
              'w-full rounded-lg border border-gray-100 px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200',
              { 'pl-10': icon, 'ring-2 ring-red-200': error },
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1 ml-3 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
