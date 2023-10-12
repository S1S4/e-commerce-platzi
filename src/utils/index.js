/**
 * This function calculates the total price for a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

// export const platziTotalPrice = (products) => {
//     let sum = 0
//     products.forEach(product => sum += product.price)
//     return sum
// }