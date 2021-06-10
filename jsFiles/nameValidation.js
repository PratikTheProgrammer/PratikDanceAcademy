// This is our form validation js page
function namevalid() {
    // First name validation check

    function fname() {
        let a = document.getElementById('fname').value.trim();

        if (a.length === 0) {
            document.querySelector("#errfn").insertAdjacentHTML("afterbegin","<p>Please enter your first name properly!</p>");
            return false;
        }
        else if (a.length < 3) {
            document.querySelector("#errfn").insertAdjacentHTML("afterbegin","<p>you can't have a first name with less than 3 charecters!</p>");
            return false;
        }
        else if (a.length > 15) {
            document.querySelector("#errfn").insertAdjacentHTML("afterbegin","<p>you can't have a first name with grater than 15 charecters!</p>");
            return false;
        }
        else {
            return true;
        }
    }
    // Last validation check

    function lname() {
        let b = document.getElementById('lname').value.trim();

        if (b.length === 0) {
            document.querySelector("#errln").insertAdjacentHTML("afterbegin","<p>Please enter your last name properly!</p>");
            return false;
        }
        else if (b.length < 3) {
            document.querySelector("#errln").insertAdjacentHTML("afterbegin","<p>you can't have a last name with less than 3 charecters!</p>");
            return false;
        }
        else if (b.length > 10) {
            document.querySelector("#errln").insertAdjacentHTML("afterbegin","<p>you can't have a last name with grater than 10 charecters!</p>");
            return false;
        }
        else {
            return true;
        }
    }
    
    fname();
    lname();
}
