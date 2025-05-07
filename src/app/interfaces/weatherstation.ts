export interface Location {
  id?: string;
  type?: string;
  coordinates?: number[];
}

export interface Weatherstation {
  id?: string;
  name?: string;
  province?: string;
  indicative?: string;
  indsinop?: string;
  source?: string;
  location?: Location;
  active?: boolean;
}

