var table = document.getElementById("table1");
console.log(table1);
var rowCount = `${("#table1 tr")}`.length;
var colCount = `${("#table1 tr th")}`.length;



function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            // console.log(response);



            var output = "";
            var output1 = "";
            var output2 = "";
            var output3 = "";
            var output4 = "";
            console.log(response.length);
            // for (var i = 0; i < response.length; i++) {
            // output += response[i].userId + "<br>";

            // }
            for (var i = 0; i < response.length; i++) {
                output1 += response[i].id + "<br>";
            }
            for (var i = 0; i < response.length; i++) {
                output2 += response[i].title + "<br>";
            }
            for (var i = 0; i < response.length; i++) {

                output3 += response[i].completed + "<br>";
                //  console.log(response[i].completed);


            }
            for (var i = 0; i < response.length; i++) {

                output4 = response[i].completed;
                if (JSON.stringify(response[i].completed) === JSON.stringify(false)) {
                    document.getElementById("demo3").innerHTML += "<input type=checkbox>" + "<br>";
                } else {
                    document.getElementById("demo3").innerHTML += "<input type=checkbox disabled=ture >" + "<br>";
                }
            }


        }


        document.getElementById("demo").innerHTML = output1;
        document.getElementById("demo1").innerHTML = output2;
        document.getElementById("demo2").innerHTML = output3;
        // document.getElementById("demo3").innerHTML = output3;

    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


document.getElementById('demo3').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length == 5) {
        alert("completed 5 tasks");
    } else {
        console.log("nothing");
    }

}

document.getElementById('demo3').onclick = function() {
    var promise = new Promise(function(resolve, reject) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        if (checkboxes.length == 5) {

            resolve("completed 5 tasks");
        } else {
            reject("error");
        }

    })
    promise
        .then(function(s) {

            setTimeout(function() {
                alert(s);

            }), 3000;
        })
        .catch(function(e) {
            console.log(e);
        })
}

// console.log(colCount);
// console.log(rowCount);