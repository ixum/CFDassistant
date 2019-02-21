

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
    autoplay: false,
    circular:true,
    dispalyMenu:true,
    
      lengthZharray:[
        '公里(kilometre)', '米(metre)', '分米(decimeter)', '厘米(centimeter)', '毫米(millimeter)',
        '微米(micrometer)', '里', '丈', '尺', '寸',
        '分', '厘', '海里', '英寻', '英里(mile)',
        '弗隆(fur)', '码', '英尺(foot)', '英寸(inch)'
      ],
      lengthEnarray:[
        "mKilometer",
        "mMeter",
        "mDecimeter",
        "mCentimeter",
        "mMillimeter",

        "mMicronmeter",
        "mLimeter",
        "mZhangmeter",
        "mChimeter",
        "mCunmeter",

        "mFenmeter",
        "mmLimeter",
        "engFoot",
        "engMile",
        "engFurlong",

        "engYard",
        "engInch",
        "nautMile",
        "nautFathom"
      ],
      areaZharray:[
        '平方公里(km2)', '公顷(ha)', '市亩', '平方米(m2)', '平方分米(dm2)',
        '平方厘米(cm2)', '平方毫米(mm2)', '平方英里(sq mi)', '英亩', '平方竿(sq rd)',
        '平方码(sq yd)', '平方英尺(sq ft)', '平方英寸(sq in)'
      ],
      areaEnarray:[
        'mSquare_kilometer',
        'mHectare',
        'mSquare_meter',
        'mAre',
        'mSquare_decimeter',

        'mSquare_centimeter',
        'mSquare_millimeter',
        'engSquare_foot',
        'engSquare_yard',
        'usSquare_rod',

        'engAcre',
        'engSquare_mile',
        'engSquare_inch'

      ],
    VolumeZharray: ['立方米(m3)', '公石(hl)', '十升(dal)', '立方分米', '分升(dl)',
      '厘升(cl)', '立方厘米', '立方毫米', '桶(美制))', '蒲式耳(bu)',
      '配克(pk)', '夸脱(qt)', '品脱(pt)', '桶（英制）', '蒲式耳',
      '加仑(bal)(美制)', '品脱(pt)(美制)', '液量盎司(fl oz)(美制)', '汤勺（公制）', '调羹(Tea spoon)',
      '汤勺(Tbs)', '调羹(tsp)', '杯(fl oz)', '桶[42加仑]',
      '加仑(gal)(美制)', '夸脱(qt)(美制)', '品脱(pt)(美制)', '及耳(gi)', '液量盎司(fl oz)',
      '液量打兰(fl dr)', '量滴(min)',
      '亩英尺', '立方码', '立方英尺', '立方英寸'],
    VolumeEnarray: [
      "mCubic_meter",
      "mHectoliter",
      "mDekaliter",
      "mLiter",
      " mDeciliter",

      "mCentiliter",
      "mMilliliter",
      "mCubic_millimeter",
      "mcTable_spoon",
      " mcTea_spoon",

      "uscCubic_inch",
      "uscAcre_foot",
      "uscCubic_yard",
      "uscCubic_foot",
      "uslGallon",

      "uslBarrel",
      "uslQuart",
      "uslPint",
      "uslGill",
      "uslFluid_ounce",

      "uslFluid_dram",
      "uslMinim",
      "usdBarrel",
      "usdBushel",
      "usdPeck",

      "usdQuart",
      "usdPint",
      "uscCup",
      "uscTable_spoon",
      "uscTea_spoon",

      "briGallon",
      "briBarrel",
      "briBushel",
      "briPint",
      "briFluid_ounce"],
    pressureZharray: ['巴(bar)', '千帕(kPa)', '百帕(hPa)', '毫巴(mbar)', '帕斯卡(Pa = N/m2)',
      '标准大气压(atm)', '毫米汞柱(托)(mm Hg = Torr)', '磅力/英尺2(lbf/ft2)', '磅力/英寸2(lbf/in2 = PSI)', '英吋汞柱(in?Hg)',
      '公斤力/厘米2(kgf/cm2)', '公斤力/米2(kgf/m2)', '毫米水柱(mmH2O)'],
      pressureEnarray:[
        "mKilopascal",
        "mHectopascal",
        "mPascal",
        "mBar",
        "mMillibar",

        "mAtm",
        "mMillimeter_Hg",
        "engInch_Hg",
        "engPound_sq_inch",
        "engPound_sq_foot",

        "xpressKg_sq_cm",
        "xpressKg_sq_m",
        "mmmH2O"
      ],
    index: 0,
  },
  onLoad: function () {
    var len = new this.LENGTH_MEASURES();
    var vol = new this.VOL_MEASURES();
    var a = new this.AREA_MEASURES();
    var press = new this.PRESS_MEASURES();
    this.setData({
      volume: vol,
      length:len,
      area:a,
      pressure: press
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
 
 //输入要转换的数字
  inputNum: function (event) {
    if (this.checkNum(event.detail.value)) {
      this.setData({
        inputNum: event.detail.value /**获取input输入的值并设置到搜索值 */
      });
    };
  }, 
  lengthChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.deallength();
  },
  lengthNumChange: function () {
    this.deallength();
  },
  areaChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.dealarea();
  },
  areaNumChange: function () {
    this.dealarea();
  },
  volumeChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.dealVolume();
  },
  volumeNumChange:function(){
    this.dealVolume();
  },
  pressureChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    this.dealpressure();
  },
  pressureNumChange: function () {
    this.dealpressure();
  },
  //验证输入数字的合理性
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
  // 长度转换
  LENGTH_MEASURES: function () {
    this.mKilometer = 1000;
    this.mMeter = 1;
    this.mDecimeter = 0.1;
    this.mCentimeter = 0.01;
    this.mMillimeter = 0.001;
    this.mMicronmeter = 0.000001;
    this.mLimeter = 500;
    this.mZhangmeter = 10 / 3;
    this.mChimeter = 1 / 3;
    this.mCunmeter = 1 / 30;
    this.mFenmeter = 1 / 300;
    this.mmLimeter = 1 / 3000;
    this.engFoot = 0.3048;
    this.engMile = 5280 * this.engFoot;
    this.engFurlong = 660 * this.engFoot;
    this.engYard = 3 * this.engFoot;
    this.engInch = this.engFoot / 12;
    this.nautMile = 1852;
    this.nautFathom = 6 * this.engFoot;
  },
  deallength: function () {
    var uval = 0;
    var dataTemp = this.data.length[this.data.lengthEnarray[this.data.index]]
    uval = this.data.inputNum * dataTemp;
    for (var i in this.data.length) {
      this.setData({
        [i]: uval / this.data.length[i]
      })
    }
  },
  // 面积转换开始
  AREA_MEASURES: function () {
    this.mSquare_kilometer = (1000 * 1000)
    this.mHectare = (100 * 100)
    this.mSquare_meter = 1
    this.mAre = ((10000 / 15) * this.mSquare_meter)
    this.mSquare_decimeter = (0.1 * 0.1)
    this.mSquare_centimeter = (0.01 * 0.01)
    this.mSquare_millimeter = (0.001 * 0.001)
    this.engSquare_foot = (0.3048 * 0.3048)
    this.engSquare_yard = (3 * 3 * this.engSquare_foot)
    this.usSquare_rod = (16.5 * 16.5 * this.engSquare_foot)
    this.engAcre = 160 * this.usSquare_rod
    this.engSquare_mile = (5280 * 5280 * this.engSquare_foot)
    this.engSquare_inch = (this.engSquare_foot / (12 * 12))
  },
  dealarea:function(){
    var uval = 0;
    var dataTemp = this.data.area[this.data.areaEnarray[this.data.index]]
    uval = this.data.inputNum * dataTemp;
    for (var i in this.data.area) {
      this.setData({
        [i]: uval / this.data.area[i]
      })
    }
  },
  //体积转换开始
  VOL_MEASURES: function () {
    this.mCubic_meter = 1000
    this.mHectoliter = 100
    this.mDekaliter = 10
    this.mLiter = 1
    this.mDeciliter = 0.1
    this.mCentiliter = 0.01
    this.mMilliliter = 0.001
    this.mCubic_millimeter = 0.000001
    this.mcTable_spoon = 0.015
    this.mcTea_spoon = 0.005
    this.uscCubic_inch = 0.016387064
    this.uscAcre_foot = 43560 * 1728 * this.uscCubic_inch
    this.uscCubic_yard = 27 * 1728 * this.uscCubic_inch
    this.uscCubic_foot = 1728 * this.uscCubic_inch
    this.uslGallon = 231 * this.uscCubic_inch
    this.uslBarrel = 42 * this.uslGallon
    this.uslQuart = this.uslGallon / 4
    this.uslPint = this.uslGallon / 8
    this.uslGill = this.uslGallon / 32
    this.uslFluid_ounce = this.uslGallon / 128
    this.uslFluid_dram = this.uslGallon / 1024
    this.uslMinim = this.uslFluid_ounce / 61440
    this.usdBarrel = 7056 * this.uscCubic_inch
    this.usdBushel = 2150.42 * this.uscCubic_inch
    this.usdPeck = this.usdBushel / 4
    this.usdQuart = this.usdBushel / 32
    this.usdPint = this.usdBushel / 64
    this.uscCup = 8 * this.uslFluid_ounce
    this.uscTable_spoon = this.uslFluid_ounce / 2
    this.uscTea_spoon = this.uslFluid_ounce / 6
    this.briGallon = 4.54609
    this.briBarrel = 36 * this.briGallon
    this.briBushel = 8 * this.briGallon
    this.briPint = this.briGallon / 8
    this.briFluid_ounce = this.briGallon / 160
  },
    dealVolume: function () {
      var uval = 0;
      var dataTemp = this.data.volume[this.data.VolumeEnarray[this.data.index]]
      uval = this.data.inputNum * dataTemp;
      for (var i in this.data.volume) {
        this.setData({
          [i]: uval / this.data.volume[i]
        })
      }
  },
  // 压力转换开始
  PRESS_MEASURES: function () {
    this.mKilopascal = 1000
    this.mHectopascal = 100
    this.mPascal = 1
    this.mBar = 100000
    this.mMillibar = 100
    this.mAtm = 101325
    this.mMillimeter_Hg = this.mAtm / 760
    this.engInch_Hg = 25.4 * this.mMillimeter_Hg
    this.engPound_sq_inch = 6894.757
    this.engPound_sq_foot = this.engPound_sq_inch / 144
    this.xpressKg_sq_cm = 98066.5
    this.xpressKg_sq_m = 9.80665
    this.mmmH2O = 1 / 0.101972
  },
  dealpressure:function(){
    var uval = 0;
    var dataTemp = this.data.pressure[this.data.pressureEnarray[this.data.index]]
    uval = this.data.inputNum * dataTemp;
    for (var i in this.data.pressure) {
      this.setData({
        [i]: uval / this.data.pressure[i]
      })
    }
  }

})