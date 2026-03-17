export type ConfigurableProductId = 'cedar-planter';

export type ConfigurableProduct = {
  id: ConfigurableProductId;
  label: string;
  description: string;
};

export const CONFIGURABLE_PRODUCTS: ConfigurableProduct[] = [
  {
    id: 'cedar-planter',
    label: 'Cedar Planter',
    description: 'Custom cedar planter boxes built to your dimensions.',
  },
];

export interface ConfiguratorFormValues {
  productType: string | null;
  width: string;
  depth: string;
  planterHeight: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
