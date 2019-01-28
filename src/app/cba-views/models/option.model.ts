export interface OptionDetails {
  expiryDate: string;
  options: Option[];
}

export interface Option {
  code: string;
  type: string;
  bid: number;
  offer: number;
  openInterest: number;
  volume: number;
  lastTrade: number;
  strikePrice: number;
  expiryDate: string;
}
