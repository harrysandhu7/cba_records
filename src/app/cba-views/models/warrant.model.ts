export interface Warrant {
  code: string;
  type: string;
  issuer: string;
  exercisePrice: number;
  multiplier: number;
  bid: number;
  offer: number;
  volume: number;
  expiryDate: string;
}

export interface Filter {
  type: string;
  expiryDates: [string];
}
