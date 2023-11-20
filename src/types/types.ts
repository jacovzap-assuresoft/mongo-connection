import { Document } from "mongoose"

export interface Client extends Document {
  name: string,
  lastName: string,
  phone: number,
  address: {
    city: string,
    zone: string,
    street: string
  },
}

export interface Sale extends Document {
  clientId: String,
    item: string,
    price: number,
}
