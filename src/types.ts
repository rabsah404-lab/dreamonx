export type PageType = 
  | 'home' 
  | 'services' 
  | 'pricing' 
  | 'community' 
  | 'contact' 
  | 'faqs' 
  | 'videos' 
  | 'privacy' 
  | 'refund' 
  | 'terms';

export interface ErpModule {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  link: string;
  features: string[];
  tag?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  time: string;
  rating: number;
  text: string;
  initial: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  originalPriceYearly: number;
  discountedPriceYearly: number;
  originalPrice5Year: number;
  discountedPrice5Year: number;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface VideoTutorial {
  id: string;
  title: string;
  duration: string;
  description: string;
  category: string;
  thumbnail: string;
  youtubeId?: string;
}
