const LIBRARY = [];

function Book() {
	this.title = document.getElementById('bookTitle').value;
	this.author = `written by ${document.getElementById('author').value}`;
	this.pages = `Pages: ${document.getElementById('numOfPages').value}`;
	this.read = document.getElementById('hasRead').checked;
	this.uuid = crypto.randomUUID();
}

Book.prototype.createCard = function () {
	const CONTAINER = document.getElementById('books-container');
	const CARD = document.createElement('div');

	CARD.setAttribute('id', this.uuid);
	CARD.classList.add('card');
	CONTAINER.appendChild(CARD);
};

Book.prototype.populateCardInfo = function () {
	const GET_CARD = document.getElementById(`${this.uuid}`);
	const KEY = [this.title, this.author, this.pages];
	const TEMP_ID = ['title', 'author', 'numOfpages'];

	for (let i in KEY) {
		const TEMP_ELEMENT = document.createElement('p');
		TEMP_ELEMENT.setAttribute('id', TEMP_ID[i]);
		TEMP_ELEMENT.textContent = `${KEY[i]}`;
		GET_CARD.appendChild(TEMP_ELEMENT);
	}
};

Book.prototype.addBook = function () {
	LIBRARY.push(this);
	document.getElementById('form-container').style.display = "none";
};

//----OPEN FORM----
(function () {
	const OPEN_FORM_BUTTON = document.getElementById('openFormButton');
	OPEN_FORM_BUTTON.addEventListener('click', () => {
		document.getElementById('form-container').style.display = 'block';
	});
}());

//----CLOSE FORM----
(function () {
	const CLOSE_FORM_BUTTON = document.getElementById('closeFormButton');

	CLOSE_FORM_BUTTON.addEventListener('click', () => {
		document.getElementById('form-container').style.display = 'none';
		clearFormFields();
	});
}());

//----SUBMIT FORM----
(function () {
	const NEW_FORM_BUTTON = document.getElementById('newBookForm');
	const SUBMIT_FORM_BUTTON = document.getElementById('submitFormButton');

	NEW_FORM_BUTTON.addEventListener('submit', (e) => {
		e.preventDefault();
	});

	SUBMIT_FORM_BUTTON.addEventListener('click', () => {
		const TEMP_BOOK = new Book();
		TEMP_BOOK.addBook();
		TEMP_BOOK.createCard();
		TEMP_BOOK.populateCardInfo();
		clearFormFields();
	});
})();

//----CLEAR FORM FIELDS ----
function clearFormFields() {
	document.getElementById('newBookForm').reset();
}