export interface WardRef {
  _id: string;
  name: string;
  type: string;
}

export interface Place {
  _id: string;  
  name: string;
  address: string;
  district: string;
  ward: string | WardRef;
  avgRating?: number;
  totalRatings?: number;
  images?: string[];

}
