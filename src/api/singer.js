import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url='https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel:'singer',
    page:'list',
    key:'all_all_all',
    platform:'yqq',
    pagesize:100,
    pagenum:1,
    hostUin:0,
    g_tk:1502208350,
    needNewCode:0
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk:1502208350,
    hostUin:0,
    format:jsonp,
    notice:0,
    platform: 'yqq',
    needNewCode:0,
    begin: 0,
    num: 100,
    order: 'listen',
    singermid:singerId
  })
  return jsonp(url, data, options)
}
