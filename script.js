const name = prompt("Ismingizni kiriting")
const year = +prompt("Hozirgi yilni kiriting")
const birthYear  = +prompt("Tug'ilgan yilingizni kiriting")
alert("Konsolga kiring")
console.log(`Ism ${name}, hozirgi yil ${year}, Tug'ilgan yili ${birthYear}`);

function returnator(name , year , birthYear){
    const yoshHisoblagich = year - birthYear
return `${name}, yoshingiz ${yoshHisoblagich}`
}
console.log(returnator(name , year , birthYear));
