import Link from 'next/link';

type WordmarkProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
};

const sizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

export default function Wordmark({ className = '', size = 'md', variant = 'dark' }: WordmarkProps) {
  const color = variant === 'light' ? 'text-[var(--nav-link-active-on-dark)]' : 'text-[var(--nav-link-active)]';

  return (
    <Link
      href="/"
      className={`font-display tracking-tight no-underline ${sizes[size]} ${color} ${className}`}
      aria-label="HasBrando — Home"
    >
      HasBrando
    </Link>
  );
}
