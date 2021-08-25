function buat_login() {
   let elem = document.getElementById("X");
   elem.parentElement.removeChild(elem);

   let element = document.getElementsByTagName("div")[0];

   let p = document.createElement("p");
   p.className = "tulisan_login";
   p.innerHTML = "silahkan login";
   element.appendChild(p);

   let form = document.createElement("form");
   element.appendChild(form);

   let label_nama = document.createElement("label");
   label_nama.innerHTML = "Nama User";
   form.appendChild(label_nama);
   let input_nama = document.createElement("input");
   input_nama.type = "text";
   input_nama.name = "namauser";
   input_nama.placeholder = "Nama User..";
   input_nama.className = "form_login";
   form.appendChild(input_nama);

   let label_noHP = document.createElement("label");
   label_noHP.innerHTML = "Nomor Handphone";
   form.appendChild(label_noHP);
   let input_noHP = document.createElement("input");
   input_noHP.type = "tel";
   input_noHP.name = "no_handphone"
   input_noHP.placeholder = "Nomor Handphone.";
   input_noHP.className = "form_login";
   form.appendChild(input_noHP);

   let label_username = document.createElement("label");
   label_username.innerHTML = "Username";
   form.appendChild(label_username);
   let input_username = document.createElement("input");
   input_username.type = "text";
   input_username.name = "username";
   input_username.placeholder = "Username atau email ..";
   input_username.className = "form_login";
   form.appendChild(input_username);

   let label_password = document.createElement("label");
   label_password.innerHTML = "Password"
   form.appendChild(label_password);
   let input_password = document.createElement("input");;
   input_password.type = "password";
   input_password.name = "password";
   input_password.placeholder = "Password ..";
   input_password.className = "form_login";
   form.appendChild(input_password);

   let tombol_login = document.createElement("input");
   tombol_login.type = "submit";
   tombol_login.value = "DAFTAR SEKARANG";
   tombol_login.className = "tombol_login";
   form.appendChild(tombol_login);

}