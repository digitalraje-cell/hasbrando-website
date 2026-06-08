'use client';

import * as RadixSelect from '@radix-ui/react-select';

type Option = { value: string; label: string };

type SelectProps = {
  id: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Option[];
};

export default function Select({ id, value, onValueChange, placeholder, options }: SelectProps) {
  return (
    <RadixSelect.Root value={value || undefined} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        id={id}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-[var(--border)] bg-white px-4 py-[14px] text-[15px] text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-subtle)] data-[placeholder]:text-[var(--text-subtle)]"
        aria-label={placeholder}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className="z-50 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-xl"
          position="popper"
          sideOffset={4}
        >
          <RadixSelect.Viewport className="p-1">
            {options.map((opt) => (
              <RadixSelect.Item
                key={opt.value}
                value={opt.value}
                className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-[15px] text-[var(--text-muted)] outline-none data-[highlighted]:bg-[var(--bg-subtle)] data-[highlighted]:text-[var(--text)] data-[state=checked]:text-[var(--accent)]"
              >
                <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
