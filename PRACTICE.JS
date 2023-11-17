
function sub(){
    var a=document.getElementById("in1").value;
    var b=document.getElementById("in2").value;
    var c=document.getElementById("in3").value;
    var g=document.querySelector('input[name="gender"]:checked');


    
    if (a === "" || b === "" || c === "" || g.value === "") {
        alert("Complete The Details");
    }

    document.getElementById("display").innerHTML+=
    
    `
    <div class="mt-3 bg-light row border">
    <div class="mb-3 col-6">
    <span>Name: ${a}</span>

    </div>

    <div class="col-6">
    <span>Gender: ${g.value} </span>
    </div>

    <div class="col-6">
    <span>Email: ${c}</span>

    </div>

    <div class="mb-3 col-6">
    <span>Phone: ${b}</span>

    </div>

    <div class="col-12">
    <button  onclick="del(this)" class="w-100 bg-danger justify-content-center d-flex border-0">Delete</button>

    </div>

    </div>
    `
    

}

function del(th){
    th.parentNode.parentNode.remove();
}


