import React, { forwardRef } from 'react';
import CheckIcon from '../../assets/CheckIcon';

interface CustomCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  id: string;
  label: React.ReactNode;
  error?: string;
  containerClassName?: string;
  checked?: boolean;
}

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  (
    { id, label, error, containerClassName = '', className = '', checked = false, ...props },
    ref,
  ) => {
    return (
      <div className={containerClassName}>
        <div className="relative flex items-start gap-2">
          <div className="relative flex items-center h-5">
            <input
              ref={ref}
              id={id}
              type="checkbox"
              checked={checked}
              className={`absolute w-4 h-4 opacity-0 cursor-pointer peer ${className}`}
              {...props}
            />
            <div className="w-4 h-4 transition-colors duration-200 border border-gray-300 rounded peer-checked:border-primary peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-opacity-50"></div>
            <div className="absolute hidden text-white -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 peer-checked:block">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
          </div>
          <label htmlFor={id} className="text-sm cursor-pointer">
            {label}
          </label>
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox;
