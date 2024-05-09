//----1----
import {x} from "./x";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, true, false]
console.log(arr)
//------2----
let books = [{
    title:'HarryPotter',
    pageCount:100,
    genre: ['fantasy'],
},
    {
        title: 'TomasSor',
        pageCount:10,
        genre: ["fantasy"],
    },
    {
        title: 'Astral',
        pageCount:30,
        genre: ['fantasy']
    }]
console.log(books)
//------3----
let book = [{
    title:'HarryPotter',
    pageCount:100,
    genre: ['fantasy'],
    authors:[{name: 'Authors name1', age:57}]
},
    {
        title: 'TomasSor',
        pageCount:10,
        genre: ["fantasy"],
        authors:[{name: 'Authors name2', age:70}]
    },
    {
        title: 'Astral',
        pageCount:30,
        genre: ['fantasy'],
        authors:[{name: 'Authors name3', age:29}]
    }]
console.log(book)
//---------4-----
let user = [
    {name: 'vasya', username:'username1', password: 1},
    {name: 'petya', username:'username2', password: 2},
    {name: 'kolya', username:'username3', password: 3},
    {name: 'olya', username:'username4', password: 4},
    {name: 'max', username:'username5', password: 5},
    {name: 'anya', username:'username6', password: 6},
    {name: 'andrey', username:'username7', password: 7},
    {name: 'masha', username:'username8', password: 8},
    {name: 'olya', username:'username9', password: 9},
    {name: 'max', username:'username10', password: 10}
];
console.log(user)
//--------5------
const temp = [
    {
        id:1,
        monday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:2,
        Tuesday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:3,
        Wednesday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:4,
        Thursday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:5,
        Friday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:6,
        Saturday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:7,
        Sunday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        }
    }
]
console.log(temp)
//------6----
let x = 1
'let' x = prompt()
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}

let x = 0

if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}

let x = -3
let x = prompt()
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}