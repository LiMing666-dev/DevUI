export interface ButtonDto {
    type?: "primary" | "outline" | "subtle" | "transparent";
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    shape?: "none" | "sm" | "lg" | "xl";
    color?: string
}