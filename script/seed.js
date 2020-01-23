'use strict'

const db = require('../server/db')
const {
  Product,
  Category,
  Order,
  Promo,
  Payment,
  User,
  OrderProducts,
  Wishlist
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const Categories = await Promise.all([
    Category.create({
      type: 'Fantasy'
    }),
    Category.create({
      type: 'Edible'
    })
  ])

  const Products = await Promise.all([
    Product.create({
      name: 'egg',
      price: 1,
      description: 'The most eggy of them all.',
      image:
        'https://image.cnbcfm.com/api/v1/image/105676135-1547460191113instagramegg.jpg?v=1547460443',
      stock: 23,
      origin: 'USA',
      categoryId: 2
    }),
    Product.create({
      name: 'Humpty Dumpty',
      price: 300,
      description: 'Rest assured, this eggs has not had a great fall. ',
      image:
        'https://www.thevintagenews.com/wp-content/uploads/2018/02/humpty_dumpty.jpg',
      stock: 50,
      origin: 'UK',
      categoryId: 1
    }),
    Product.create({
      name: 'Gudetama',
      price: 150,
      description: 'The laziest egg there is.',
      image:
        'https://media.gamestop.com/i/gamestop/10167246/Gudetama-Sitting-Plush-9.5-Inches',
      stock: 88,
      origin: 'Japan',
      categoryId: 1
    }),
    Product.create({
      name: 'Kinder Surprise',
      price: 5,
      description: 'A surprise that might kill you.',
      image:
        'https://www.sltrib.com/resizer/uO0oB5WHrEjnutm_xg5hmZJfUpQ=/970x0/filters:quality(100)/arc-anglerfish-arc2-prod-sltrib.s3.amazonaws.com/public/LNXMEMHN2BEFHE53JTBS4FRFCE.jpg',
      stock: 3300,
      origin: 'UK',
      categoryId: 2
    }),
    Product.create({
      name: 'Unicorn Egg',
      price: 5000,
      description: 'A Unicorn of an egg...',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71oc0j4kfgL._SL1500_.jpg',
      stock: 30,
      origin: 'Equestria',
      categoryId: 1
    }),
    Product.create({
      name: 'Platypus Egg',
      price: 5500,
      description: 'The only mammal that lays an egg.',
      image:
        'https://qph.fs.quoracdn.net/main-qimg-16bedf49b82147889b1d80bacb310191.webp',
      stock: 44,
      origin: 'Australia',
      categoryId: 2
    }),
    Product.create({
      name: "Yoshi's Egg",
      price: 1330,
      description: 'Even you can be mario.',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61JYYrlrQ1L._AC_SL1500_.jpg',
      stock: 2,
      origin: 'Mushroom Kingdom',
      categoryId: 1
    }),
    Product.create({
      name: 'Gold Faberge Egg',
      price: 9999,
      description: 'Will provide for my grandkids college fund',
      image:
        'https://www.religiousitalianart.com/wp-content/uploads/2019/01/faberge-egg-gold.jpg',
      stock: 1,
      origin: 'USA',
      categoryId: 1
    })
  ])

  const Promos = await Promise.all([
    Promo.create({
      code: 'EggShopper1',
      startDate: new Date(2020, 1, 3),
      endDate: new Date(2020, 2, 5),
      discount: 1
    }),
    Promo.create({
      code: 'EggShopper2',
      startDate: new Date(2020, 4, 5),
      endDate: new Date(2020, 6, 7),
      discount: 2
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
      firstName: 'Adam',
      lastName: 'Mak',
      email: 'sdf@email.com',
      phone: '(347) 997 9900',
      purchaseDate: new Date(2020, 1, 1),
      shipped: true,
      tracking: '123123TrackingInfo1234124',
      shippingAddress: 'fullstack',
      purchasedTotal: 4323,
      promoId: 1,
      paymentId: 1,
      userId: 1
    }),
    Order.create({
      firstName: 'Adam',
      lastName: 'Mak',
      email: 'sdf@email.com',
      phone: '(347) 997 9900',
      purchaseDate: new Date(2020, 1, 1),
      shipped: true,
      tracking: 'TrackingInfo1234124',
      shippingAddress: 'fullstackss',
      purchasedTotal: 55523,
      promoId: 1,
      paymentId: 1,
      userId: 1
    })
  ])

  const OrdersProducts = await Promise.all([
    OrderProducts.create({
      quantity: 20,
      orderId: 1,
      productId: 1
    })
  ])

  const Wishlists = await Promise.all([
    Wishlist.create({
      productId: 1,
      userId: 1
    }),
    Wishlist.create({
      productId: 3,
      userId: 1
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
