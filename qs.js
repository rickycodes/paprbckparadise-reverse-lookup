const qs = (src) => {
  const params = {}
  const qrystr = src.split('?')[1]
  if (qrystr) {
    qrystr.split('&').forEach((p, i) => {
      const ps = p.replace(/\/$/, '').split('=')
      const k = ps[0].replace(/^\?/, '')
      params[k] = ps[1] || true
    })
  }
  return params
}

module.exports = qs
