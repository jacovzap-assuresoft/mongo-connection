import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    phone: Number,
    address: {
      city: String,
      zone: String,
      street: String
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const Client = mongoose.model('Client', clientSchema)
export default Client
