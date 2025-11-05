// components/atoms/Button.tsx
import Link from 'next/link';
import { cn } from '@/utils/cn';

type ButtonVariant = 'brand' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: 'brand' | 'accent';
}

const getVariantClasses = (variant: ButtonVariant, color: 'brand' | 'accent') => {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all';
  const size = 'px-6 py-3 text-base';

  if (variant === 'brand') {
    return cn(
      base,
      size,
      color === 'brand'
        ? 'bg-brand-600 text-white hover:bg-brand-700'
        : 'bg-accent-600 text-white hover:bg-accent-700'
    );
  }
  if (variant === 'outline') {
    return cn(
      base,
      size,
      'border-2',
      color === 'brand'
        ? 'border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white'
        : 'border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white'
    );
  }
  return cn(base, size, 'text-gray-700 hover:bg-gray-100');
};

export const SolidButton = ({
  children,
  href,
  className,
  disabled,
  onClick,
  variant = 'brand',
  color = 'brand',
}: ButtonProps) => {
  const classes = cn(getVariantClasses(variant, color), className, disabled && 'opacity-50 cursor-not-allowed');

  if (href) {
    return (
      <Link href={href} className={classes} onClick={disabled ? undefined : onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export const OutlineButton = ({
  children,
  href,
  className,
  disabled,
  onClick,
  color = 'brand',
}: Omit<ButtonProps, 'variant'>) => {
  return (
    <SolidButton
      variant="outline"
      color={color}
      href={href}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SolidButton>
  );
};