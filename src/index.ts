import { Module } from 'magnet-core/module'
import * as http from 'http'

export default class MagnetHttp extends Module {
  init () {
    this.moduleName = 'http'
    this.defaultConfig = __dirname
  }

  async setup () {
    let requestListener = this.config.requestListener

    for (const wrapper of this.config.wrappers) {
      requestListener = wrapper(requestListener)
    }

    this.insert(http.createServer(requestListener))
  }
}
