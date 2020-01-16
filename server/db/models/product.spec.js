const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Product model', () => {
    describe('Validations', () => {
      it('requires `name`', async () => {
        const product = Product.build()

        try {
          await product.validate()
          throw Error(
            'validation was successful but should have failed without `name`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })

      it('requires `name` to not be an empty string', async () => {
        const product = Product.build({
          name: 'EGG',
          price: 55,
          description: 'an amazing egg',
          image: 'www.imageUrl.com',
          stock: 10,
          origin: 'NYC'
        })

        try {
          await product.validate()
        } catch (err) {
          expect(err.message).to.contain('Validation error')
        }
      })
    })
  })
})
