// components/ui/Checkbox.tsx
import { useState } from 'react';

interface CheckboxProps {
  isSelected: boolean;
  onValueChange: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function Checkbox({ isSelected, onValueChange, children, className = '' }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => onValueChange(e.target.checked)}
        className="w-4 h-4 text-brand-600 bg-gray-100 border-gray-300 rounded focus:ring-brand-500 focus:ring-2"
      />
      <span className="text-text-light dark:text-text-dark">{children}</span>
    </label>
  );
}