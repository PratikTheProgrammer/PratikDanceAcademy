function passvalid(){
    // Password validation ckeck

    function password(){
        let d = document.getElementById('pass').value;

        if(d.length<8){
            document.querySelector("#errpass").insertAdjacentHTML("afterbegin","<p>Password should have 8 or more charecters!</p>");
            return false;
        }
        else{
            return true;
        }
    }
    password();
}