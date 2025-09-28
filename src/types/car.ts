export interface Car {
  id: string;
  name: string;
  model: string;
  year: number;
  image: string;
  price: string;
  specs: {
    horsepower: number;
    topSpeed: number;
    acceleration: string;
    torque: number;
    engine: string;
    transmission: string;
    drivetrain: string;
  };
  features: string[];
  description: string;
}