$(function(){
  var objEcharts=echarts.init(document.getElementById('echarts_wrap'));
  var yMax=200;

  $.getJSON('/marksix',function(arrData){
    initEcharts(objEcharts,arrData,yMax);
  });
});


var initEcharts=function(objEcharts,arrData,yMax){
  var dataAxis=[],data=[];
  arrData.forEach(function(v,i){
    dataAxis[i]=v['_id'];
    data[i]=v.total;
  });
  var dataShadow = [];

  for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }

  option = {
    title: {
      text: 'mark six',
      subtext: 'luck?'
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
          normal: {color: 'rgba(0,0,0,0.05)'}
        },
        barGap:'-100%',
        barCategoryGap:'40%',
        data: dataShadow,
        animation: false
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ]
            )
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#2378f7'},
                {offset: 0.7, color: '#2378f7'},
                {offset: 1, color: '#83bff6'}
              ]
            )
          }
        },
        data: data
      }
    ]
  };

  objEcharts.setOption(option);
}
