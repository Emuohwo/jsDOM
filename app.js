/*
var bannerPage = document.querySelector('#page-banner a');

bannerPage.textContent += ' Account';
bannerPage.style.textDecoration = 'none';

bannerPage.addEventListener('click', e => {
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was denied access');
    console.log(e);
});
*/

const  list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', e => {
    if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
});

const addForm = document.querySelector('#add-book');

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = document.querySelector('.add-text').value;
    
    // create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    // add textContent
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    
    // add class
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //appendChild
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    
    
    //console.log(value);
});

// hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(){
    if(hideBox.checked){
        list.style.display = 'none';
    } else{
        list.style.display = 'initial';
    }
});

// filter
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLocaleLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
})


//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
})




/*
//This exercise worked. The above is  prefered
var delBtns = document.querySelectorAll('#book-list .delete');

Array.from(delBtns).forEach(function(eachBtn){
    eachBtn.addEventListener('click', e =>{
        const li = e.target.parentElement;
        
        li.parentNode.removeChild(li);
    });
});
*/
// The code above is a repeat of an exercise below

//var titles = document.getElementsByClassName('title');

/*
// Test if it is an rray - it's not
//console.log(Array.isArray(titles));

//Convert the html Collection to an array
//console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(item) {
    console.log(item);
}); 


// querySelector returns the first element while querySelectorAll returns all in an array
var wrap = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wrap);
var books = document.querySelector('#book-list li');
//console.log(books);

 //   books = document.querySelectorAll('#book-list li');
Array.from(books).forEach(function(book) {
    //console.log(book.textContent);
    book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');

// console.log(bookList.innerHTML);
// bookList.innerHTML = '<h1> Books and more books';
bookList.innerHTML += '<p>This is how you can add text to the html</p>';



const banner = document.querySelector('#page-banner');
console.log(banner.parentNode);
console.log(banner.childNodes);

console.log('#page-banner has the ndeType of: ', banner.nodeType);
console.log('#page-banner is a node name:', banner.nodeName);
console.log('#page-banner has node child', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);



const bookList = document.querySelector('#book-list');

console.log('#book-list parentNode is: ', bookList.parentNode);
console.log('#book-list parentElement is: ', bookList.parentElement);
console.log('#book-list parentElement.parentElement is: ', bookList.parentElement.parentElement);
console.log(bookList.parentElement.parentElement.parentElement);

console.log(bookList.childNodes);




const bookList = document.querySelector('#book-list');

console.log('#book-list next Sibling is: ', bookList.nextSibling);
console.log('#book-list next element Sibling is: ', bookList.nextElementSibling);


console.log('#book-list previous Sibling is: ', bookList.previousSibling);
console.log('#book-list previous element Sibling is: ', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> This is too cool with javaScipt';

*/

/*
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', function(e) {
        var li = e.target.parentElement;
        
        li.parentNode.removeChild(li);
    });
    
});

*/