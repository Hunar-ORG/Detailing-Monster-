import React from 'react';
import { Link } from 'react-router-dom';

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

const baseStyles =
  'inline-flex items-center justify-center text-[11px] sm:text-[11.5px] font-bold tracking-[0.12em] uppercase rounded-[3px] transition-all duration-200 cursor-pointer whitespace-nowrap select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:opacity-50 disabled:cursor-not-allowed';

const primaryStyles =
  'bg-[#e31b23] hover:bg-[#c8171e] active:bg-[#b0141a] text-white shadow-sm';

const secondaryStyles =
  'bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/[0.04] active:bg-white/[0.08] text-white';

export const PrimaryButton: React.FC<BaseButtonProps> = ({
  children,
  className = '',
  href,
  to,
  ...props
}) => {
  const combinedClasses = `${baseStyles} ${primaryStyles} px-5 sm:px-6 py-2.5 sm:py-3 ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} id={props.id} aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        id={props.id}
        target={props.target}
        rel={props.rel}
        aria-label={props['aria-label']}
        onClick={props.onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={combinedClasses}
      id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={props['aria-label']}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<BaseButtonProps> = ({
  children,
  className = '',
  href,
  to,
  ...props
}) => {
  const combinedClasses = `${baseStyles} ${secondaryStyles} px-5 sm:px-6 py-2.5 sm:py-3 ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} id={props.id} aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        id={props.id}
        target={props.target}
        rel={props.rel}
        aria-label={props['aria-label']}
        onClick={props.onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={combinedClasses}
      id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={props['aria-label']}
    >
      {children}
    </button>
  );
};
