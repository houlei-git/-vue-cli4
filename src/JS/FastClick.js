import FastClick from 'fastclick'

const u = navigator.userAgent
const deviceIsIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
FastClick.prototype.focus = function (targetElement) {
  var length
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}
FastClick.attach(document.body)
