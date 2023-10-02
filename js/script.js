//function testss()
    //{
    //document.getElementById('para').style.backgroundColor='red';
//document.getElementById('para').style.fontSize='55px';}
 //function picchange(){
    //document.getElementById('image').src='images/bg.jpg'
//}
//function picchang(){
    //document.getElementById('image').src='images/ic.jpg'
//}
//function content(){
    //var content=document.getElementById('div2').innerHTML
    //document.getElementById('div2').innerHTML= document.getElementById('div1').innerHTML
    //document.getElementById('div1').innerHTML =content}
    //function swap()
    //{
       // var content=document.getElementById('img2').src
        //document.getElementById('img2').src=document.getElementById('img1').src
        
        //document.getElementById('img1').src =content}
    
//function hidden_show(){
    //document.getElementById('imk').style.display='none';
    
//}
//function hidden_show2(){
    //document.getElementById('imk').style.display='block';
    
//}
//function imghide(){
    //if( document.getElementById('buton').innerHTML=='hide') {
       // document.getElementById('imgg').style.display='none';
        //document.getElementById('buton').innerHTML='show';   
    //}
    //else{
    //document.getElementById('imgg').style.display='block';
    //document.getElementById('buton').innerHTML='hide';
//}}
function validate()
{
   if(document.getElementById('fullname').value=='')
    {
        document.getElementById('error').innerHTML='please enter your name'
       
    }
    else if(document.getElementById('email').value=='')
    {
        document.getElementById('error').innerHTML='please enter your email'
       
    }
    
    /*else if(document.getElementById('gender').value=='')
    {
       document.getElementById('error').innerHTML='This field is manditory'
        return false ;
   }*/
   else{
        document.getElementById('rgform').submit();
   }
}
   //function testss(){

  
//const cars=["bnw","volvo","sab"];
//for(let i=0; i<cars.length; i++){
   // console.log(cars[i]);}
//}
//}
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1) {
        document.getElementById("demo").innerHTML ="request send"
        ;
      }

      else if(this.readyState == 2) {
        document.getElementById("demo").innerHTML ="request acknowledge";}


        else if(this.readyState == 3) {
            document.getElementById("demo").innerHTML ="<img src='images/load.gif>";
            

    }
    else if(this.readyState == 4) {
        document.getElementById("demo").innerHTML =
        this.responseText;

    }
    
        else{
            document.getElementById("demo").innerHTML ="something went wrong";
            console.log("ok")
        }

    }
    xhttp.open("GET", "type.txt");
    xhttp.send();
  } 