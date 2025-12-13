
    function calculate(){
        var a = document.getElementById("num1").value;
        var b = document.getElementById("num2").value;

        if(isNaN(a) || isNaN(b) || a === "" || b === ""){
            document.getElementById("message").innerHTML = "Invalid number";
            document.getElementById("message").className = "error";
        }
        else{
            var sum = Number(a) + Number(b);
            document.getElementById("message").innerHTML = "Result = " + sum;
            document.getElementById("message").className = "";
        }
    }