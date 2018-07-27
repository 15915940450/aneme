$(function(){
  $.getJSON('/marksix',function(data){
    _.logErr(data);
    var dataTe=data.map(function(v){
      return ({
        date:v.period,
        num:window.Number(v.numbers.split(',').pop())
      });
    });
    console.log(dataTe);
  });
});
