const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

const products = [
  { 'id': 1, 'title': 'ps4 pro', 'price': 500.01, 'stock': 2},
  { 'id': 2, 'title': 'ps2 pads', 'price': 10.99, 'stock': 10 },
  { 'id': 3, 'title': 'psp pro', 'price': 19.99, 'stock': 3},
  { 'id': 4, 'title': 'ps3 slim', 'price': 30.99, 'stock': 5},
  { 'id': 5, 'title': 'ps4 cover', 'price': 487.00, 'stock': 1},
  { 'id': 6, 'title': 'Power Cables', 'price': 59.59, 'stock': 6},
]

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': '+ $100.00 on limit' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
