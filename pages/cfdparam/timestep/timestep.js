// pages/cfdparam/timestep/timestep.js
Page({

  /**
   * Page initial data
   */
  data: {
    dt: "",
    dx: 1.0,
    velocity: 100.0,
    courtant: 5.0
  },

  velocity: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        velocity: event.detail.value
      });
    }
  },
  dx: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        dx: event.detail.value
      });
    }
  },
  courtant: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        courtant: event.detail.value
      });
    }
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

  dt: function (velocity, courtant, dx){
    var temp = courtant * dx / velocity / 1000;
    temp = temp.toFixed(18);
    this.setData({
      dt: temp,
    })
  },

  clearall: function()
  {
    this.setData({
      velocity: 100,
      courtant: 5,
      dx: 1,
      dt: ""
    })
  },

  calculate: function(){
  
    this.dt(this.data.velocity, this.data.courtant, this.data.dx);
  }






    
  
})