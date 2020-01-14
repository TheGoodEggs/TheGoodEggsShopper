'use strict'

const db = require('../server/db')
const {
  Product,
  Category,
  Order,
  Promo,
  Payment,
  User,
  OrderProducts
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const Products = await Promise.all([
    Product.create({
      name: 'egg',
      price: 10.23,
      description: 'The most eggy of them all',
      image:
        'https://cdn.vox-cdn.com/thumbor/CyGR5jAu364WZtRApk3UXbQd-oE=/0x0:876x584/920x613/filters:focal(368x222:508x362):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62841097/instagram_egg.0.jpg',
      stock: 23,
      origin: 'USA',
      categoryId: 1
    })
  ])

  const Categories = await Promise.all([
    Category.create({
      type: 'Fantasy'
    }),
    Category.create({
      type: 'Edible'
    })
  ])

  const Promos = await Promise.all([
    Promo.create({
      code: 'EggShopper1',
      startDate: new Date(2020, 1, 3),
      endDate: new Date(2020, 2, 5),
      discount: 0.1
    }),
    Promo.create({
      code: 'EggShopper2',
      startDate: new Date(2020, 4, 5),
      endDate: new Date(2020, 6, 7),
      discount: 0.2
    })
  ])

  const Payments = await Promise.all([
    Payment.create({
      type: 'Chase'
    }),
    Payment.create({
      type: 'Paypal'
    })
  ])

  const Users = await Promise.all([
    User.create({
      firstName: 'Adam',
      lastName: 'Mak',
      email: 'sdf@email.com',
      password: 'asdfdsf',
      address: '12414 street',
      phone: '(347) 997 9900',
      admin: true
    }),
    User.create({
      firstName: 'noAdmin',
      lastName: 'None',
      email: 'noadmin@email.com',
      password: 'dfasdf',
      address: 'street street',
      phone: '134-212-1222',
      admin: false
    })
  ])

  const Orders = await Promise.all([
    Order.create({
      wishlist: false,
      purchasedTotal: 43.23
    }),
    Order.create({
      wishlist: false,
      purchaseDate: new Date(2020, 1, 1),
      shipped: true,
      tracking: '123123TrackingInfo1234124',
      shippingAddress: 'fullstack',
      purchasedTotal: 43.23,
      promoId: 1,
      paymentId: 1,
      userId: 1
    }),
    Order.create({
      wishlist: true
    })
  ])

  const OrdersProducts = await Promise.all([
    OrderProducts.create({
      quantity: 20,
      orderId: 1,
      productId: 1
    })
  ])

  console.log(`seeded $`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
