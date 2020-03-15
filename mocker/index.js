const delay = require('mocker-api/utils/delay')

const noProxy = process.env.NO_PROXY === 'true'

const proxy = {
  // Priority processing.
  _proxy: {
    changeHost: true,
  },
  'GET /api/app/:id': (req, res) => {
    // eslint-disable-next-line no-console
    console.log('app --->', req.params)
    return res.json({
      id: req.params.id,
      title: 'MockerApi App title ' + req.params.id,
      sex: 6,
    })
  },
}
module.exports = noProxy ? {} : delay(proxy, 1000)
