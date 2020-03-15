const delay = require('mocker-api/utils/delay')

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true'

const proxy = {
  // Priority processing.
  _proxy: {
    changeHost: true,
  },
  'GET /api/app/:id': (req, res) => {
    console.log('app --->', req.params)
    return res.json({
      id: req.params.id,
      title: 'App title ' + req.params.id,
      sex: 6,
    })
  },
}
module.exports = noProxy ? {} : delay(proxy, 1000)
// module.exports = proxy;
