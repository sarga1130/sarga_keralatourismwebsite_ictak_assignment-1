function validate(){
    var uname="sargachippu@gmail.com";
    var password="Sarga123@";
    var email=document.getElementById("email").value;
    var passwd=document.getElementById("password").value;
    var status=1;

    if((email==uname) && (passwd==password)){
       status=1;
       }
    else{
        document.getElementById("err").style.color="red";
        err.innerHTML="Incorrect username or password";
        status=0;
        }

    if(status==0){
       return false;
       }
    else{
        return true;
       }

}   
