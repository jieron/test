
  //---------- Send Message ----------//
  function getRes(){
    console.log('get res') ;

    fetch('https://araby.co/ajax.php?c=s&rm=sy&fr=AWEq9j1w6xor86&to=xor86&txt=asas')
    .then(res =>
      {
        res.text().then(function (text) {
          console.log('fetch done') ;
          console.log(text);
          return text ;
        });
      });
  }
  function send(){
    console.log('send') ;

    const res = getRes() ;
    if(res==='done'){
        resDone();
    }
    else if (res ==='out'){
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
 $("#snd").click(function() {
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
 });
 
 $(".ta").keypress(function(e) { if (e.which === 13) { e.preventDefault(); $("#snd").click(); } });
  
