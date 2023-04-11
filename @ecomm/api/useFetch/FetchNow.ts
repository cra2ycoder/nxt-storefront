import { IFetchNowProps } from './typings'

class FetchNow implements IFetchNowProps {
  successCbk = (res: object) => {}
  failureCbk = (err: object) => {}

  onSuccess(cbk: any) {
    this.successCbk = cbk
    return this
  }

  onFail(cbk: any) {
    this.failureCbk = cbk
    return this
  }

  callee(url = '', headers = {}, transformModel = {}) {
    new Promise(async (x, y) => {
      await fetch(url, headers)
        .then(res => {
          if (res.status > 400 && res.status >= 400) {
            throw res
          } else {
            return res.json()
          }
        })
        .then(data => {
          if (this.successCbk) {
            this.successCbk(data || {})
          }
        })
        .catch(err => {
          if (this.failureCbk) {
            this.failureCbk(err || {})
          }
        })
    })
    return this
  }
}

export { FetchNow }
export default FetchNow
