$(function(){
  $.getJSON('/marksix',function(data){
    _.logErr(data);
  });
});
