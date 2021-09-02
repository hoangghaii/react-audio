export type IconPropsType = {
  variant?: StyleVariantType;
  size?: number;
  color?: string;
  active?: boolean;
};

export type StyleVariantType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'miniapp'
  | 'warning'
  | 'attention'
  | 'dark';
