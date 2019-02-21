Page({

  data: {
    height: 0,
    pressure: 100.0,
    temperature: 1,
    density: 1.225,
    cp: 1,
    cv: 1,
    gamma: 1,
    
  },
  showDetail: function () {
    this.setData({
      controller: !this.data.controller
    })
  },
  velocity: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        velocity: event.detail.value
      });
    };
  },
  density: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        density: event.detail.value
      });
    };
  },
  mu: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        mu: event.detail.value
      });
    };
  },
  length: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        length: event.detail.value
      });
    };
  },
  cp: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        cp: event.detail.value
      });
    };
  },
  k: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        k: event.detail.value
      });
    };
  },
  temperature: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        temperature: event.detail.value
      });
    };
  },
  pressure: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        pressure: event.detail.value
      });
    };
  },
  dk: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        dk: event.detail.value
      });
    };
  },
  dp: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        dp: event.detail.value
      });
    };
  },
  beta: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        beta: event.detail.value
      });
    };
  },

  checkNum: function (str) {
    for (var i = 0; i < str.length; i++) {
      var ch = str.substring(i, i + 1)
      if (ch != "." && ch != "+" && ch != "-" && ch != "e" && ch != "E" && (ch < "0" || ch > "9")) {
        console.log("输入有误");
        return false;
      }
    }
    return true
  },
})