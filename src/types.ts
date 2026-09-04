export interface ProjectFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface BonusItem {
  id: string;
  title: string;
  originalPrice: string;
  description: string;
  iconName: string;
  tag: string;
  benefits: string[];
}

export interface PaymentOption {
  type: 'pix' | 'credit' | 'boleto';
  title: string;
  subtitle: string;
}
