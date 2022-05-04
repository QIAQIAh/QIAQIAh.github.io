//左一柱形
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  const colors = ["#5470C6", "#91CC75"];
  var option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "0%",
      right: "2%",
      top: "20%",
      bottom: "0%",
      containLabel: true,
    },
    legend: {
      show: true,
      itemWidth: 22,
      itemHeight: 12,
      textStyle: {
        color: "rgba(207, 202, 202, 1)",
      },
    },
    xAxis: [
      {
        type: "category",
        data: ["2018", "2019", "2020", "2021", "2022"],
        axisPointer: {
          type: "shadow",
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(207, 202, 202, 1)",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(207, 202, 202, 1)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(207, 202, 202, 1)",
          },
        },
        axisLabel: {
          color: colors[0],
          margin: 6,
          formatter: function (value, index) {
            if (value >= 10000) {
              value = value / 10000 + "万";
            } else if (value < 10000) {
              value;
            }
            return value;
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      {
        type: "value",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(207, 202, 202, 1)",
          },
        },
        axisLabel: {
          color: colors[1],
          margin: 6,
          formatter: function (value, index) {
            if (value >= 10000) {
              value = value / 10000 + "万";
            } else if (value < 10000) {
              value;
            }
            return value;
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "总量(/万件)",
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [5071042.8, 6352291, 8335789.4, 10829641.3, 9690562.4],
        itemStyle: {
          barBorderRadius: 5,
        },
        markPoint: {
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
          symbolSize: 24,
          symbolKeepAspect: true,
        },
      },
      {
        name: "收入(/万元)",
        type: "bar",
        yAxisIndex: 1,
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          barBorderRadius: 5,
        },
        data: [60384253.8, 74978235.2, 87954342.4, 103323162, 95713852.4],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//左二饼图
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 指定配置和数据
  var option;

  setTimeout(function () {
    option = {
      color: ["#5470c6", "#91cc75", "#fac858", "#ee6666"],
      legend: {
        left: "5%",
        top: "2%",
        //height: "20%",
        orient: "vertical",
        //padding: [10, 30, 0, 0],
        textStyle: {
          color: "white",
          fontSize: 10,
        },
      },
      tooltip: {
        trigger: "axis",
        showContent: true,
      },
      dataset: {
        source: [
          ["东部", 4051763, 5062776, 6618617, 8457950, 8448961.5],
          ["中部", 623738, 819446, 1108660, 1397024, 1657086.8],
          ["西部", 395541, 470069.5, 608513, 963838, 795837.6],
        ],
      },
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            color: "#dedcde",
          },
        },
        axisLabel: {
          color: "rgba(207, 202, 202, 1)",
        },
        axisTick: {
          show: false,
        },
        data: ["2018", "2019", "2020", "2021", "2022"],
      },
      yAxis: {
        type: "value",
        gridIndex: 0,
        axisLine: {
          lineStyle: {
            color: "#dedcde",
          },
        },
        axisLabel: {
          color: "rgba(207, 202, 202, 1)",
          formatter: function (value, index) {
            if (value >= 10000) {
              value = value / 10000 + "万";
            } else if (value < 10000) {
              value;
            }
            return value;
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: {
        top: "50%",
        bottom: "12%",
        left: "16%",
      },
      series: [
        {
          name: "东部",
          type: "line",
          smooth: true,
          tooltip: {
            valueFormatter: function (value) {
              return value + " 万件";
            },
          },
          //seriesLayoutBy: "row",
          data: [4051763, 5062776, 6618617, 8457950, 7510188],
          emphasis: { focus: "series" },
        },
        {
          name: "中部",
          type: "line",
          smooth: true,
          tooltip: {
            valueFormatter: function (value) {
              return value + " 万件";
            },
          },
          //seriesLayoutBy: "row",
          data: [623738, 819446, 1108660, 1397024, 1472966],
          emphasis: { focus: "series" },
        },
        {
          name: "西部",
          type: "line",
          smooth: true,
          tooltip: {
            valueFormatter: function (value) {
              return value + " 万件";
            },
          },
          //seriesLayoutBy: "row",
          data: [395541, 470069.5, 608513, 963838, 707411.2],
          emphasis: { focus: "series" },
        },
        {
          type: "pie",
          id: "pie",
          radius: "40%",
          center: ["76%", "24%"],
          emphasis: {
            focus: "self",
          },
          label: {
            show: false,
            //formatter: "{b}: {@2012} ({d}%)"
          },
          labelLine: {
            show: false,
          },
          encode: {
            itemName: "product",
            value: "2012",
            tooltip: "2012",
          },
        },
      ],
    };
    myChart.on("updateAxisPointer", function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)",
            },
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        });
      }
    });
    myChart.setOption(option);
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//左三饼图
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  // 指定配置和数据
  var option = {
    color: ["#91cc75", "#5470c6", "#fac858", "#ee6666"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      data: ["异地", "同城", "国际/港珠澳", "其他"],
      orient: "vertical",
      x: "right",
      y: "center",
      padding: [10, 30, 0, 0],
      textStyle: {
        color: "white",
        fontSize: 10,
      },
    },
    series: [
      {
        name: "业务量(/万件)",
        type: "pie",
        selectedMode: "single",
        radius: [0, "30%"],
        center: ["30%", "50%"],
        label: {
          show: false,
          //position: "",
          fontSize: 10,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 290716.9, name: "同城" },
          { value: 2088316.1, name: "异地" },
          { value: 43607.5, name: "国际/港珠澳" },
        ],
      },
      {
        name: "业务收入(/万元)",
        type: "pie",
        radius: ["50%", "75%"],
        center: ["30%", "50%"], //前一个数减小会左移，后一个减小会上移
        labelLine: {
          length: 30,
        },
        label: {
          show: false,
        },
        data: [
          { value: 1603207, name: "同城" },
          { value: 11748875, name: "异地" },
          { value: 2512489, name: "国际/港珠澳" },
          { value: 8063892, name: "其他" },
        ],
      },
    ],
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//右一动图
(function () {
  var myChart = echarts.init(document.querySelector(".bar3 .chart"));
  var dataMap = {};
  function dataFormatter(obj) {
    // prettier-ignore
    var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
    var temp;
    for (var year = 2016; year <= 2020; year++) {
      var max = 0;
      var sum = 0;
      temp = obj[year];
      for (var i = 0, l = temp.length; i < l; i++) {
        max = Math.max(max, temp[i]);
        sum += temp[i];
        obj[year][i] = {
          name: pList[i],
          value: temp[i],
        };
      }
      obj[year + "max"] = Math.floor(max / 100) * 100;
      obj[year + "sum"] = sum;
    }
    return obj;
  }
  // prettier-ignore
  dataMap.dataPI = dataFormatter({
      2016: [369002,130429,103766,84755,35232,92388,38708,44058,441969,397306,374349,122209,188215,83952,375536,270925,192853,116240,803888,68435,16309,116553,151524,57390,76930,4124,80573,31821,11566,10315,68021],
      2017: [399967,108335,101494,67943,31357,82901,42251,38726,466284,414877,402936,122346,199977,95833,344720,245475,188037,113009,886133,74119,16461,107858,150494,62036,78607,3491,91787,32028,11598,10951,71182],
      2018: [423972,155399,94653,76681,35792,84574,38029,36484,506410,459142,419663,118638,223297,94107,325784,192606,205023,122447,947949,76559,19398,103311,153857,65559,80511,4071,84950,33584,82891,11406,66750],
      2019: [456193,178490,98632,83920,38091,88878,42149,43607,613346,486470,463844,116013,245739,95762,323269,195128,201980,128621,1019959,77763,23421,106144,168574,62506,80258,6400,93347,37365,12900,12846,83759],
      2020: [440976,177157,97735,88349,43849,88244,40152,50658,683655,558157,495061,126358,250835,92723,377194,200030,165461,129799,1039847,83131,27688,110087,189704,64762,83982,6975,96489,39363,11435,12134,85316]
  });
  dataMap.dataSI = dataFormatter({
    2016: [
      61513, 10841, 30525, 21148, 24911, 20334, 18296, 30037, 31065, 57103,
      47346, 29540, 29113, 20346, 46938, 34570, 53161, 37672, 93163, 25013,
      7968, 28099, 76449, 14178, 16569, 2125, 35356, 12738, 2866, 3971, 11211,
    ],
    2017: [
      49169, 7679, 24753, 21148, 21025, 19383, 21513, 29512, 28186, 57203,
      49588, 29857, 31715, 20297, 45965, 36559, 51404, 32426, 97821, 27790,
      8937, 28298, 66468, 14393, 17948, 2239, 35456, 15264, 3330, 3880, 11718,
    ],
    2018: [
      84799, 9075, 28692, 17121, 18227, 16630, 19664, 29304, 24187, 51465,
      32082, 40304, 28389, 20109, 47215, 40539, 60244, 28376, 109102, 28399,
      9606, 28037, 64699, 10948, 18641, 2839, 34199, 9538, 3219, 3841, 11669,
    ],
    2019: [
      96389, 13363, 29594, 15977, 16459, 16050, 20332, 27211, 33286, 43619,
      33437, 23137, 31962, 19350, 42768, 28978, 32665, 26929, 88171, 28730,
      10463, 27789, 29021, 17942, 12381, 2202, 32523, 13729, 5243, 3323, 11237,
    ],
    2020: [
      94395, 17599, 22826, 15616, 16828, 16486, 18855, 26669, 46135, 43739,
      58347, 21155, 34481, 20526, 46658, 38140, 26956, 26354, 100660, 30408,
      13611, 27670, 32001, 21720, 19341, 2591, 32444, 16741, 4085, 3187, 12214,
    ],
  });
  dataMap.dataTI = dataFormatter({
    2016: [
      126843, 20664, 49827, 32025, 26444, 42983, 17354, 18221, 75790, 106801,
      131827, 46386, 85592, 41469, 100924, 98416, 58923, 80424, 256797, 45965,
      52344, 38752, 80209, 34744, 57067, 5303, 69629, 25482, 7247, 6569, 22282,
    ],
    2017: [
      119950, 19712, 50017, 31472, 25396, 38837, 17402, 17543, 73135, 102728,
      130660, 42406, 84864, 41356, 102384, 96593, 55531, 78188, 245588, 46720,
      50264, 38045, 77966, 39227, 55814, 5235, 69562, 26817, 7543, 6922, 22974,
    ],
    2018: [
      114261, 17218, 46907, 31382, 21251, 37078, 17996, 16145, 72581, 101285,
      133318, 41534, 87983, 41024, 91517, 86347, 56547, 75915, 238480, 49421,
      52166, 36863, 80112, 39965, 55320, 5158, 71573, 25334, 7395, 5973, 22314,
    ],
    2019: [
      113334, 16142, 48366, 33009, 21593, 35408, 17539, 15241, 78190, 100463,
      140846, 50778, 95477, 42503, 91292, 87749, 55138, 73219, 237909, 51556,
      53840, 35815, 84410, 41868, 54498, 5077, 73432, 26676, 7005, 5991, 25270,
    ],
    2020: [
      96155, 15546, 44102, 33645, 18958, 29972, 14862, 12105, 71323, 96653,
      136471, 47037, 86656, 41062, 83481, 80440, 47565, 65079, 213780, 47993,
      48686, 33973, 83015, 37691, 48041, 4816, 68974, 25072, 5979, 4550, 22542,
    ],
  });
  option = {
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666"],
    baseOption: {
      timeline: {
        show: false,
        axisType: "category",
        autoPlay: true,
        playInterval: 1000,
        data: [
          "2016-01-01",
          "2017-01-01",
          "2018-01-01",
          "2019-01-01",
          "2020-01-01",
        ],
        label: {
          formatter: function (s) {
            return new Date(s).getFullYear();
          },
        },
      },
      tooltip: {},
      legend: {
        right: "0%",
        data: ["批发和零售业", "邮政业", "住宿和餐饮业"],
        textStyle: {
          color: "rgba(207, 202, 202, 1)",
          fontStyle: "normal",
          fontSize: 10,
        },
        itemWidth: 12,
        itemHeight: 12,
      },
      calculable: true,
      grid: {
        left: "1%",
        right: "4%",
        top: "30%",
        bottom: "",
        containLabel: true,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              formatter: function (params) {
                return params.value.replace("\n", "");
              },
            },
          },
        },
      },
      xAxis: [
        {
          type: "category",
          axisLabel: {
            interval: 0,
            color: "rgba(207, 202, 202, 1)",
          },
          data: [
            "北京",
            "\n天津",
            "河北",
            "\n山西",
            "内蒙古",
            "\n辽宁",
            "吉林",
            "\n黑龙江",
            "上海",
            "\n江苏",
            "浙江",
            "\n安徽",
            "福建",
            "\n江西",
            "山东",
            "\n河南",
            "湖北",
            "\n湖南",
            "广东",
            "\n广西",
            "海南",
            "\n重庆",
            "四川",
            "\n贵州",
            "云南",
            "\n西藏",
            "陕西",
            "\n甘肃",
            "青海",
            "\n宁夏",
            "新疆",
          ],
          splitLine: { show: false },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "rgba(207, 202, 202, 1)",
          },
          axisLine: {
            show: true,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        { name: "批发和零售业", type: "bar", emphasis: { focus: "series" } },
        { name: "邮政业", type: "bar", emphasis: { focus: "series" } },
        { name: "住宿和餐饮业", type: "bar", emphasis: { focus: "series" } },
        {
          name: "就业人数占比",
          type: "pie",
          center: ["85%", "35%"],
          radius: "28%",
          z: 100,
        },
      ],
    },
    options: [
      {
        color: ["#5470c6", "#91cc75", "#fac858", "#ee6666"],
        title: {
          text: "2016年",

          textStyle: {
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: 8,
            color: "#84c1e8",
          },
        },
        series: [
          { data: dataMap.dataPI["2016"] },
          { data: dataMap.dataSI["2016"] },
          { data: dataMap.dataTI["2016"] },
          {
            data: [
              { name: "批发和零售业", value: dataMap.dataPI["2016sum"] },
              { name: "邮政业", value: dataMap.dataSI["2016sum"] },
              { name: "住宿和餐饮业", value: dataMap.dataTI["2016sum"] },
            ],
          },
        ],
      },
      {
        title: {
          text: "2017年",
          textStyle: {
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#84c1e8",
          },
        },
        series: [
          { data: dataMap.dataPI["2017"] },
          { data: dataMap.dataSI["2017"] },
          { data: dataMap.dataTI["2017"] },
          {
            data: [
              { name: "批发和零售业", value: dataMap.dataPI["2017sum"] },
              { name: "邮政业", value: dataMap.dataSI["2017sum"] },
              { name: "住宿和餐饮业", value: dataMap.dataTI["2017sum"] },
            ],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        ],
      },
      {
        title: {
          text: "2018年",
          textStyle: {
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#84c1e8",
          },
        },
        series: [
          { data: dataMap.dataPI["2018"] },
          { data: dataMap.dataSI["2018"] },
          { data: dataMap.dataTI["2018"] },
          {
            data: [
              { name: "批发和零售业", value: dataMap.dataPI["2018sum"] },
              { name: "邮政业", value: dataMap.dataSI["2018sum"] },
              { name: "住宿和餐饮业", value: dataMap.dataTI["2018sum"] },
            ],
          },
        ],
      },
      {
        title: {
          text: "2019年",
          textStyle: {
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#84c1e8",
          },
        },
        series: [
          { data: dataMap.dataPI["2019"] },
          { data: dataMap.dataSI["2019"] },
          { data: dataMap.dataTI["2019"] },
          {
            data: [
              { name: "批发和零售业", value: dataMap.dataPI["2019sum"] },
              { name: "邮政业", value: dataMap.dataSI["2019sum"] },
              { name: "住宿和餐饮业", value: dataMap.dataTI["2019sum"] },
            ],
          },
        ],
      },
      {
        title: {
          text: "2020年",
          textStyle: {
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#84c1e8",
          },
        },
        series: [
          { data: dataMap.dataPI["2020"] },
          { data: dataMap.dataSI["2020"] },
          { data: dataMap.dataTI["2020"] },
          {
            data: [
              { name: "批发和零售业", value: dataMap.dataPI["2020sum"] },
              { name: "邮政业", value: dataMap.dataSI["2020sum"] },
              { name: "住宿和餐饮业", value: dataMap.dataTI["2020sum"] },
            ],
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//右二柱形
(function () {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var option = {
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      textStyle: {
        color: "rgba(207, 202, 202, 1)",
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      top: "20%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2018", "2019", "2020", "2021", "2022"],
        axisPointer: {
          type: "shadow",
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(207, 202, 202, 1)",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "rgba(207, 202, 202, 1)",
          margin: 6,
          formatter: function (value, index) {
            if (value >= 10000) {
              value = value / 10000 + "万";
            } else if (value < 10000) {
              value;
            }
            return value;
          },
        },
      },
    ],
    series: [
      {
        name: "陕西",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: [56876.5, 72891.9, 91749.8, 111806.6, 345947.4],
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万件";
          },
        },
      },
      {
        name: "上海",
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [348648.8, 313326.1, 336330.7, 374137.9, 363870.9],
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万件";
          },
        },
      },
      {
        name: "河北",
        type: "bar",
        data: [174136.2, 230392.7, 370249.8, 506015, 516360.15],
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万件";
          },
        },
        emphasis: {
          focus: "series",
        },
      },
      {
        name: "山东",
        type: "bar",
        barWidth: 5,
        stack: "Search Engine",
        emphasis: {
          focus: "series",
        },
        data: [218701.1, 288856.2, 415174.2, 559785.8, 585036.9],
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万件";
          },
        },
        markLine: {
          lineStyle: {
            type: "dashed",
          },
          data: [[{ type: "min" }, { type: "max" }]],
          label: {
            color: "#333333",
            textBorderColor: "#ffffff",
            textBorderWidth: 2,
            position: "middle",
          },
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 右三折线
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  // 指定配置和数据
  var option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["E", "U", "V", "D", "S"],
    },
    grid: {
      top: "10%",
      left: 0,
      right: "2%",
      bottom: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#dedcde",
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: [
        "2019-4",
        "2020-1",
        "2020-2",
        "2020-3",
        "2020-4",
        "2021-1",
        "2021-2",
        "2021-3",
        "2021-4",
        "2022-1",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#dedcde",
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "发展规模指数",
        type: "line",
        stack: "Total",
        data: [
          255.6, 174.1, 279.9, 282.9, 345.56, 282.86, 349.63, 352.8, 402.9,
          348.8,
        ],
      },
      {
        name: "服务质量指数",
        type: "line",
        stack: "Total",
        data: [
          260.5, 253.6, 518.76, 542.83, 415.53, 339.03, 564.6, 573.7, 438.13,
          399.9,
        ],
      },
      {
        name: "发展能力指数",
        type: "line",
        stack: "Total",
        data: [
          191.1, 155.3, 203.76, 186.86, 214.53, 184.66, 207.93, 196.33, 224.93,
          200.5,
        ],
      },
      {
        name: "发展趋势指数",
        type: "line",
        stack: "Total",
        data: [65, 65.06, 92.06, 102.5, 119.9, 109.86, 87.9, 79.3, 81.63, 81.1],
      },
      {
        name: "快递发展指数",
        type: "line",
        stack: "Total",
        data: [
          218.7, 181.43, 309.93, 314.03, 304.53, 251.86, 345.4, 344.76, 327.93,
          292.9,
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var mapIcons = {
    sign: "/asset/get/s/data-1593933773676-FDpSjX2lK.png",
    bg: "/asset/get/s/data-1593933762711-IHRMda0Rg.png",
  };
  // 全国省份列表
  var geoCoordMap = {
    台湾: [121.509062, 25.044332],
    河北: [114.502461, 38.045474],
    山西: [112.549248, 37.857014],
    内蒙古: [111.670801, 40.818311],
    辽宁: [123.429096, 41.796767],
    吉林: [125.3245, 43.886841],
    黑龙江: [126.642464, 45.756967],
    江苏: [118.767413, 32.041544],
    浙江: [120.153576, 30.287459],
    安徽: [117.283042, 31.86119],
    福建: [119.306239, 26.075302],
    江西: [115.892151, 28.676493],
    山东: [117.000923, 36.675807],
    河南: [113.665412, 34.757975],
    湖北: [114.298572, 30.584355],
    湖南: [112.982279, 28.19409],
    广东: [113.280637, 23.125178],
    广西: [108.320004, 22.82402],
    海南: [110.33119, 20.031971],
    四川: [104.065735, 30.659462],
    贵州: [106.713478, 26.578343],
    云南: [102.712251, 25.040609],
    西藏: [91.132212, 29.660361],
    陕西: [108.948024, 34.263161],
    甘肃: [103.823557, 36.058039],
    青海: [101.778916, 36.623178],
    宁夏: [106.278179, 38.46637],
    新疆: [87.617733, 43.792818],
    北京: [116.405285, 39.904989],
    天津: [117.190182, 39.125596],
    上海: [121.472644, 31.231706],
    重庆: [106.504962, 29.533155],
    香港: [114.173355, 22.320048],
    澳门: [113.54909, 22.198951],
  };
  var markPointData = [];

  function randomData() {
    return Math.round(Math.random() * 2000);
  }

  var data = [
    { name: "北京", value: 47969.9 },
    { name: "天津", value: 24517.6 },
    { name: "河北", value: 114746.7 },
    { name: "山西", value: 17361 },
    { name: "内蒙古", value: 5872.5 },
    { name: "辽宁", value: 37417.2 },
    { name: "吉林", value: 13225.6 },
    { name: "黑龙江", value: 14948.1 },
    { name: "上海", value: 80860.2 },
    { name: "江苏", value: 192511.7 },
    { name: "浙江", value: 482215.3 },
    { name: "安徽", value: 73000.6 },
    { name: "福建", value: 86015.5 },
    { name: "江西", value: 37245.4 },
    { name: "山东", value: 130008.2 },
    { name: "河南", value: 98652.8 },
    { name: "湖北", value: 68047.3 },
    { name: "湖南", value: 46421.5 },
    { name: "广东", value: 676894.3 },
    { name: "广西", value: 22780.2 },
    { name: "海南", value: 3952.6 },
    { name: "重庆", value: 23423.8 },
    { name: "四川", value: 64058.4 },
    { name: "贵州", value: 9864.2 },
    { name: "云南", value: 19037.3 },
    { name: "西藏", value: 315.7 },
    { name: "陕西", value: 19219.3 },
    { name: "甘肃", value: 4367.4 },
    { name: "青海", value: 851.4 },
    { name: "宁夏", value: 2341.5 },
    { name: "新疆", value: 4497.4 },
    { name: "台湾", value: 0 },
  ];
  data.sort(function (a, b) {
    return a.value - b.value;
  });
  const mapOption = {
    title: {
      text: "全国城市快递业务量",
      left: "center",
      top: "4%",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      show: true,
    },
    visualMap: {
      left: "right",
      min: 1000,
      max: 680000,
      inRange: {
        color: [
          "#9aabfa",
          "#8194ed",
          "#7084e5",
          "#576dd9",
          "#4058cb",
          "#374fc2",
          "#3048c2",
          "#2d45c2",
          "#1f37b1",
          "#1c2e87",
          "#0c1d71",
          "#0a1a6a",
        ],
      },
      text: ["High", "Low"],
      textStyle: {
        color: "#bfcafd",
      },
      calculable: true,
    },
    series: [
      {
        name: "业务量/(万件)",
        id: "population",
        type: "map",
        roam: false,
        map: "china",
        //colorBy: "data",
        //出地图
        animationDurationUpdate: 1000,
        universalTransition: true,
        data: data,
        aspectScale: 0.75,
        zoom: 1.1, //地图放大
        emphasis: {
          label: {
            show: true,
          },
        },
        label: {
          show: true, //显示省名
          fontSize: 8,
          color: "#fff",
        },
      },
    ],
  };
  const barOption = {
    title: {
      text: "全国城市业务量排行榜",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      show: true,
      //backgroundColor: "rgba(255,255,255,0.8)",
    },
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#dedcde",
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#dedcde",
        },
      },
      axisLabel: {
        rotate: 30,
      },
      data: data.map(function (item) {
        return item.name;
      }),
    },
    animationDurationUpdate: 1000,
    series: {
      type: "bar",
      id: "population",
      color: "#84c1e8",
      data: data.map(function (item) {
        return item.value;
      }),
      universalTransition: true,
    },
  };
  let currentOption = mapOption;
  myChart.setOption(mapOption);
  setInterval(function () {
    currentOption = mapOption;
    myChart.setOption(currentOption, true);
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
