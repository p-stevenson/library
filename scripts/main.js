const myLibrary = [];

function Book(title, author, pages, read = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.hasRead = function () {
	return this.read ? 'has read' : 'has not read';
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 271)
