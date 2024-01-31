import { StationStatus } from "../enums/StationStatus.enum";

export interface Station {
  _id: string;
  name: string;
  businessName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  urls: string[];
  status: StationStatus;
  key: string;
}