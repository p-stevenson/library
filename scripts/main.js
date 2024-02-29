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

//----OPEN FORM----
(function () {
	const openFormButton = document.getElementById('openFormButton');

	openFormButton.addEventListener('click', () => {
		document.getElementById('form-container').style.display = 'block';
	});
}());

//----CLOSE FORM----
(function () {
	const closeFormButton = document.getElementById('closeFormButton');

	closeFormButton.addEventListener('click', () => {
		document.getElementById('form-container').style.display = 'none';
	});
}());

//----SUBMIT FORM----
(function () {
	const newBookForm = document.getElementById('newBookForm');
	const submitFormButton = document.getElementById('submitFormButton');

	newBookForm.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	submitFormButton.addEventListener('click', () => {
		new Book().add();
	});
})();