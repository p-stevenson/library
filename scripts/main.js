const LIBRARY = [];

function Book() {
	this.title = document.getElementById('inputTitle').value;
	this.author = `written by ${document.getElementById('inputAuthor').value}`;
	this.pages = `Pages: ${document.getElementById('inputPages').value}`;
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
	const TEMP_ID = ['title', 'author', 'numOfPages'];

	for (let i in KEY) {
		const TEMP_ELEMENT = document.createElement('p');
		TEMP_ELEMENT.setAttribute('id', TEMP_ID[i]);
		TEMP_ELEMENT.textContent = `${KEY[i]}`;
		GET_CARD.appendChild(TEMP_ELEMENT);
	}
};

Book.prototype.setReadStatus = function () {
	const GET_CARD = document.getElementById(`${this.uuid}`);
	const TEMP_LABEL = document.createElement('label');
	const TEMP_ELEMENT = document.createElement('input');

	TEMP_LABEL.setAttribute('for', 'readStatus');
	TEMP_LABEL.setAttribute('name', 'readStatus');
	TEMP_LABEL.textContent = 'Read Status:';

	TEMP_ELEMENT.setAttribute('type', 'checkbox');
	TEMP_ELEMENT.setAttribute('id', 'readStatus');

	(this.read === true) ? TEMP_ELEMENT.setAttribute('checked', 'checked') :
		TEMP_ELEMENT.removeAttribute('checked');

	TEMP_ELEMENT.addEventListener('click', () => {
		(this.read === true) ? this.read = false : this.read = true
	})
	GET_CARD.appendChild(TEMP_LABEL);
	GET_CARD.appendChild(TEMP_ELEMENT);
}

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
		TEMP_BOOK.setReadStatus();
		clearFormFields();
	});
})();

//----CLEAR FORM FIELDS ----
function clearFormFields() {
	document.getElementById('newBookForm').reset();
}