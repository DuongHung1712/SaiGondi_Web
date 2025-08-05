// src/components/ui/Input.tsx
import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: 'default' | 'success' | 'error' | 'search';
  label?: string;
  supportText?: string;
}

const Input = ({
  status = 'default',
  label,
  supportText,
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        placeholder=" " // bắt buộc phải có để label hoạt động đúng
        className={classNames(
          'input peer placeholder-transparent',
          {
            'input-default': status === 'default',
            'input-success': status === 'success',
            'input-error': status === 'error',
            'input-search': status === 'search',
          },
          className
        )}
        {...props}
      />

      {label && (
        <label htmlFor={inputId} className="floating-label">
          {label}
        </label>
      )}

      {supportText && (
        <p
          className={classNames('text-xs mt-1', {
            'text-gray-500': status === 'default',
            'text-[var(--success)]': status === 'success',
            'text-[var(--error)]': status === 'error',
            'text-[var(--info)]': status === 'search',
          })}
        >
          {supportText}
        </p>
      )}
    </div>
  );
};

export default Input;
