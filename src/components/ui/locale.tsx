"use client";

import {
  LocaleProvider as LocaleProviderPrimitive,
  type LocaleProviderProps as LocaleProviderPrimitiveProps,
  useCollator,
  useDateFormatter,
  useFilter,
  useLocaleContext,
} from "@ark-ui/react/locale";

export type LocaleProviderProps = LocaleProviderPrimitiveProps;

export const LocaleProvider = (props: LocaleProviderProps) => (
  <LocaleProviderPrimitive {...props} />
);

export type {
  UseCollatorProps,
  UseDateFormatterProps,
  UseFilterProps,
  UseFilterReturn,
  UseLocaleContext,
} from "@ark-ui/react/locale";
export { useCollator, useDateFormatter, useFilter, useLocaleContext };
