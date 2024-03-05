const LIBRARY = [];

function Book() {
	this.title = document.getElementById('inputTitle').value;
	this.author = `by ${document.getElementById('inputAuthor').value}`;
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
	const LABEL = document.createElement('label');
	const INPUT_ELEMENT = document.createElement('input');

	LABEL.setAttribute('for', 'readStatus');
	LABEL.setAttribute('name', 'readStatus');
	LABEL.textContent = 'Read:';

	INPUT_ELEMENT.setAttribute('type', 'checkbox');
	INPUT_ELEMENT.setAttribute('id', 'readStatus');

	(this.read === true) ? INPUT_ELEMENT.setAttribute('checked', 'checked') :
		INPUT_ELEMENT.removeAttribute('checked');

	INPUT_ELEMENT.addEventListener('click', () => {
		(this.read === true) ? this.read = false : this.read = true
	})
	GET_CARD.appendChild(LABEL);
	GET_CARD.appendChild(INPUT_ELEMENT);
}

Book.prototype.delete = function () {
	const CONTAINER = document.getElementById('books-container');
	const GET_CARD = document.getElementById(`${this.uuid}`);
	const DELETE_BUTTON = document.createElement('button');
	DELETE_BUTTON.classList.add('delete');
	DELETE_BUTTON.textContent = 'DELETE';
	GET_CARD.appendChild(DELETE_BUTTON);

	DELETE_BUTTON.addEventListener("click", () => {
		for (let book in LIBRARY) {
			const INDEX_OF_CARD = LIBRARY.findIndex(book => book.uuid === this.uuid)
			LIBRARY.splice(INDEX_OF_CARD, 1);
			CONTAINER.removeChild(GET_CARD)
		}
	})
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
		TEMP_BOOK.delete();
		clearFormFields();
	});
})();

//----CLEAR FORM FIELDS ----
function clearFormFields() {
	document.getElementById('newBookForm').reset();
}