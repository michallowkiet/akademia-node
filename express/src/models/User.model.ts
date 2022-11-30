import mongoose from "mongoose";

interface GeoType {
  lat: string;
  lng: string;
}

interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
}

interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserType {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressType;
  company: CompanyType;
}

const userSchema = new mongoose.Schema<UserType>({
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    },
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
