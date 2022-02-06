var express = require('express')
var router = express.Router()

router.get('/', async (req, res) => {
  const result = await res.app.locals.db.collection('user').find().toArray();
  res.send(result.map(row => row.name).join(','));
})

module.exports = router