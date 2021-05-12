function incrementNumber(){

  let counter = document.getElementById('counterText');
  let value = counter.innerHTML;

  value++;

  document.getElementById('counterText').innerHTML = value;
}

function decrementNumber(){

  let counter = document.getElementById('counterText');
  let value = counter.innerHTML;

  value--;

  document.getElementById('counterText').innerHTML = value;
}

function restartNumber(){

  let counter = document.getElementById('counterText').innerHTML = "0";
}

function insertNumber(){

  let numberInsert = prompt("Inserisci un numero da cui vuoi far partire il counter:", "0");
  if (numberInsert == null || numberInsert == ""){
    alert("Non hai inserito un valore corretto!");
  }
  else {
    if (isNaN(numberInsert)){
      alert("Non hai inserito un valore corretto!");
    }
    else{
      document.getElementById('counterText').innerHTML = numberInsert;
    }
  }

}
