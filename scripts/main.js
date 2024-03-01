const myLibrary = [];

function Book() {
	this.title = document.getElementById('bookTitle').value;
	this.author = document.getElementById('author').value;
	this.pages = document.getElementById('numOfPages').value;
	this.read = document.getElementById('hasRead').checked;
	this.uuid = crypto.randomUUID();
}

Book.prototype.add = function () {
	myLibrary.push(this);
	document.getElementById('form-container').style.display = "none";
};

Book.prototype.create = function () {
	const container = document.getElementById('books-container');
	const card = document.createElement('div');
	card.setAttribute('id', this.uuid);
	card.classList.add('card');
	container.appendChild(card);
	const title = document.createElement('h2');
	title.textContent = `${this.title}`;
	const author = document.createElement('h4');
	author.textContent = `${this.author}`;
	const pages = document.createElement('h4');
	pages.textContent = `${this.pages}`;
	//TODO explore splitting create into create and populate methods
	//TODO try to implement create more programatically
	//TODO update card info styling
	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(pages)
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
		clearFormFields();
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
		const tempBook = new Book();
		tempBook.add();
		tempBook.create();
		clearFormFields();
	});
})();

//----CLEAR FORM FIELDS ----
function clearFormFields() {
	document.getElementById('newBookForm').reset();
}

//----DISPLAY BOOKS ----


