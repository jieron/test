$(document).ready(function() {
 
    $("#wel").show();
    
    //---------- Menu Click ----------//
    
    $(document).on("click","#onl",function() { $(".out").hide(); $(".conv").hide(); $(".foot").hide();
     $.ajax({url:"/online/"+$("#rm").val()+".html", cache: false}).done(function(data) { $("#on").html(data); });
     $("#on").show(); $(".h1 span").text("Online: "+$("#on p").length);
    });
    
    $(document).on("click","#his",function() { $(".out").hide(); $(".conv").hide(); $("#tabs").show(); $(".foot").hide(); });
    
    //---------- Users Click ----------//
   
   $(document).on("click","#on p",function() {
    if ($("#tabs #"+$(this).attr("id")).length === 0 ) {
     $('<p id="'+$(this).attr("id")+'" style="cursor: default" class="tab"><i>'+$(this).find("b").text()+'</i><b class="x"></b></p>').appendTo($("#tabs"));
     $(".h1 span").text($(this).find("b").text());
     $(".out").hide();
     $('<div id="'+$(this).attr("id")+'" class="conv"><div class="clear">مسح</div></div>').appendTo($(".outer")).show();
     $(".foot").css("display","table");
    }
    else
     $("#tabs #"+$(this).attr("id")).click();
    $(".ta").attr("id",$(this).attr("id"));
   });
    
    //---------- Tab Click ----------//
    
    $(document).on("click",".tab",function() {
     $(".conv").hide();
     $("#tabs #"+$(this).attr("id")).css({"background":"","color":""});
     $("div#"+$(this).attr("id")).show().scrollTop($("div#"+$(this).attr("id"))[0].scrollHeight);
     $(".h1 span").text($(this).text().replace('x',''));
     $(".ta").attr("id", $(this).attr("id"));
     $(".foot").css("display","table");
    });
    
    $(document).on("click",".clear",function() { $(this).siblings().remove(); });
    
    //---------- Close Tab ----------//
   
   $(document).on("click",".x",function() {
    xid = $(this).parent().attr("id");
    $(this).parent().remove();
    $("div#"+xid).remove();
    $(".h1 span").text("الرسائل");
    $(".ta").attr("id","no");
   });
    
    //---------- Send Message ----------//
   
   $("#snd").click(function() {
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
       $('<div><p class="me">'+tav+'</p></div>').appendTo(".conv#"+$(".ta").attr("id"));
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
    
    //--------- Receive Message ----------//
   
   setInterval(function() {
    $.ajax({url:"/msg/"+$("#rm").val()+"/"+$("#myid").val().replace(/.+q9j1w6/, "")+".html", cache:false}).done(function(data) {
     lines = data.split("\n");
     $.get("/ajax.php?c=r&f=msg/"+$("#rm").val()+"/"+$("#myid").val().replace(/.+q9j1w6/, "")+".html");
     lines.pop();
     
     $(".h1 span").html('لديك رسائل جديدة');
     
     for (i=0; i<lines.length; i++) {
      par = lines[i].split("e8s1p4");
        
      if ($("#tabs>p#"+par[0]).length < 1 ) {
       $('<p id="'+par[0]+'" class="tab" style="background: #E13; color: #FFF">'+par[0].replace(/q9j1w6.+/, "").replace("-", " ")+
         '<b class="x">x</b></p>').appendTo($("#tabs"));
       $('<div id="'+par[0]+'" class="conv" style="display:none"><div class="clear">مسح</div><div><p>'+par[1]+'</p></div></div>').appendTo($(".outer"));  
      }
      else
      {
       $("<div><p>"+par[1]+'</p></div>').appendTo($("div#"+par[0]));
       $("div#"+par[0]).scrollTop($("div#"+par[0])[0].scrollHeight);
      }
     }
    });
   },10000);
    
    // ---------- Log Out ----------//
    
    $(window).bind("beforeunload", function() {$.get("/ajax.php?c=o&rm="+$("#rm").val()+"&uid="+$("#myid").val());  return 'هل تريد تسجيل الخروج '; }); 
    
   });
