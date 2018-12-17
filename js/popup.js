var link = document.querySelector(".btn");

var popup = document.querySelector(".modal-message");

var close = popup.querySelector(".popup-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");


        
  if (storage) {
		  login.value = storage;
		  email.focus();
  }   else {
		  login.focus();
  }
    });

    close.addEventListener("click", function (evt) {
	evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!name.value || !email.value) {
	evt.preventDefault();
	console.log("Нужно ввести ваше имя и электронную почту");
	    popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
	if (isStorageSupport) {
	  localStorage.setItem("name", name.value);
		}
		}
});

    window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
  }
});