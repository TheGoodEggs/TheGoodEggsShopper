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

  const Product1 = await Product.build({
    name: 'egg',
    price: 10.23,
    description: 'The most eggy of them all',
    image:
      'https://cdn.vox-cdn.com/thumbor/CyGR5jAu364WZtRApk3UXbQd-oE=/0x0:876x584/920x613/filters:focal(368x222:508x362):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62841097/instagram_egg.0.jpg',
    stock: 23,
    origin: 'USA',
    categoryId: 1
  })
  const Category1 = await Category.build({
    type: 'Fantasy'
  })
  const Category2 = await Category.build({
    type: 'Edible'
  })
  const Promo1 = await Promo.build({
    code: 'EggShopper1',
    startDate: new Date(2020, 1, 3),
    endDate: new Date(2020, 2, 5),
    discount: 0.1
  })
  const Promo2 = await Promo.build({
    code: 'EggShopper2',
    startDate: new Date(2020, 4, 5),
    endDate: new Date(2020, 6, 7),
    discount: 0.2
  })

  const Payment1 = await Payment.build({
    type: 'Chase'
  })

  const Payment2 = await Payment.build({
    type: 'Paypal'
  })

  const User1 = await User.build({
    firstName: 'Adam',
    lastName: 'Mak',
    email: 'sdf@email.com',
    password: 'asdfdsf',
    address: '12414 street',
    phone: '(347) 997 9900',
    admin: true
  })

  const User2 = await User.build({
    firstName: 'noAdmin',
    lastName: 'None',
    email: 'noadmin@email.com',
    password: 'dfasdf',
    address: 'street street',
    phone: '134-212-1222',
    admin: false
  })
  const Order1 = await Order.build({
    wishlist: false,
    purchasedTotal: 43.23
  })
  const Order2 = await Order.build({
    wishlist: false,
    purchaseDate: new Date(2020, 1, 1),
    shipped: true,
    tracking: '123123TrackingInfo1234124',
    shippingAddress: 'fullstack',
    purchasedTotal: 43.23,
    promoId: 1,
    paymentId: 1,
    userId: 1
  })
  const Order3 = await Order.build({
    wishlist: true
  })

  const OrderProducts1 = await OrderProducts.build({
    quantity: 20,
    orderId: 1,
    productId: 1
  })

  await User1.save()
  await User2.save()
  await Category1.save()
  await Category2.save()
  await Product1.save()
  await Promo1.save()
  await Payment1.save()
  await Payment2.save()
  await Promo2.save()
  await Order1.save()
  await Order2.save()
  await Order3.save()
  await OrderProducts1.save()
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
