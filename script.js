let test = ""
var payload = []
    
    function onSubmit() {
        var Firstname = document.getElementById("fname").value;
        var Middlename = document.getElementById("mname").value;
        var Lastname = document.getElementById("lname").value;
        var checkboxes = document.getElementsByClassName("checkbox");
        var index = 1
        text = ""
        payload.length = 1

        for (const checkbox of checkboxes) {                 
            if(payload.length == 1){
                document.getElementById("sports").innerHTML = "No Selected sports"
            }
            if (checkbox.checked == true) {
                payload.push(checkbox.value);

            }
        }
        console.log("tese1");
        payload.forEach(transformData);
        document.getElementById("fullname").innerHTML = Firstname + " " + Middlename + " " +  Lastname

        }

        function transformData(item, index) {
            text += index + ": " + item + "<br>";
            document.getElementById("sports").innerHTML = text

    }