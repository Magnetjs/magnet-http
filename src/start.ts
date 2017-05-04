import { Module } from 'magnet-core/module'

export default class HttpStart extends Module {
  get moduleName () { return 'http' }
  get defaultConfig () { return __dirname }

  async setup () {
    const log = this.log
    this.insert(this.app.http.listen(this.config.port, function () {
      log.info('Http  listening at port', this.address().port)
    }), 'httpServer')
  }
}
