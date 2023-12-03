//TABLEAU LIVRES
const books = [
    {
        ref: '0395873460',
        quantity: 15,
        img: 'https://m.media-amazon.com/images/I/71hLpc+rH2L._SL1500_.jpg',
        title: 'The Hobbit',
        version: 'Hardcover',
        author: 'J.R.R. Tolkien',
        rating: 4.5,
        price: 28.70,
    },
    {
        ref: '054792822X',
        quantity: 4,
        img: 'https://m.media-amazon.com/images/I/51gFkMOpo+L.jpg',
        title: 'The Lord of the Ring',
        version: 'Version reliée',
        author: 'J.R.R. Tolkien',
        rating: 3.5,
        price: 11.27,
    },
    {
        ref: '1338635174',
        quantity: 5,
        img: 'https://m.media-amazon.com/images/I/61kMbMCmXIL._SL1213_.jpg',
        title: 'The Ballad of Songbirds',
        version: 'First Edition',
        author: 'Suzanne Collins',
        rating: 4,
        price: 15.79,
    },
    {
        ref: '0545586178',
        quantity: 7,
        img: 'https://m.media-amazon.com/images/I/61fxYRmx1pL._SL1200_.jpg',
        title: 'Catching Fire',
        version: 'Reprint edition',
        author: 'Suzanne Collins',
        rating: 2.5,
        price: 12.91,
    },
    {
        ref: 'B003XF1XOQ',
        quantity: 2,
        img: 'https://m.media-amazon.com/images/I/71Cpfb-DMIL._SL1500_.jpg',
        title: 'Mockingjay',
        version: '1st edition',
        author: 'Suzanne Collins',
        rating: 4.5,
        price: 11.48,
    },
    {

        ref: '2253014990',
        quantity: 9,
        img: 'https://static.fnac-static.com/multimedia/Images/FR/NR/f6/04/a9/11076854/1507-1/tsp20191207070747/Les-Contemplations-Livres-I-a-IV-Bac-2020.jpg',
        title: 'Les Contemplations',
        version: 'Poche',
        author: 'Victor Hugo',
        rating: 4.5,
        price: 5.50,
    },
    {
        ref: '9782211304',
        quantity: 4,
        img: 'https://media.e.leclerc/9782218962844_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=450&fit=fit',
        title: 'Les Misérables',
        version: 'Broché',
        author: 'Victor Hugo',
        rating: 5,
        price: 15.00,
    },
    {
        ref: '0316015849',
        quantity: 12,
        img: 'https://m.media-amazon.com/images/I/615ZIxEDozL._SL1500_.jpg',
        title: 'Twilight',
        version: 'Paperback',
        author: 'Stephenie Meyer',
        rating: 2.5,
        price: 10.27,
    },
    {
        ref: '0141324902',
        quantity: 15,
        img: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._SL1500_.jpg',
        title: 'Diary of a Wimpy Kid',
        version: 'Paperback',
        author: 'Jeff Kinney',
        rating: '',
        price: 9.94,
    },
    {
        ref: '1419741918',
        quantity: 3,
        img: 'https://m.media-amazon.com/images/I/71KZ8fJU1ML._SL1200_.jpg',
        title: 'Cabin Fever',
        version: 'Hardcover',
        author: 'Jeff Kinney',
        rating: 4,
        price: 9.21,
    },
    {
        ref: '9780007448036',
        quantity: 7,
        img: 'https://m.media-amazon.com/images/I/81OOn8oKo2L._SL1500_.jpg',
        title: 'A Game of Thrones Reissue',
        version: 'Paperback',
        author: 'George R.R. Martin',
        rating: 4.5,
        price: 23.99,
    },
    {
        ref: '9780553582017',
        quantity: 14,
        img: 'https://m.media-amazon.com/images/I/81e1rZDeBBL._SL1500_.jpg',
        title: 'A Dance with Dragons',
        version: 'Mass Market Paperback',
        author: 'George R.R. Martin',
        rating: 4.5,
        price: 7.93,
    },

];

//VARIABLES
const itemList = document.getElementById('item-list');
const cartItemCount = document.getElementById('cartItemCount');
const cartCount = document.getElementsByClassName('cart-count');
let articleCount = document.getElementById('article-count');
articleCount.textContent = books.length + ' articles';
let bookInCartQuantity = 0;
let cartItemCountOperation = cartItemCount.textContent = bookInCartQuantity + ' article';
let priceTotal = document.getElementById('priceTotal');
let number = 0.00;
priceTotal.textContent = number + '.00 €';
const fullCart = document.getElementById('full-cart');


// CREATION DES PRODUITS SUR LA PAGE PRINCIPALE
function createPageItems() {
    for (let index = 0; index < books.length; index++) {
        let book = document.createElement('div');
        book.className += 'book';

        let bookImg = document.createElement('img');
        bookImg.src = books[index].img;
        bookImg.className += 'book-img';

        let bookTitle = document.createElement('h3');
        bookTitle.textContent = books[index].title;

        let bookVersion = document.createElement('p');
        bookVersion.textContent = books[index].version;

        bookQuantity = document.createElement('p');
        bookQuantity.innerHTML = '<br>' + '<small id="quantity-color">Quantité : </small>' + books[index].quantity;

        let bookPrice = document.createElement('p');
        bookPrice.textContent = books[index].price.toFixed(2) + ' €';

        let bookAuthor = document.createElement('small');
        bookAuthor.innerHTML = '<b>' + books[index].author + '</b><br>';

        bookRating = document.createElement('p');
        bookRating.innerHTML = books[index].rating;

        //Fonction qui attribue les étoiles aux oeuvres :
        function calcRating() {
            switch (books[index].rating) {
                case 0.5: bookRating.innerHTML = `<i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 1: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 1.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 2: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 2.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 3: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 3.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 4: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                    break;
                case 4.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i><br>`;
                    break;
                case 5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><br>`;
                    break;
                default: bookRating.innerHTML = `Aucun vote`;

            }
        }
        calcRating();

        let bookAddCart = document.createElement('a');
        bookAddCart.innerHTML = 'Ajouter au panier <i class="fa-solid fa-cart-plus"></i>';
        bookAddCart.className += 'add-cart';

        book.appendChild(bookImg);
        book.appendChild(bookTitle);
        book.appendChild(bookVersion);
        book.appendChild(bookAuthor);
        book.appendChild(bookRating);
        book.appendChild(bookQuantity);
        book.appendChild(bookPrice);
        book.appendChild(bookAddCart);
        itemList.appendChild(book);

        //GESTION DU STOCK

        if (books[index].quantity >= 5) {
            bookQuantity.classList.add('green')
        }
        else if (books[index].quantity < 5) {
            bookQuantity.classList.add('red')
        };
    }
}
createPageItems();

// AJOUT DES PRODUITS AU PANIER
function createPageCart() {
    let addCart = document.getElementsByClassName('add-cart');
    for (let index = 0; index < books.length; index++) {
        addCart[index].addEventListener('click', () => {



            number = number + books[index].price
            priceTotal.textContent = number.toFixed(2) + ' €'
            bookInCartQuantity = bookInCartQuantity + 1
            cartItemCount.textContent = bookInCartQuantity + ' article'

            if (bookInCartQuantity != 1 && bookInCartQuantity != 0) {
                cartItemCount.textContent += 's'
            }

            let book = document.createElement('div');
            book.className += ' cart';

            let bookImg = document.createElement('img');
            bookImg.src = books[index].img;
            bookImg.className += ' img-cart';

            let bookInner = document.createElement('div');
            bookInner.className += 'inner-book';

            let bookTitle = document.createElement('h3');
            bookTitle.textContent = books[index].title;

            let bookVersion = document.createElement('p');
            bookVersion.textContent = books[index].version;

            let bookPrice = document.createElement('p');
            bookPrice.innerHTML = '<br>' + books[index].price.toFixed(2) + ' €';

            let bookAuthor = document.createElement('small');
            bookAuthor.innerHTML = '<b>' + books[index].author + '</b><br>';

            bookRating = document.createElement('p');
            bookRating.className += 'cart-rating';
            bookRating.innerHTML = books[index].rating;

            //Fonction qui attribue les étoiles aux oeuvres :
            function calcRating() {
                switch (books[index].rating) {
                    case 0.5: bookRating.innerHTML = `<i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 1: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 1.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 2: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 2.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 3: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 3.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 4: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i><br>`;
                        break;
                    case 4.5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i><br>`;
                        break;
                    case 5: bookRating.innerHTML = `<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><br>`;
                        break;
                    default: bookRating.innerHTML = `Aucun vote`;

                }
            }
            calcRating();


            let bookRemoveCart = document.createElement('a');
            bookRemoveCart.innerHTML = 'Retirer du panier &nbsp; <i class="fa-solid fa-xmark" style="font-size:17px"></i>';
            bookRemoveCart.className += 'add-cart';
            bookRemoveCart.className += ' cart';

            book.appendChild(bookImg);
            book.appendChild(bookInner);
            bookInner.appendChild(bookTitle);
            bookInner.appendChild(bookVersion);
            bookInner.appendChild(bookAuthor);
            bookInner.appendChild(bookRating);
            bookInner.appendChild(bookPrice);
            bookInner.appendChild(bookRemoveCart);
            cart.appendChild(book);
            //RETIRER DES PRODUITS DU PANIER
            bookRemoveCart.addEventListener('click', () => {

                number = parseFloat((number - books[index].price).toFixed(2));
                priceTotal.textContent = number.toFixed(2) + ' €'
                bookInCartQuantity = bookInCartQuantity - 1
                cartItemCount.textContent = bookInCartQuantity + ' article'
                if (bookInCartQuantity != 1 && bookInCartQuantity != 0) {
                    cartItemCount.textContent += 's'
                }
                cart.removeChild(book);
            })
        })
    }
}
createPageCart(fullCart.innerHTML);

/* function saveData() {
    localStorage.setItem('data', fullCart.innerHTML)
};

function showCart() {
    fullCart.innerHTML = localStorage.getItem('data')
    console.log(localStorage.getItem('data'));
};
showCart() */