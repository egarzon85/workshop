const adminUser = "admin"
const adminPass = "12345"

document.getElementById("container-data").style.display = "none"

document.getElementById("submit").addEventListener("click", function () {
var userText= document.getElementById("user").value;
var passText= document.getElementById("pass").value;

if ( userText == adminUser && passText == adminPass) {
  document.getElementById("container-data").style.display = "block"
  document.getElementById("user").style.display = "none"
  document.getElementById("pass").style.display = "none"
  document.getElementById("submit").style.display = "none"
  fetch("http://localhost:3000/users").then(
  res=>{
    res.json().then(
      data=>{
        console.log(data);
        if(data.length > 0){
          var temp = "";
          data.forEach(element => {
            temp += "<tr>";
            temp += "<td>"+element.nombre+"</td>";
            temp += "<td>"+element.apellido+"</td>";
            temp += "<td>"+element.correo+"</td>";
          })
          document.getElementById("data").innerHTML = temp;
        }
      }
    )
  }
)
}else{
  alert("Login Failed")
}});


document.getElementById("submit2").addEventListener("click", function () {

var nombre = document.getElementById("name").value;
var apellido= document.getElementById("surname").value;
var correo= document.getElementById("email").value;


const URL = 'http://localhost:3000/users'
const data = {
  "nombre": nombre,
  "apellido": apellido,
  "correo": correo
};

fetch(URL, {
  method: "POST",
  body: data,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
});


