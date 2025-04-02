export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sub_category: string;
  series: string;
  volume: string;
  scent_notes: string;
  desc: string;
  images: {
    thumbnail: string;
    catalog: string[];
  };
}
