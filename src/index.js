/* constants */
const bookList = document.querySelector("#book-list");
const newBookBtn = document.querySelector("#toggleForm");
const bookForm = document.querySelector("#book-form");

/**
 * 
 * Renders a book card to DOM given a book object
 */

// newBookBtn.addEventListener("click", (e) => alert("hello"));



function renderBook(book) {
	const li = document.createElement("li");
	li.className = "card";
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");

	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;
	deleteBtn.textContent = "Delete";
	//✅ 1. on delete button click, remove card from DOM

	//✅ 1a. attach eventListener
	//✅ 1b. include callback function to remove card instance
	deleteBtn.addEventListener("click", (e) => {
		//nodeToRemove.remove()
		li.remove()
	})

	//✅ 1c. define cb outside of renderBook

	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(deleteBtn);
}

//✅ 2. add a submit event listener to the form


//✅ 2a. save the form node as a const
//✅ 2b. write a testing function to fill in the values of the form



//✅ 2c. invoke the fill in function
//✅ 2d. create the event listener 
bookForm.addEventListener("submit", (e) => {
	
	e.preventDefault(); //to stop page from refreshing (redirecting)

	//✅ 2e. create the new book and add to DOM
	//create new book obj that contains info from form
	//AND aligns with data sturcture from book found in data.js
	// console.log(e.target.title.value);
	// console.log(e.target.author.value);
	// console.log(e.target.price.value);
	// console.log(e.target.imageUrl.value);

	let newBook = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		imageUrl: e.target.imageUrl.value,
		inventory: e.target.inventory.value
	}

	//reuse renderBook logic to put card with newBook infromation in DOM
	renderBook(newBook);

	//This clears the values that were typed in after the book is rendered
	// e.target.title.value = ""
	// e.target.author.value = ''
	// e.target.price.value = ''
	// e.target.imageUrl.value = ''
	// e.target.inventory.value = ''

})



//✅  3. recap - show the form when you click on the "add new book" button
//✅ 3a. save the button in a variable
//✅ 3b. add the event listener
	//✅ 3c. hide/show the form
	//YOU DO: add className collapsed to bookForm
	//✅ 3d. update the button text

newBookBtn.addEventListener("click", (e) =>{
	//if bookForm has class "collapsed", take it away
	if(bookForm.classList.contains("collapsed")){
		bookForm.classList.remove("collapsed");
		newBookBtn.textContent = "Close New Book Form";
	}else {
		//if bookForm does not have class "collapsed", add it	
		bookForm.classList.add("collapsed");
		newBookBtn.textContent = "New Book";
	}

	//bookForm.classList.toggle("collapsed");
})




/*
*
* 
OLD BUISINESS
*
*
*/

/* helper function to format the price of a book */
function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

/* adds name of bookstore to header */
function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

/* adds details of bookstore to footer */
function renderFooter(bookStore) {
	document.querySelector("#store").textContent = bookStore.location;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#address").textContent = bookStore.address;
}

/* invoke functions on DOM content loaded */
renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(book => renderBook(book));
