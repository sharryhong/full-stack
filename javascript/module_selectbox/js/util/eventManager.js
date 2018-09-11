// 이벤트를 효율적으로 관리하는 관리자 
(function (UI) {
  UI.utils = UI.utils || {};

  function EventManager() {
    this.eventLists = [];
  }

  EventManager.prototype = {
    on: function (target, type, handler) {

      if (target && target.length && target[0].addEventListener) {

        for (var i = 0, len = target.length; i < len; i++) {
          this.eventLists.push({
            target: target[i],
            type: type,
            handler: handler
          })
          target[i].addEventListener(type, handler, false)
        }
      } else if (target && target.addEventListener) {

        this.eventLists.push({
          target: target,
          type: type,
          handler: handler
        })

        target.addEventListener(type, handler, false)
      }

    },
    off: function (target, type, handler) {
      if (target && target.length && target[0].removeEventListener) {
        for (var i = 0, len = target.length; i < len; i++) {
          target[i].addEventListener(type, handler, false)
        }
      } else if (target && target.removeEventListener) {
        target.removeEventListener(type, handler, false)
      }
    },
    offAll: function () {
      var length = this.eventLists.length;
      for (var i = 0; i < length; i++) {
        var event = this.eventLists[i]
        this.off(event.target, event.type, event.handler)
      }
    }
  }

  UI.utils.EventManager = EventManager;

})(window.UI = window.UI || {})
