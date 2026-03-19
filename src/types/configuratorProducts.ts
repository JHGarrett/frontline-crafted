export type ConfigurableProductId = 'cedar-planter' | 'cedar-3-tier-planter';

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
  {
    id: 'cedar-3-tier-planter',
    label: '3 Tier Planter',
    description: 'A raised 3 tier cedar planter with selectable size and height options.',
  },
];

export interface ConfiguratorFormValues {
  productType: ConfigurableProductId | null;
  width: string;
  depth: string;
  planterHeight: string;
  threeTierWidth: string;
  threeTierHeight: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
