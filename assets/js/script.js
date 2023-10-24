const books = [
    {
        ref: '0395873460',
        img: 'https://m.media-amazon.com/images/I/71hLpc+rH2L._SL1500_.jpg',
        title: 'The Hobbit',
        version: 'Hardcover - September 19, 1997 ',
        author: 'J.R.R. Tolkien',
        rating: '4.7/5',
        price: '28.70 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '054792822X',
        img: 'https://m.media-amazon.com/images/I/51gFkMOpo+L.jpg',
        title: 'The Lord of the Ring',
        version: 'Version reliée - Illustré 14 Aout, 2012',
        author: 'J.R.R. Tolkien',
        rating: '4.7/5',
        price: '11.27 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '1338635174',
        img: 'https://m.media-amazon.com/images/I/61kMbMCmXIL._SL1213_.jpg',
        title: 'The Ballad of Songbirds and Snakes',
        version: 'First Edition (May 19, 2020)',
        author: 'Suzanne Collins',
        rating: '4.6/5',
        price: '15.79 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '0545586178',
        img: 'https://m.media-amazon.com/images/I/61fxYRmx1pL._SL1200_.jpg',
        title: 'Catching Fire',
        version: 'Reprint edition - June 4, 2013',
        author: 'Suzanne Collins',
        rating: '4.7/5',
        price: '12.91 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: 'B003XF1XOQ',
        img: 'https://m.media-amazon.com/images/I/71Cpfb-DMIL._SL1500_.jpg',
        title: 'Mockingjay (Hunger Games Trilogy, Book 3)',
        version: '1st edition - August 24, 2010',
        author: 'Suzanne Collins',
        rating: '4.6/5',
        price: '11.48 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {

        ref: '2253014990',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/NR/f6/04/a9/11076854/1507-1/tsp20191207070747/Les-Contemplations-Livres-I-a-IV-Bac-2020.jpg',
        title: 'Les Contemplations',
        version: 'Poche - November 28, 2002',
        author: 'Victor Hugo',
        rating: '4.5/5',
        price: '5.50 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '9782211304',
        img: 'https://media.e.leclerc/9782218962844_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=450&fit=fit',
        title: 'Les Misérables',
        version: 'Broché - 17 mars, 2021',
        author: 'Victor Hugo',
        rating: '4.5/5',
        price: '15.00 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '0316015849',
        img: 'https://m.media-amazon.com/images/I/615ZIxEDozL._SL1500_.jpg',
        title: 'Twilight (The Twilight Saga, Book 1)',
        version: ' Paperback - September 6, 2006 ',
        author: 'Stephenie Meyer',
        rating: '4.7/5',
        price: '10.27 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '0141324902',
        img: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._SL1500_.jpg',
        title: 'Diary of a Wimpy Kid',
        version: 'Paperback - International Edition, January 1, 2008 ',
        author: 'Jeff Kinney',
        rating: '4.6/5',
        price: '9.94 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '1419741918',
        img: 'https://m.media-amazon.com/images/I/71KZ8fJU1ML._SL1200_.jpg',
        title: 'Cabin Fever (Diary of a Wimpy Kid #6)',
        version: 'Hardcover - Illustrated, November 15, 2011',
        author: 'Jeff Kinney',
        rating: '4.7/5',
        price: '9.21 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '9780007448036',
        img: 'https://m.media-amazon.com/images/I/81OOn8oKo2L._SL1500_.jpg',
        title: 'A Game of Thrones Reissue - A Song of Ice and Fire, Book 1',
        version: 'Paperback - September 1, 2011',
        author: 'George R.R. Martin',
        rating: '4.7/5',
        price: '23.99 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },
    {
        ref: '9780553582017',
        img: 'https://m.media-amazon.com/images/I/81e1rZDeBBL._SL1500_.jpg',
        title: 'A Dance with Dragons (A Song of Ice and Fire)',
        version: 'Mass Market Paperback - October 29, 2013',
        author: 'George R.R. Martin',
        rating: '4.6/5',
        price: '7.93 euros',
        add: 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>',
    },

];


const itemList = document.getElementById('item-list');

for (let index = 0; index < books.length; index++) {
    let book = document.createElement('div');
    book.className += 'book';
    let bookImg = document.createElement('img');
    bookImg.src = books[index].img;
    bookImg.className += 'book-img';
    let bookInner = document.createElement('div');
    bookInner.className += 'inner-book';
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = books[index].title;
    let bookVersion = document.createElement('p');
    bookVersion.textContent = books[index].version;
    let bookPrice = document.createElement('p');
    bookPrice.textContent = books[index].price;
    let bookAuthor = document.createElement('small');
    bookAuthor.innerHTML = '<b>' + books[index].author +'</b><br>';
    bookRating = document.createElement('p');
    bookRating.innerHTML = `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i><br><br>`;
    let bookAddCart = document.createElement('a');
    bookAddCart.innerHTML = 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>';

    book.appendChild(bookImg);
    book.appendChild(bookInner);
    book.appendChild(bookTitle);
    book.appendChild(bookVersion);
    book.appendChild(bookAuthor);
    book.appendChild(bookRating);
    book.appendChild(bookPrice);
    book.appendChild(bookAddCart);

    itemList.appendChild(book);



}