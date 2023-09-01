// bai 1
var learning = "ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;";

function countCharacters() {
    var characterCount = learning.length;
    console.log("Số kí tự trong chuỗi: " + characterCount);
}

function findLastITC() {
    var lastIndex = learning.lastIndexOf("ITC");
    console.log("Vị trí của chữ ITC cuối cùng trong chuỗi: " + lastIndex);
}

function splitWords() {
    var words = learning.split(" ");
    console.log("Các từ trong chuỗi:");
    console.log(words);
}

function replaceJS() {
    var replacedString = learning.replace(/JS/g, "Javascript");
    console.log("Chuỗi sau khi thay thế từ JS thành Javascript:");
    console.log(replacedString);
}

function checkJS() {
    var hasJS = learning.includes("JS");
    console.log("Có chữ JS trong chuỗi không: " + hasJS);
}
// bai 2
function normalizeString() {
    var input = document.getElementById("userInput");
    var normalizedString = input.value.toLowerCase().trim();
    input.value = normalizedString;
}

function countCharacters() {
    var input = document.getElementById("userInput");
    var string = input.value;
    var characterCount = string.length;
    alert("Số kí tự trong chuỗi: " + characterCount);
}

function searchITC() {
    var input = document.getElementById("userInput");
    var string = input.value.toLowerCase();
    var itcCount = 0;
    var startIndex = 0;
    while (true) {
        var index = string.indexOf("itc", startIndex);
        if (index === -1) {
            break;
        }
        itcCount++;
        startIndex = index + 3; // Độ dài của từ "itc"
    }
    alert("Số lần xuất hiện của 'itc': " + itcCount);
}

function replaceITC() {
    var input = document.getElementById("userInput");
    var string = input.value;
    var replacedString = string.replace(/itc/gi, "ITC");
    input.value = replacedString;
}
// bai 3
function sortAscending() {
    var numbers = [
        2,
        5,
        12,
        4,
        99,
        8
    ];
    numbers.sort(function (a, b) {
        return a - b;
    });
    alert("Mảng sau khi sắp xếp tăng dần: " + numbers);
}

function sortDescending() {
    var numbers = [
        2,
        5,
        12,
        4,
        99,
        8
    ];
    numbers.sort(function (a, b) {
        return b - a;
    });
    alert("Mảng sau khi sắp xếp giảm dần: " + numbers);
}
// bai 4
var persons = [
    {
        fullName: 'Tran Anh Khoa',
        age: 18,
        Address: 'Ha Noi'
    }, {
        fullName: 'Nguyen Quang Hoc',
        age: 21,
        Address: 'Bac Giang'
    }, {
        fullName: 'Vu Thanh Dat',
        age: 20,
        Address: 'Thai Binh'
    }, {
        fullName: 'Dang Phuc Linh',
        age: 19,
        Address: 'Ha Noi'
    },
];

function sortAscending() {
    persons.sort(function (a, b) {
        return a.age - b.age;
    });
    console.log("Mảng sau khi sắp xếp tăng dần theo tuổi:");
    console.log(persons);
}

function sortDescending() {
    persons.sort(function (a, b) {
        return b.age - a.age;
    });
    console.log("Mảng sau khi sắp xếp giảm dần theo tuổi:");
    console.log(persons);
}

function filterHaNoi() {
    var haNoiPersons = persons.filter(function (person) {
        return person.Address === 'Ha Noi';
    });
    console.log("Các người ở Hà Nội:");
    console.log(haNoiPersons);
}

function mapUpperCase() {
    var upperCasePersons = persons.map(function (person) {
        return {fullName: person.fullName.toUpperCase(), age: person.age, Address: person.Address};
    });
    console.log("Mảng sau khi viết hoa tên các person:");
    console.log(upperCasePersons);
}
// bai 5