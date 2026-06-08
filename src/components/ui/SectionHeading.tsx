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
    <Reveal className={`mb-24 lg:mb-28 ${alignClass} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle prose-width-lg ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
