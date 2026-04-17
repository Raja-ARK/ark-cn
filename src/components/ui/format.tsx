"use client";

import {
  FormatByte as FormatBytePrimitive,
  type FormatByteProps as FormatBytePrimitiveProps,
  Format as FormatPrimitive,
  FormatRelativeTime as FormatRelativeTimePrimitive,
  type FormatRelativeTimeProps as FormatRelativeTimePrimitiveProps,
  FormatTime as FormatTimePrimitive,
  type FormatTimeProps as FormatTimePrimitiveProps,
} from "@ark-ui/react/format";

export type FormatByteProps = FormatBytePrimitiveProps;

export const FormatByte = (props: FormatByteProps) => (
  <FormatBytePrimitive {...props} />
);

export type FormatTimeProps = FormatTimePrimitiveProps;

export const FormatTime = (props: FormatTimeProps) => (
  <FormatTimePrimitive {...props} />
);

export type FormatRelativeTimeProps = FormatRelativeTimePrimitiveProps;

export const FormatRelativeTime = (props: FormatRelativeTimeProps) => (
  <FormatRelativeTimePrimitive {...props} />
);

export const Format = {
  Byte: FormatPrimitive.Byte,
  RelativeTime: FormatPrimitive.RelativeTime,
  Time: FormatPrimitive.Time,
} as const;
