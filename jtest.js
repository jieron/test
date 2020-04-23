
  //---------- Send Message ----------//
 
 $("#snd").click(function() {
    console.log("NEW METHOD");
  if( !$(".ta").val() ) { return false; }
  tav = $(".ta").val();
  $(".ta").val("");
  if ( $(".ta").attr("id") === 'no')
   alert("المرجو إختيار المرسل إليه");
  else
  {
   setTimeout(function() {
    $.get("/ajax.php?c=s&rm="+$("#rm").val()+"&fr="+$("#myid").val()+"&to="+$(".ta").attr("id").replace(/.+q9j1w6/,"")+"&txt="+tav, function(data) {
    if (data === 'done') {
      console.log("NEW DONE");
     $('<div style="text-align:right"><p class="me">'+tav+'KAREM'+'</p></div>').appendTo(".conv#"+$(".ta").attr("id"));
     $(".conv#"+$(".ta").attr("id")).scrollTop($(".conv#"+$(".ta").attr("id")).height());
    }
    else if (data === 'out')
    {
      console.log("NEW OUT");
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
  
