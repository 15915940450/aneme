$(function(){
  $.getJSON('/marksix',function(data){
    _.logErr(data);
    //drawChart('chart',data);
  });
});

/*
var drawChart=function(eleid,arr){
  var ctx=document.getElementById(eleid).getContext('2d');
  var chart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:arr.map(function(v){
        return (v._id);
      }),  //xValue
      datasets:[{
        label:'特',
        data:arr.map(function(v){
          return (v.total);
        }), //yValue
        backgroundColor:'rgba(54, 162, 235, 0.2)',
        borderColor:'rgba(54, 162, 235, 1)',
        options: {
          layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
          }
        }
      }]
    }
  });
}
*/
