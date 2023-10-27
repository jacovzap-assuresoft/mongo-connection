import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    item: String,
    price: Number
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const Sale = mongoose.model('Sale', saleSchema)
export default Sale
