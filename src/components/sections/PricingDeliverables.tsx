type PricingDeliverablesProps = {
  label: string;
  items: string[];
  targetsLabel?: string;
  targets?: string[];
  variant?: 'light' | 'dark';
};

function Checklist({
  items,
  variant,
}: {
  items: string[];
  variant: 'light' | 'dark';
}) {
  return (
    <ul className={`pricing-checklist pricing-checklist--${variant}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PricingDeliverables({
  label,
  items,
  targetsLabel,
  targets,
  variant = 'light',
}: PricingDeliverablesProps) {
  return (
    <div className="pricing-card-details">
      <div className={`pricing-deliverables pricing-deliverables--${variant}`}>
        <p className="pricing-deliverables__label">{label}</p>
        <Checklist items={items} variant={variant} />
      </div>

      {targets && targets.length > 0 && targetsLabel && (
        <div className={`pricing-targets pricing-targets--${variant}`}>
          <p className="pricing-targets__label">{targetsLabel}</p>
          <Checklist items={targets} variant={variant} />
        </div>
      )}
    </div>
  );
}
