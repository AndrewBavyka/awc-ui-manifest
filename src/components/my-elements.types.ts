export type ElementVariantType = 'primary' | 'secondary';

export enum ElementSizeEnum {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const ElementColorTypes = ["blue", "red", "green", "gray"] as const;
export type ElementColorTypeArray = typeof ElementColorTypes[number];

export interface IElementProps {
  variant?: ElementVariantType;
  size?: ElementSizeEnum;
  color?: ElementColorTypeArray;
}