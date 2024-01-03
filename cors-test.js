var xhr = new XMLHttpRequest();
xhr.open('GET','https://temu.com',true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 400) {
    console.log(xhr.responseText);
  } else {
    console.error('Erreur de requête');
  }
};

xhr.onerror = function() {
  console.error('Erreur réseau')
};

xhr.send();
