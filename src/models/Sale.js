import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    item: {
      type: String,
      required: true,
      trim: true
    },
    price: { type: Number, required: true, trim: true }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    versionKey: false
  }
)

const Sale = mongoose.model('Sale', saleSchema)
export default Sale
