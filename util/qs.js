const qs = (src) => {
  const qrystr = src.split('?')[1]
  return qrystr
    ? qrystr.split('&').reduce((o, v, i) => {
      const ps = v.replace(/\/$/, '').split('=')
      const k = ps[0].replace(/^\?/, '')
      o[k] = ps[1] || true
      return o
    }, {})
    : undefined
}

module.exports = qs
