//柱状图模块1
(function(){
    //实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //指定配置项和数据
    var option = {
        color:"#2f89cf",
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        //修改图表的大小
        grid: {
          top:"10px",
          left: '0%',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ["旅游行业","教育培训","游戏行业","医疗行业","电商行业","社交行业","金融行业"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:"5"
            },
            //不显示x坐标轴的样式
            axisLine:{
                show:false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:"12"
            },
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)",
                    
                }
            },
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            }
          }
          
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle:{
                //修改柱子圆角
                barBorderRadius:5
            }
          }
        ]
      };
      //把配置项给实例对象
      myChart.setOption(option);
      //让图标跟随屏幕自动去适应
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})();

//柱状图2
(function(){
    var myColor = ["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"];

    var myChart = echarts.init(document.querySelector(".bar2 .chart"));

    var option = {
        grid: {
          top:"10%",
          left: '22%',
          bottom: '10%',
        //   containLabel: true
        },
        xAxis: {
            //不显示x轴
          show:false
        },
        yAxis: [  //可以是数组的形式
          {
            inverse:true,
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
              color:"#fff",
            },
            type: 'category',
            data: ["HTML5","CSS3","javascript","VUE","NODE"],
          },
          {
            inverse:true,
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
              color:"#fff",
            },
            type: 'category',
            data: [702,350,610,793,664],
          },
        ],
        series: [
          {
            name: "条",
            type: 'bar',
            itemStyle:{
                normal:{
                    barBorderRadius:20,
                    //修改柱子的颜色
                    color:function(param){
                      return myColor[param.dataIndex%myColor.length];
                    }
                }
            },
            yAxisIndex:0,
            barCategoryGap:50,
            barWidth:10,
            data: [70,34,60,78,69],
            //显示柱子内的文字
            label:{
              show:true,
              position:"inside",
              //生成百分比
              formatter:"{c}%"
            }
          },
          {
            name: '框',
            type: 'bar',
            barCategoryGap:50,
            barWidth:15,
            yAxisIndex:1,
            itemStyle:{
              color:"none",
              borderColor:"#00c1de",
              borderWidth:3,
              barBorderRadius:15
            },
            data: [100,100,100,100,100]
          }
        ]
      };

      myChart.setOption(option);

      window.addEventListener('resize',function(){
        myChart.resize();
      })
})()