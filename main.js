function create()
{
  var data = document.getElementById("data").value;
  var message = document.getElementById("for");
  if (data == "") {
        message.innerHTML = "<div class='alert alert-danger mx-2' role='alert'><i class='bi bi-exclamation-triangle-fill'></i> Please fill the field</div>";
  }
  else if (data !== "") {
        message.innerHTML = "<center><div class='card card-body'><img src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + encodeURIComponent(data) + "'/></div></center>";
  }
}
