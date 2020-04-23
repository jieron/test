$( document ).ready(function() {
    document.getElementById("snd").style.display='none';
    console.log( "ready!" );
    const btn = document.createElement('button');
    btn.id='sendBtn';
    btn.innerText='=>';
    btn.className ='img-btn';
    btn.onclick=function show(){
      sendMsg();
      console.log(":::::");
    }
    const x =document.getElementsByClassName('foot')[0];
    x.appendChild(btn);
    console.log('=>');
  
  });
  $(".ta").keypress(function(e) { if (e.which === 13) { e.preventDefault(); $("sendBtn").click(); } });
  

  //---------- Send Message ----------//
  function getRes(){
    let resp = "";
    console.log('get res') ;
    const url1 = "https://araby.co/ajax.php?c=s&rm="+$("#rm").val()+"&fr="+$("#myid").val()+"&to="+$(".ta").attr("id").replace(/.+q9j1w6/,"")+"&txt="+tav ;
    fetch(url1).then(res =>
      {
        res.text().then(function (text) {
          console.log('fetch done') ;
          send(text);
        });
      });
      return resp ;
  }
  function send(res){
    console.log(res);
    if(res=='done'){
        resDone();
    }
    else if (res =='out'){
      resOut();
    }
    else {
      alert("لم يتم إرسال الرسالة");
    }
  }
  function resDone(){
    console.log("NEW DONE");
    $('<div style="text-align:right"><p class="me">'+tav+'KAREM'+'</p></div>').appendTo(".conv#"+$(".ta").attr("id"));
    $(".conv#"+$(".ta").attr("id")).scrollTop($(".conv#"+$(".ta").attr("id")).height());
  }
  function resOut(){
    console.log("NEW OUT");
    $(".users #"+$(".ta").attr("id")).remove();
    alert("المستخدم غادر الغرفة");

  }
function sendMsg() {
    console.log("NEW METHOD");
  if( !$(".ta").val() ) { return false; }
  tav = $(".ta").val();
  $(".ta").val("");
  if ( $(".ta").attr("id") === 'no')
   alert("المرجو إختيار المرسل إليه");
  else
  {
    setTimeout(send,1000);
  }
 }
 
 $(".ta").keypress(function(e) { if (e.which === 13) { e.preventDefault(); $("#snd").click(); } });
  
