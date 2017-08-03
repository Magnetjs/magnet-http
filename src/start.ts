import { Module } from 'magnet-core/module'

export default class MagnetHttpStart extends Module {
  init () {
    this.moduleName = 'http'
    this.defaultConfig = __dirname
  }

  async setup () {
    const log = this.log
    this.insert(this.app.http.listen(this.config.port, function () {
      log.info('Http  listening at port', this.address().port)
    }), 'httpServer')
  }
}
