// src/components/ui/Input.tsx
import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: 'default' | 'success' | 'error';
  label?: string;
  supportText?: string;
}

const Input = ({ status = 'default', label, supportText, className, ...props }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        className={classNames(
          'input peer placeholder-transparent',
          {
            'input-default': status === 'default',
            'input-success': status === 'success',
            'input-error': status === 'error',
          },
          className
        )}
        placeholder={label}
        {...props}
      />

      {label && <label className="floating-label">{label}</label>}

      {supportText && (
        <p
          className={classNames('text-xs', {
            'text-gray-500': status === 'default',
            'text-[var(--success)]': status === 'success',
            'text-[var(--error)]': status === 'error',
          })}
        >
          {supportText}
        </p>
      )}
    </div>
  );
};

export default Input;
