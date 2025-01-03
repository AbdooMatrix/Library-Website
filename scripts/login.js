const form = document.getElementById("login");

const checkUser = () => {
	let user = null;
	if (
		window.localStorage.getItem("user") ||
		window.sessionStorage.getItem("user")
	) {
		window.location.href = "home.html";
	}
	return user;
};

checkUser();

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	const username = formData.get("username");
	const name = formData.get("username");
	const remember = formData.get("rememberPassword");
	let admin;

	try {
		admin = document.querySelector('input[id="admin"]:checked').value;
	} catch (e) {
		console.error(e);
	}

	let previlege = "user";
	if (admin == "") {
		previlege = "admin";
	}

	const user = { username, name, previlege };

	remember == ""
		? window.localStorage.setItem("user", JSON.stringify(user))
		: window.sessionStorage.setItem("user", JSON.stringify(user));
	previlege == "admin"
		? (window.location.href = "./admin.html")
		: (window.location.href = "./home.html");
});

window.onload = () => {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = null;
	}
};
