export interface IPosition {
  lat: number;
  lng: number;
}

export interface ICar {
  id?: number;
  name?: string;
  vin?: string;
  make?: string;
  model?: string;
  year?: string;
  fuelType?: string;
  type?: string;
  Position?: IPosition;
  odometer?: number;
  fuel?: number;
  battery?: number;
}
