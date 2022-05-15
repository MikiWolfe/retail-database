 const router = require('express').Router()
const categoryRoutes = require('./category-route')
const productRoutes = require('./product-route')

router.use('./categories', categoryRoutes)
router.use('./products', productRoutes)


module.exports = router
