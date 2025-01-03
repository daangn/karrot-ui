import type * as React from "react";

type Booleanish = boolean | "true" | "false";
export const dataAttr = (guard: boolean | undefined) => {
  return guard ? "" : undefined;
};
export const ariaAttr = (guard: boolean | undefined) => {
  return guard ? "true" : (undefined as Booleanish);
};

type DataAttr = Record<`data-${string}`, string | undefined>;

export const elementProps = (
  props: React.HTMLAttributes<HTMLElement> & DataAttr,
): React.HTMLAttributes<HTMLElement> => props;

export const inputProps = (
  props: React.InputHTMLAttributes<HTMLInputElement> & DataAttr,
): React.InputHTMLAttributes<HTMLInputElement> => props;

export const labelProps = (
  props: React.LabelHTMLAttributes<HTMLLabelElement> & DataAttr,
): React.LabelHTMLAttributes<HTMLLabelElement> => props;

export const buttonProps = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & DataAttr,
): React.ButtonHTMLAttributes<HTMLButtonElement> => props;

export const imgProps = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & DataAttr,
): React.ImgHTMLAttributes<HTMLImageElement> => props;
