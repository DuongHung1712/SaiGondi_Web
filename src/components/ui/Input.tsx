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
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className={classNames(
          'input',
          {
            'input-default': status === 'default',
            'input-success': status === 'success',
            'input-error': status === 'error',
          },
          className
        )}
        {...props}
      />
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
