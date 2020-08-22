function display(n){
    var a = document.getElementById('output').value;
    if(a === "0"){
        document.getElementById("output").value = n; 
    }
    else{
        document.getElementById("output").value += n;
    }
}
function result(){
    let x = document.getElementById("output").value;
    let y = eval(x);
    document.getElementById("output").value = y;
}
function delete_entity(){
    var a = document.getElementById('output').value.slice(0,-1);
    if(a === ""){
        document.getElementById('output').value = "0";
    }
    else{
        document.getElementById('output').value = a;
    } 
}
function clearAll(){
    document.getElementById("output").value = "0";
}