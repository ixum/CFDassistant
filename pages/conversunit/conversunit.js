const date = new Date()
const years = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}


Page({
  data: {
    category: [[
      { "name": "长度", "id": 0 },
      { "name": "面积", "id": 1 }, 
      { "name": "体积", "id": 2 },
      { "name": "质量", "id": 3 }, 
      { "name": "时间", "id": 4 }, 
      { "name": "速度", "id": 5 }, 
      { "name": "密度", "id": 6 },
      { "name": "力", "id": 7 }], 
      [{ "name": "压力", "id": 8 }, 
      { "name": "功率", "id": 9 },
      { "name": "电阻", "id": 10 },
      { "name": "粘性", "id": 11 },
      { "name": "温度", "id": 12 },
      { "name": "浓度", "id": 13 },
      { "name": "角度", "id": 14 },
      { "name": "比特", "id": 15 }]],
    indicatorDots: true,
    clickItem :'',
    autoplay: true,
    circular:true,
    dispalyMenu:true,
    array: ['立方米', '升', '毫升', '立方厘米', '立方英寸', '立方英尺', '英制加仑', '美制加仑','立方分米', '立方毫米', '分升', '厘升', '公石', '立方码', '苗英尺'],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  clickTab:function(e){
    var that = this;
    if (this.data.clickItem === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        clickItem: e.target.dataset.current
      })
    }
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      clickItem: e.detail.current
    });
  },
 

})