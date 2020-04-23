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

function sendMsg() {
  $('.ta').focus();

  if( !$(".ta").val() ) { return false; }
  tav = $(".ta").val();
  console.log(tav);
  $(".ta").val("");
  if ( $(".ta").attr("id") === 'no')
   alert("المرجو إختيار المرسل إليه");
  else
  {
   setTimeout(function() {
    

    const url1 = "https://araby.co/ajax.php?c=s&rm="+$("#rm").val()+"&fr="+$("#myid").val()+"&to=fcwxn"+$(".ta").attr("id").replace(/.+q9j1w6/,"")+"&txt="+tav ;
    console.log("AXIOS");
    axios(
      {
          url:url1 ,
          method:'GET',
          headers:{'Content-Type':'text/html', 'Content-Encoding': 'identity',} 
      }
  ).then(function(data){
    if (data === 'done') {
   
      $(".conv#"+$(".ta").attr("id")).append('<div style="text-align:right";><p class="me">'+tav+'</p></div>');
      $(".conv#"+$(".ta").attr("id")).scrollTop($(".conv#"+$(".ta").attr("id")).height());
     }
     else if (data === 'out')
     {
      $(".users #"+$(".ta").attr("id")).remove();
      alert("المستخدم غادر الغرفة");
     }
  }).catch(function(err){
    alert("لم يتم إرسال الرسالة");
  });}, 1000);
  }
 };
 
