function validate(){
    if(document.getElementById('fullname').value=='')
    {
        document.getElementById('error').innerHTML='please enter your name'
        return false;
        
    }
    else if(document.getElementById('email').value=='')
    {
        document.getElementById('error').innerHTML='please enter your email'
        return false;
      
    }
    
    else if(document.getElementById('gender').value=='')
    {
        document.getElementById('error').innerHTML='This field is manditory'
      return false;
}
else{
    return true;
}
}

function validate1(){

        if(document.getElementById('fullname').value=='')
        {
            document.getElementById('error').innerHTML='please enter your name'
            
            
        }
        else if(document.getElementById('email').value=='')
        {
            document.getElementById('error').innerHTML='please enter your email'
           
          
        }
        else if(document.getElementById('ad').value=='')
        {
            document.getElementById('error').innerHTML='please enter your address'
           
          
        }
        
        else if(document.getElementById('gender').value=='')
        {
            document.getElementById('error').innerHTML='This field is manditory'
        
        }
    else{
       document.getElementById('rgform').submit();
    
    }
}

