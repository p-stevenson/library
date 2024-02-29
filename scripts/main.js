const myLibrary = [];

function Book(read = false) {
	this.title = document.getElementById('bookTitle').value;
	this.author = document.getElementById('author').value;
	this.pages = document.getElementById('numOfPages').value;
	this.read = read;
	this.uuid = crypto.randomUUID();
}

Book.prototype.add = function () {
	myLibrary.push(this);
	document.getElementById('form-container').style.display = "none"
}

Book.prototype.hasRead = () => {
	return this.read ? 'read' : 'not read';
};

(function () {
	const newBookForm = document.getElementById('newBookForm');
	const buttons = document.querySelectorAll('.btn');
	const openFormButton = document.getElementById('openFormButton');
	const closeFormButton = document.getElementById('closeFormButton');

	newBookForm.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	buttons.forEach((button) => {
		button.addEventListener('click', checkButton)
	});

	function checkButton() {
		if (this === openFormButton) {
			document.getElementById('form-container').style.display = "block"
		} else if (this === closeFormButton) {
			document.getElementById('form-container').style.display = "none"
		} else {
			const tempBook = new Book();
			tempBook.add();
		}
	}
})();