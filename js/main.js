function validateForm () {

  var name = document.forms["message-form"]["full-name"].value;

  var date = document.forms["message-form"]["birth-date"].value;

  var gender = document.forms["message-form"]["gender"].value;

  var message = document.forms["message-form"]["message"].value;

  

  if (name == "" ) {

    alert("ERROR, maaf nama harus di isi terlebih dahulu");

  }

  

  else if (date == "") {

    alert("ERROR, maaf tanggal harus di isi terlebih dahulu");

  }

  

  else if (message == "") {

    alert("ERROR, maaf pesan harus di isi pesan terlebih dahulu");

  }

    

  else if (gender == "") {

    alert("ERROR, maaf Jenis kelamin harus di isi terlebih dahulu");

  

  return false;

  }

  

  document.getElementById("output-name").innerText = name;

  document.getElementById("output-birtdate").innerText = date;

  document.getElementById("output-gender").innerText = gender;

  document.getElementById("output-message").innerText = message;

    return false;

  }
