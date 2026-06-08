import Link from 'next/link';

type WordmarkProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

export default function Wordmark({ className = '', size = 'md' }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`font-display font-bold tracking-tight text-white no-underline ${sizes[size]} ${className}`}
      aria-label="HasBrando — Home"
    >
      Has<span className="text-gradient">Brando</span>
    </Link>
  );
}
