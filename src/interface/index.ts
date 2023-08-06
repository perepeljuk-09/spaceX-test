export interface ILinks {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: null;
    launch: string;
    media: null;
    recovery: null;
  };
  flickr: {
    small: [];
    original: [];
  };
  presskit: null;
  webcast: string;
  youtube_id: string;
  article: null;
  wikipedia: string;
}

export interface ICrew {
  crew: string;
  role: string;
}

export interface Icore {
  core: string;
  flight: number;
  gridfins: true;
  legs: true;
  reused: false;
  landing_attempt: true;
  landing_success: true;
  landing_type: string;
  landpad: string;
}

export interface ILaunche {
  fairings: null;
  links: ILinks;
  static_fire_date_utc: null;
  static_fire_date_unix: null;
  net: false;
  window: null;
  rocket: string;
  success: true;
  failures: [];
  details: null;
  crew: ICrew[];
  ships: [];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: false;
  cores: Icore[];
  auto_update: true;
  tbd: false;
  launch_library_id: string;
  id: string;
}

export interface IRocket {
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  first_stage: {
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  second_stage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
      option_1: string;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  engines: {
    isp: {
      sea_level: number;
      vacuum: number;
    };
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    number: 1;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
  };
  landing_legs: {
    number: number;
    material: null;
  };
  payload_weights: IPayload_weight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: false;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

export interface IPayload_weight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export type SortType = "asc" | "desc";
