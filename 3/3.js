//-----------1
let randomWordsArr = ['1', '2',' 3', '4', '5', '6', '7', '8', '9', '10', '11' ,'12']

for (let div of randomWordsArr) {
    document.write(`
    <div>${div}</div>
    `)
}
document.write('<hr>')
//-------------2
let randomWordsArrID = 0

for (let div of randomWordsArr) {
    document.write(`
    <div>${++randomWordsArrID}. ${div}</div>
    `)
}

document.write('<hr>')
//---------3
let randomWordsArr2ID = 0

let randomWordsArr2 = ['1', '2', '3', '3', '4',
    '5', '6', '7', '8', '9', '0',
    '00','99', '96', '000000', '44444', 'tom',
    'look', 'book', 'harry', 'potter'];

while (randomWordsArr2ID <= randomWordsArr2.length - 1) {
    document.write(`
        <div><h1>${randomWordsArr2[randomWordsArr2ID]}</h1></div>
    `)
    randomWordsArr2ID++
}

document.write('<hr>')
//---------4
randomWordsArr2ID = 0

while (randomWordsArr2ID <= randomWordsArr2.length - 1) {
    document.write(`
        <div><h1>${randomWordsArr2ID + 1}. ${randomWordsArr2[randomWordsArr2ID]}</h1></div>
    `)
    randomWordsArr2ID++
}

document.write('<hr>')
//---------5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let item of listOfItems) {

    document.write(`<ul>`)
    document.write(`
        <li>${item}</li>
    `)
    document.write(`</ul>`)
}

document.write('<hr>')
//-------6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (item of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${item['title']}. Price - ${item['price']}</h3>
            <img src="${item['image']}" alt="img" class="product-image">
        </div>
    `)
}
//--------7.1
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (item of users) {
    if (item['status'] === true) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>...................</p>
        `)
    }
}
//---------7.2
for (item of users) {
    if (item['status'] === false) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>....................</p>
        `)
    }
}
//-----------8
for (item of users) {
    if (item['age'] > 30) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>-.-.-.-.-.-.-.-.-</p>
        `)
    }
}