// core와 view를 합치는 부분
// 나중에 모듈 사용시 new xxx { 옵션 } 이렇게 사용하도록
(function (UI) {

  var CoreSelectBox = UI.core.SelectBox;
  var ViewSelectBox = UI.view.SelectBox;


  function SelectBox(opts) {
    if (!(opts && opts.context)) {
      throw Error('option의 context 값은 반드시 설정해야 합니다. ');
    }
    this.context = opts.context;
    this.isDisalbe = opts.isDisalbe || false; // ajax통신시 처음에 disable
    //this.callback = opts.itemClickDone || function () { };
    this.defaultValue = opts.default || 'default';

    var coreSelectBox = new CoreSelectBox(this.defaultValue)
    this.viewSelectBox = new ViewSelectBox(this.context);
    this.viewSelectBox.registryCore(coreSelectBox); // core를 view에 업히게 


    if (!this.isDisalbe) {
      this.active();
    } else {
      this.inActive();
    }
  }

  SelectBox.prototype = {
    isDisable: function () {
      return this.viewSelectBox.isDisable
    },
    renderItemLists: function (itemList) {
      this.viewSelectBox.renderItems(itemList)
    },
    active: function () {
      //this.viewSelectBox.bindEvent(this.callback);
      this.viewSelectBox.bindEvent();
      this.viewSelectBox.setEnable();
    },
    inActive: function () {
      this.viewSelectBox.unbindEvent();
      this.viewSelectBox.setDisable();
    },
    getSelectedItem: function () {
      return this.viewSelectBox.getSelectedValue()
    },
    registerItemClickCallback: function (fn) {
      this.viewSelectBox.setCallback(fn)
    }

  }

  UI.SelectBox = SelectBox

})(window.UI = window.UI || {})
