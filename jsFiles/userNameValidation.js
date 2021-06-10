function uservalid(){
    // User name validation check
    
    function uname() {
        let c = document.getElementById('uname').value.trim();

        if (c.length === 0) {
            document.querySelector("#errun").insertAdjacentHTML("afterbegin","<p>Please Enter your user name!!</p>");
            return false;
        }
        else if (c.length < 4) {
            document.querySelector("#errun").insertAdjacentHTML("afterbegin","<p>You can't have a user name with less than 4 charecters!</p>");
            return false;
        }
        else if(c.length>9){
            document.querySelector("#errun").insertAdjacentHTML("afterbegin","<p>You can't have a user name with greater than 9 charecters!</p>");
            return false;
        }
        else{
            return true;
        }
    }
    uname();
}