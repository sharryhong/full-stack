(function($) {
  // viewFold 플러그인 (jquery plugin 만드는 방법 참고)
  $.fn.viewFold = function(options) {
    this.each(function(index) {
      var $this = $(this);
      var fold = new ViewFold($this, options);
      if (options && options.foldLine) fold.foldLine(options.foldLine);
    })

    return this;
  }

  function ViewFold(selector, options) {
    this.$detail = null;
    this.$content = null;
    this.$areaMore = null;
    this.$isFolded = null;
    this.contentHeight = null;
    this.elipsisHeight = null;
    this.init(selector);
    this.initEvent(options);
  }
  ViewFold.prototype = {
    init: function(selector) {
      this.$detail = $(selector);
      this.$content = this.$detail.find('.content');
      this.$areaMore = this.$detail.find(".more");
    },
    initEvent: function(options) {
      var _this = this;	
      var $item = $(this);
      var $textFold = this.$detail.find(".txt-more");

      this.$areaMore.on("click", function() {
        if (this.$isFolded) {
          $textFold.text('더보기');
          _this.dispatchEvent($item, 'close');
        } else {
          $textFold.text('접기');
          _this.dispatchEvent($item, 'open');
        }
        this.$isFolded = !this.$isFolded;
      });

      this.$detail.on("open", function() {
        _this.$content.css('-webkit-line-clamp', 'initial');
      })

      this.$detail.on("close", function() {
        _this.$content.css('-webkit-line-clamp', String(options.foldLine));
      })

      $(window).resize(function () {
        if (!options.foldLine) return;
        if (_this.elipsisHeight !== _this.$content.height()) {
          _this.foldLine(options.foldLine);
        }
      });
    },
    foldLine: function(option) {
      var $item = $(this);
      this.contentHeight = this.$content.height();
      this.elipsisHeight = parseFloat(this.$content.css('line-height')) * option;
      if (this.contentHeight > this.elipsisHeight) {
        this.$isFolded = true;
        this.$areaMore.css("display", "block");
        this.dispatchEvent($item, 'close');
      } else {
        this.$isFolded = false;
        this.$areaMore.css("display", "none");
        this.dispatchEvent($item, 'open');
      }
    },
    dispatchEvent: function($item, eventName) {
      var event = jQuery.Event(eventName);
      event.$target = $item;
      this.$detail.trigger(event);
    }
  }
})(jQuery);