// pages/cfdparam/airthermo/airthermo.js
Page({
  data: {
    imgUrls: [
      '../../../images/cp-t.png',
      '../../../images/cv-t.png',
      '../../../images/gamma-t.png',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    temperature: 300,
    cp: 1003,
    cv: 716,
    gamma: 1.4,
    enumber: 10,
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
  temperature: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        temperature: event.detail.value
      });
    };
  },
  cp: function(T){
    var ls = [1.0466E3, -3.4474E-1, 7.2967E-4, -1.5151E-7, 1.9772E-10, -1.293E-12, 1.7434E-15, -1.0981E-18, 3.7102E-22, -6.5279E-26, 4.7128E-30];
    var sum = 0;
    for(var i = 10; i >=1; i--){
      sum += T * (ls[i] + sum);
    };
    sum += ls[0];
    this.setData({
      cp: sum.toFixed(this.data.enumber),
    })
  },
  cv: function (T) {
    var ls = [7.5963E2, -3.4558E-1, 7.3924E-4, -1.9343E-7, 2.9305E-10, -1.189E-12, 1.8449E-15, -1.1487E-18, 3.8622E-22, -6.7797E-26, 4.8895E-30];
    var sum = 0;
    for (var i = 10; i >= 1; i--) {
      sum += T * (ls[i] + sum);
    };
    sum += ls[0];
    this.setData({
      cv: sum.toFixed(this.data.enumber),
    })
  },
  gamma: function (T) {
    var ls = [1.378E0, 1.6443E-4, -1.8079E-7, -8.4962E-10, 1.9578E-12, -1.8286E-15, 9.0891E-19, -2.4178E-22, 2.7428E-26, 7.3982E-31, -3.1489E-34];
    var sum = 0;
    for (var i = 10; i >= 1; i--) {
      sum += T * (ls[i] + sum);
    };
    sum += ls[0];
    this.setData({
      gamma: sum.toFixed(this.data.enumber),
    })
  },
  calculate: function(){
    this.cp(this.data.temperature);
    this.cv(this.data.temperature);
    this.gamma(this.data.temperature);
    console.log(this.data.cp, this.data.cv, this.data.gamma);
  },
  clearall: function(){
    this.setData({
      cp:"",
      cv:"",
      gamma:"",
    })
  },

})