const myLibrary = [];

function Book(title = 'The Hobbit', author = 'J.R.R Tolkien', pages = 200, read = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.uuid = crypto.randomUUID();
}

Book.prototype.hasRead = () => {
	return this.read ? 'read' : 'not read';
};

(function () {
	const buttons = document.querySelectorAll('.btn');
	const openFormButton = document.getElementById('openFormButton');
	const closeFormButton = document.getElementById('closeFormButton');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			if (button === openFormButton) {
				document.getElementById('form-container').style.display = "block"
			} else if (button === closeFormButton) {
				document.getElementById('form-container').style.display = "none"
			}
		})
	})
})();