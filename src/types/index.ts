export type Product = {
  category?: string;
  video?: string;
  sections?: { title: string; body: string }[];
  title: string;
  description: string;
  images: string[];
  details: string[];
  eyebrow?: string;
  badge?: string;
  priceLabel?: string;
};

export type ValueProp = {
  title: string;
  description: string;
};
