'use client';

import { motion } from 'framer-motion';
import type { BillingPeriod } from '@/lib/data/engagement-models';
import { YEARLY_DISCOUNT_PERCENT } from '@/lib/data/engagement-models';

type BillingToggleProps = {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
};

export default function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="billing-toggle">
      <div className="billing-toggle__control" role="group" aria-label="Billing period">
        {(['monthly', 'yearly'] as const).map((period) => (
          <button
            key={period}
            type="button"
            className={`billing-toggle__option ${value === period ? 'billing-toggle__option--active' : ''}`}
            onClick={() => onChange(period)}
            aria-pressed={value === period}
          >
            {period === 'monthly' ? 'Monthly' : 'Yearly'}
            {value === period && (
              <motion.span
                className="billing-toggle__indicator"
                layoutId="billing-indicator"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>
      <span className="billing-toggle__save">Save {YEARLY_DISCOUNT_PERCENT}%</span>
    </div>
  );
}
