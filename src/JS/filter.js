// 过滤日期格式，传入时间戳，根据参数返回不同格式
const formatTimer = function (val, hours) {
  if (val) {
    const dateTimer = new Date(val * 1000)
    const y = dateTimer.getFullYear()
    let M = dateTimer.getMonth() + 1
    let d = dateTimer.getDate()
    let h = dateTimer.getHours()
    let m = dateTimer.getMinutes()
    M = M >= 10 ? M : '0' + M
    d = d >= 10 ? d : '0' + d
    h = h >= 10 ? h : '0' + h
    m = m >= 10 ? m : '0' + m
    if (hours) {
      return y + '-' + M + '-' + d + ' ' + h + ':' + m
    } else {
      return y + '-' + M + '-' + d
    }
  }
}
export default {
  formatTimer
}
