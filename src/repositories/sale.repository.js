import Sale from '../models/Sale.js'

export const getAllSalesMongooseRepository = async () => {
    return Sale.find().populate('clientId')
}

export const createSaleMongooseRepository = async (saleData) => {
    return Sale.create(saleData)
}

export const updateSaleMongooseRepository = async (saleId, saleData) => {
    return Sale.findByIdAndUpdate(saleId, saleData)
}

export const deleteSaleMongooseRepository = async (saleId, saleData) => {
    return Sale.findByIdAndRemove(saleId, saleData)
}

export const clientSalesTotalRepository = async (clientId) => {
    return (await Sale.find({clientId : clientId})).reduce(((sum, sale) => sum + sale.price), 0)
}

export const salesTotalByItemRepository = async (item) => {
    return (await Sale.find({item : item})).reduce(((sum, sale) => sum + sale.price), 0)
}
