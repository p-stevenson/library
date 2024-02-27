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