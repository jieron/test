$( document ).ready(function() {
  console.log( "ready!" );

  var x =document.getElementById('snd');
  x.id="newsnd";
  console.log("=>");

});

$("#newsnd").click(function() {
    

  if( !$(".ta").val() ) { return false; }
  tav = $(".ta").val();
  console.log(tav);
  $(".ta").val("");
  if ( $(".ta").attr("id") === 'no')
   alert("المرجو إختيار المرسل إليه");
  else
  {
   setTimeout(function() {
     console.log("/ajax.php?c=s&rm="+$("#rm").val()+"&fr="+$("#myid").val()+"&to=fcwxn"+$(".ta").attr("id").replace(/.+q9j1w6/,"")+"&txt="+tav);
    $.get("/ajax.php?c=s&rm="+$("#rm").val()+"&fr="+$("#myid").val()+"&to=fcwxn"+$(".ta").attr("id").replace(/.+q9j1w6/,"")+"&txt="+tav, function(data) {
    if (data === 'done') {
     $('<div class="me-div"><p class="me">'+tav+'</p></div>').appendTo(".conv#"+$(".ta").attr("id"));
     $(".conv#"+$(".ta").attr("id")).scrollTop($(".conv#"+$(".ta").attr("id")).height());
    }
    else if (data === 'out')
    {
     $(".users #"+$(".ta").attr("id")).remove();
     alert("المستخدم غادر الغرفة");
    }
    else
     alert("لم يتم إرسال الرسالة");
    });
   }, 1000);
  }
 });
 
 $(".ta").keypress(function(e) { if (e.which === 13) { e.preventDefault(); $("#snd").click(); } });
