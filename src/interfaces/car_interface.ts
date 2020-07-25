type Position = {
  lat: number;
  lon: number;
};

export interface ICar {
  id?: number;
  name?: string;
  vin?: string;
  make?: string;
  model?: string;
  year?: string;
  fuelType?: string;
  type?: string;
  Position?: Position;
  odometer?: number;
  fuel?: number;
  battery?: number;
}
