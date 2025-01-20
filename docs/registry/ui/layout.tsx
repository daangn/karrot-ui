"use client";

import {
  Box as SeedBox,
  Column as SeedColumn,
  Columns as SeedColumns,
  Flex as SeedFlex,
  Inline as SeedInline,
  Stack as SeedStack,
  type BoxProps as SeedBoxProps,
  type ColumnProps as SeedColumnProps,
  type ColumnsProps as SeedColumnsProps,
  type FlexProps as SeedFlexProps,
  type InlineProps as SeedInlineProps,
  type StackProps as SeedStackProps,
} from "@seed-design/react";

export type BoxProps = SeedBoxProps;

/**
 * @see https://seed-design.systems/docs/components/layout/box
 */
export const Box = SeedBox;

export type FlexProps = SeedFlexProps;

/**
 * @see https://seed-design.systems/docs/components/layout/flex
 */
export const Flex = SeedFlex;

export type StackProps = SeedStackProps;

/**
 * @see https://seed-design.systems/docs/components/layout/stack
 */
export const Stack = SeedStack;

export type InlineProps = SeedInlineProps;

/**
 * @see https://seed-design.systems/docs/components/layout/inline
 */
export const Inline = SeedInline;

export type ColumnsProps = SeedColumnsProps;

/**
 * @see https://seed-design.systems/docs/components/layout/columns
 */
export const Columns = SeedColumns;

export type ColumnProps = SeedColumnProps;

/**
 * @see https://seed-design.systems/docs/components/layout/columns
 */
export const Column = SeedColumn;
