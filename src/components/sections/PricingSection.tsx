'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import BillingToggle from '@/components/sections/BillingToggle';
import PricingDeliverables from '@/components/sections/PricingDeliverables';
import {
  CORE_PRICING_TIERS,
  VIP_PRICING_TIER,
  formatTierPrice,
  type BillingPeriod,
  type PricingTier,
} from '@/lib/data/engagement-models';

function TierPrice({
  tier,
  billing,
}: {
  tier: PricingTier;
  billing: BillingPeriod;
}) {
  const amount =
    billing === 'yearly' && tier.yearlyMonthlyPrice
      ? tier.yearlyMonthlyPrice
      : tier.monthlyPrice;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${tier.id}-${billing}`}
        className="pricing-tier__price"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="pricing-tier__price-label">Starting at</span>
        <span className="pricing-tier__price-value">{formatTierPrice(amount)}</span>
        <span className="pricing-tier__price-note">/ month</span>
        {billing === 'yearly' && (
          <span className="pricing-tier__price-billed">Billed annually</span>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function VipPrice({ billing }: { billing: BillingPeriod }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={billing}
        className="pricing-vip__price"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="pricing-vip__price-label">Starting at</span>
        {billing === 'yearly' ? (
          <span className="pricing-vip__price-value">Custom</span>
        ) : (
          <>
            <span className="pricing-vip__price-value">
              {formatTierPrice(VIP_PRICING_TIER.monthlyPrice)}+
            </span>
            <span className="pricing-vip__price-note">/ month</span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>('monthly');

  return (
    <section className="pricing-section">
      <div className="container">
        <Reveal className="pricing-positioning">
          <p className="pricing-positioning__text">
            We don&apos;t sell marketing services. We build positioning, authority and growth
            systems designed for brands that refuse to compete on price.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <BillingToggle value={billing} onChange={setBilling} />
        </Reveal>

        <div className="pricing-row">
          {CORE_PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={0.08 + i * 0.06}>
              <article
                className={`pricing-tier ${tier.featured ? 'pricing-tier--featured' : ''}`}
              >
                {tier.badge && (
                  <span className="pricing-tier__badge">{tier.badge}</span>
                )}

                <div className="pricing-tier__header">
                  <h3 className="pricing-tier__name">{tier.name}</h3>
                </div>

                <TierPrice tier={tier} billing={billing} />

                <p className="pricing-tier__description">{tier.description}</p>

                <Link
                  href={tier.ctaHref}
                  className={`pricing-tier__cta ${tier.featured ? 'btn btn-primary' : 'btn btn-secondary'}`}
                >
                  {tier.cta}
                </Link>

                <PricingDeliverables
                  label={tier.deliverablesLabel}
                  items={tier.deliverables}
                  targetsLabel={tier.targetsLabel}
                  targets={tier.targets}
                />

                <p className="pricing-tier__ideal">
                  <span>Ideal for:</span> {tier.idealFor}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="pricing-vip-wrap">
        <div className="pricing-vip">
          <div className="container pricing-vip__inner">
            <div className="pricing-vip__content">
              {VIP_PRICING_TIER.availabilityLabel && (
                <span className="pricing-vip__availability">
                  {VIP_PRICING_TIER.availabilityLabel}
                </span>
              )}

              <h3 className="pricing-vip__name">{VIP_PRICING_TIER.name}</h3>
              <p className="pricing-vip__description">{VIP_PRICING_TIER.description}</p>

              <VipPrice billing={billing} />

              <Link href={VIP_PRICING_TIER.ctaHref} className="btn btn-on-dark pricing-vip__cta">
                {VIP_PRICING_TIER.cta}
              </Link>

              {VIP_PRICING_TIER.exclusivityNote && (
                <p className="pricing-vip__exclusivity">{VIP_PRICING_TIER.exclusivityNote}</p>
              )}
            </div>

            <div className="pricing-vip__deliverables-wrap">
              <PricingDeliverables
                label={VIP_PRICING_TIER.deliverablesLabel}
                items={VIP_PRICING_TIER.deliverables}
                targetsLabel={VIP_PRICING_TIER.targetsLabel}
                targets={VIP_PRICING_TIER.targets}
                variant="dark"
              />
              <p className="pricing-vip__ideal">
                <span>Ideal for:</span> {VIP_PRICING_TIER.idealFor}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
