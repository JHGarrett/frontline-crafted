import type { Product } from '../types';

import cedarPlanter1 from '../assets/products/cedar-planters/cedar-planter-1.jpg';
import cedarPlanter2 from '../assets/products/cedar-planters/cedar-planter-2.jpg';
import cedarPlanter3 from '../assets/products/cedar-planters/cedar-planter-3.jpg';
import cedarPlanter4 from '../assets/products/cedar-planters/cedar-planter-4.jpg';
import cedarPlanter5 from '../assets/products/cedar-planters/cedar-planter-5.jpg';
import cedarPlanter6 from '../assets/products/cedar-planters/cedar-planter-6.jpg';

import patioChair1 from '../assets/products/patio-chairs/patio-chair-1.jpg';
import patioChair2 from '../assets/products/patio-chairs/patio-chair-2.jpg';
import patioChair3 from '../assets/products/patio-chairs/patio-chair-3.jpg';
import patioChair4 from '../assets/products/patio-chairs/patio-chair-4.jpg';

import welcomeStand1 from '../assets/products/welcome-planter-stand/welcome-planter-stand-1.jpg';

import threeTierPlanter1 from '../assets/products/three-tier-planter/three-tier-planter-1.jpg';
import threeTierPlanter2 from '../assets/products/three-tier-planter/three-tier-planter-2.jpg';
import threeTierPlanter3 from '../assets/products/three-tier-planter/three-tier-planter-3.jpg';
import threeTierPlanter4 from '../assets/products/three-tier-planter/three-tier-planter-4.jpg';

export const featuredProducts: Product[] = [
  {
    title: 'Cedar Planters',
    description: 'Durable cedar planters built for porches, patios, and garden spaces.',
    images: [
      cedarPlanter1,
      cedarPlanter2,
      cedarPlanter3,
      cedarPlanter4,
      cedarPlanter5,
      cedarPlanter6,
    ],
    details: [
      'Handcrafted from cedar',
      'Great for patios, porches, and gardens',
      'Built for outdoor use',
    ],
    eyebrow: 'Handcrafted from cedar',
    badge: 'Custom sizes available',
    priceLabel: 'Starting at $60',
  },
  {
    title: '3 Tier Planter',
    description:
      'A handcrafted vertical planter designed to give you more planting space in a compact footprint. Great for flowers, herbs, and porch or patio displays.',
    images: [threeTierPlanter1, threeTierPlanter2, threeTierPlanter3, threeTierPlanter4],
    details: [
      'Three-tier vertical design',
      'Great for porches, patios, and small garden spaces',
      'Handcrafted for outdoor use',
      'Made to order',
    ],
    eyebrow: 'Vertical garden design',
    badge: 'Made to order',
    priceLabel: 'Starting at $80',
  },
  {
    title: 'Patio Chairs',
    description: 'Handcrafted outdoor seating built for comfort and durability.',
    images: [patioChair1, patioChair2, patioChair3, patioChair4],
    details: ['Built from solid wood', 'Made for outdoor use', 'Custom finish options available'],
    eyebrow: 'Built from solid wood',
    badge: 'Custom finish options',
    priceLabel: 'Custom quote available',
  },
  {
    title: 'Welcome Planter Stand',
    description: 'Decorative outdoor planter stand that adds a welcoming touch to your entryway.',
    images: [welcomeStand1],
    details: [
      'Decorative vertical design',
      'Great for porches and entryways',
      'Custom builds available',
    ],
    eyebrow: 'Decorative vertical design',
    badge: 'Custom builds available',
    priceLabel: 'Custom quote available',
  },
];
