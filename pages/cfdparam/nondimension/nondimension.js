Page({

  data: {
    velocity: 100.0,
    density: 1.225,
    mu: 0.00001,
    length: 1.0,
    cp: 1003.0,
    k: 0.02624,
    temperature: 100,
    pressure: 101325,
    dT: 20,
    dp: 100,
    beta: 0.001,
    // result
    Re:'',
    Ma:'',
    Pr:'',
    Fr:'',
    controller:false
  },
  showDetail:function(){
    this.setData({
      controller:!this.data.controller
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
  temperature: function(event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        temperature: event.detail.value
      });
    };
  }, 
    pressure: function(event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        pressure: event.detail.value
      });
    };
  }, 
  dT: function(event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        dT: event.detail.value
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
  beta: function(event) {
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
  // function define
  re: function(rho, u, length, mu){
    var interium = rho * u * length / mu;
    this.setData({
      Re: interium,
    })
  },
  ma: function (u, temperature) {
    var cc = Math.sqrt(1.4*8314/28.966*temperature);
    var interium = u / cc;
    this.setData({
      Ma: interium,
    })
  },
  pr: function (mu, cp, k) {
    var interium = mu * cp / k;
    this.setData({
      Pr: interium,
    })
  },
  fr: function (u, length) {
    var interium = u / Math.sqrt(9.82*length);
    this.setData({
      Fr: interium,
    })
  },

  calculate:function(){
    this.re(this.data.density, this.data.velocity, this.data.length, this.data.mu);
    this.ma(this.data.velocity, this.data.temperature);
    this.pr(this.data.mu, this.data.cp, this.data.k);
    this.fr(this.data.velocity, this.data.length);
  }
})