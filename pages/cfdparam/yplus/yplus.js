// pages/cfdparam/cfdparam.js
Page({
  
  data: {
    res: 0,
    dx: 0,
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
  yplus: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        yplus: event.detail.value
      });
    };
  },
  dealDataBtn: function () {
    var res1 = this.re(this.data.velocity, this.data.density, this.data.mu, this.data.length, this.data.yplus)
    var dx1 = this.dx(this.data.velocity, this.data.density, this.data.mu, this.data.length, this.data.yplus)
    // console.log(res1);
    this.setData({
      res: res1,
      dx: dx1
    })
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
  re: function (velocity, density, mu, length, yplus) {
    var re0 = density * velocity * length / mu;
    return re0;
  },
  dx: function (velocity, density, mu, length, yplus) {
    var re0 = this.re(this.data.velocity, this.data.density, this.data.mu, this.data.length, this.data.yplus);
    var cf = 0.026 / Math.pow(re0, (1.0 / 7));
    var tau = cf * density * velocity ** 2 / 2;
    var ufric = Math.sqrt(tau / density);
    var dx0 = yplus * mu / ufric / density;
    return dx0;
  },
  clearall: function(){
    this.setData({
      velocity: '',
      density: '',
      mu: '',
      length: '',
      yplus: '',
      res: '',
      dx: ''
    })
  }
})
