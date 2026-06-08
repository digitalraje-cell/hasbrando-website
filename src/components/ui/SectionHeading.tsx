import Reveal from './Reveal';

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({ label, title, subtitle, align = 'left', className = '' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <Reveal className={`mb-24 max-w-3xl ${alignClass} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </Reveal>
  );
}
