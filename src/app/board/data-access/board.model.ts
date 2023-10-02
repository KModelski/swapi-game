export interface Response {
  message: string;
  total_records: number;
  total_pages: number;
  previous: null;
  next: null;
  results: Result[];
}

export interface Result {
  uid: string;
  name: string;
  url: string;
}

export interface PeopleResponse {
  message: string;
  result: PeopleResult;
}

export interface PeopleResult {
  properties: PeopleProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface PeopleProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: Date;
  edited: Date;
  name: string;
  homeworld: string;
  url: string;
}

export interface StarshipResponse {
  message: string;
  result: StarshipResult;
}

export interface StarshipResult {
  properties: StarshipProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface StarshipProperties {
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: any[];
  created: Date;
  edited: Date;
  name: string;
  url: string;
}
