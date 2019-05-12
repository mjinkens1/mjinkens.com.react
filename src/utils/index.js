import throttle from 'lodash.throttle'

const THROTTLE_DELAY = 150

export const util = {
  getOffset: el => {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  },
  throttle: callback => throttle(callback, THROTTLE_DELAY)
}
