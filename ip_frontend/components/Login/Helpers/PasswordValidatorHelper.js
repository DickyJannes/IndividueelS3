export function passwordValidator(password, confirm) {
	if (!password) return "Password can't be empty.";
	if (password.length < 5) return "Password must be at least 5 characters long.";
	if(confirm){
		if(password != confirm) return "Passwords must be equal.";
	}
	return "";
}