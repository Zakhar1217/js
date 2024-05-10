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
        id:0,
        monday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:1,
        Tuesday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:2,
        Wednesday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:3,
        Thursday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:4,
        Friday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id:5,
        Saturday:{
            temperature:[
                {name:'morning' ,value: 19},
                {name:'day' ,value: 35},
                {name:'night' ,value: 17},
            ]
        },
        id: 6,
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
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}

if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}

if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Не вірно')
}
//------7----
let time = 45

let firstQuarter = time >= 0 && time <= 14
let secondQuarter = time >= 15 && time <= 29
let thirdQuarter = time >= 30 && time <= 44
let fourthQuarter = time >= 45 && time <= 59

if (firstQuarter) {
    console.log('Число попадає до першої чверті')
} else if (secondQuarter) {
    console.log('Число попадає до другої чверті')
} else if (thirdQuarter) {
    console.log('Число попадає до третьої чверті')
} else if (fourthQuarter) {
    console.log('Число попадає до четвертої чверті')
}  else {
    console.log('Ви ввели число яке не входить в проміжок від 0 до 59 включно')
}
//-----8------
let timetableArr = [
    {
        id: 1,
        title: 'Понеділок',
        deals: [
            ' розминка',
            'робота',
            'вечеряти'
        ]
    },
    {
        id: 2,
        title: 'Вівторок',
        deals: [
            'медитація',
            'Робота',
            'вечеряти'
        ]
    },
    {
        id: 3,
        title: 'Середа',
        deals: [
            'медитація',
            'Зустріч з друзями  на свіжому повітрі ',
            'вечеряти'
        ]
    },
    {
        id: 4,
        title: 'Четвер',
        deals: [
            'Ранкова прогулянка',
            'Робота  ',
            'вечеряти'
        ]
    },
    {
        id: 5,
        title: 'Пятниця',
        deals: [
            'Сніданок і водні процедури ',
            'робота',
            'вечеряти'
        ]
    },
    {
        id: 6,
        title: 'Субота',
        deals: [
            'сніданок',
            'Прогулянка на свіжому повітрі',
            'вечеряти'
        ]
    },
    {
        id: 7,
        title: 'Неділя',
        deals: [
            'погуляти з  друзями',
            'вигуляти собаку',
            'вечеряти'
        ]
    }
]

let dayNumber = 3

switch (dayNumber) {
    case 1:
        console.log(timetableArr[0]['title'])
        console.log(timetableArr[0]['deals'])
        break
    case 2:
        console.log(timetableArr[1]['title'])
        console.log(timetableArr[1]['deals'])
        break
    case 3:
        console.log(timetableArr[2]['title'])
        console.log(timetableArr[2]['deals'])
        break
    case 4:
        console.log(timetableArr[3]['title'])
        console.log(timetableArr[3]['deals'])
        break
    case 5:
        console.log(timetableArr[4]['title'])
        console.log(timetableArr[4]['deals'])
        break
    case 6:
        console.log(timetableArr[5]['title'])
        console.log(timetableArr[5]['deals'])
        break
    case 7:
        console.log(timetableArr[6]['title'])
        console.log(timetableArr[6]['deals'])
        break
    default:
        console.log('Введене число більше ніж від 1 до 7 включно')
}
//----------9------
let a = 999999
let b = 1

if (a > b) {
    console.log(`Число ${a} більше ніж ${b}`)
} else if (a < b) {
    console.log(`Число ${b} більше ніж ${a}`)
} else if (a == b) {
    console.log('Введені числа однакові')
}
//------10----
let xx = 'null'
if (xx === null, xx === undefined , xx === false , xx === '' , xx === "" , xx === `` , xx === NaN , xx === 0 , xx === -0 , xx === 0n) {
     xx = "default"
     console.log(xx)
 } else {
     console.log(xx)
 }
//-------------11-------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[1]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[2]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[3]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[4]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[5]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}