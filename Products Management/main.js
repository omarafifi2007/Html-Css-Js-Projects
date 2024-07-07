let ads = document.getElementById('ads');
let cate = document.getElementById('cate');
let total = document.getElementById('total');
let title = document.getElementById('title');
let price = document.getElementById('price');
let tbody = document.getElementById('tbody');
let taxes = document.getElementById('taxes');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
let discount = document.getElementById('discount');
let DeleteAll = document.getElementById('DeleteAll');
let searchTitle = document.getElementById('searchTitle');
let searchCategory = document.getElementById('searchCategory');

let mood = 'Create';
let tmp;

// Get Total
function GetTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    } else {
        total.innerHTML = '';
        total.style.background = '#a00d02';
    }
}

// Create Product And Sava Data In Local Storage
let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
} else {
    dataPro = [];
}
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        cate: cate.value,
    }

    if (title.value != '' && price.value != '' && taxes.value != '' && cate.value != '' && newPro.count <= 200) {
        if (mood === 'Create') {
            if (newPro.count > 1) {
                for (let i = 0;i < newPro.count;i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
        } else {
            dataPro[tmp] = newPro;
            mood = 'Create';
            submit.innerHTML = 'Create';
            count.style.display = 'block';
        }
        ClearData();
    }
    localStorage.setItem('product', JSON.stringify(dataPro));
    ClearData();
    ShowDate();
}

// Clear Date From Inputs
function ClearData() {
    ads.value = '';
    cate.value = '';
    title.value = '';
    price.value = '';
    count.value = '';
    taxes.value = '';
    discount.value = '';
    discount.value = '';
    total.innerHTML = '';
}

// Read Data In Table
function ShowDate() {
    let table = '';
    for (let i = 0;i < dataPro.length;i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].cate}</td>
        <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
        <td><button onclick="DeleteData(${i})" id="delete">Delete</button></td>
        </tr>`;
    }
    tbody.innerHTML = table;
    if (dataPro.length > 0) {
        DeleteAll.innerHTML = `<button onclick="Deleteall()">Delete All (${dataPro.length})</button>`
    } else {
        DeleteAll.innerHTML = '';
    }
}
ShowDate();

// Delete Date
function DeleteData(i) {
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    ShowDate();
}
function Deleteall() {
    localStorage.clear();
    dataPro.splice(0);
    ShowDate();
}

// Update Date
function UpdateData(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    discount.value = dataPro[i].discount;
    cate.value = dataPro[i].cate;
    ads.value = dataPro[i].ads;
    GetTotal();
    count.style.display = 'none';
    submit.innerHTML = 'Update';
    mood = 'Update';
    tmp = i;
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}

// Search Date
let SearchMood = 'title';
function Search(id) {
    if (id == 'searchTitle') {
        SearchMood = 'title';
        search.placeholder = 'Search By Title';
    } else {
        SearchMood = 'Category';
        search.placeholder = 'Search By Category';
    }
    search.focus();
}
function SearchData(value) {
    let table = '';
    if (SearchMood == 'title') {
        for (let i = 0;i < dataPro.length;i++) {
            if (dataPro[i].title === search.value) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].cate}</td>
                <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
                <td><button onclick="DeleteData(${i})" id="delete">Delete</button></td>
                </tr>`;
            }
        }
    } else if (SearchMood == 'Category') {
        for (let i = 0;i < dataPro.length;i++) {
            if (dataPro[i].cate.includes(value)) {
                table += `
                <tr>
                <td>${i+1}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].cate}</td>
                <td><button onclick="UpdateData(${i})" id="update">Update</button></td>
                <td><button onclick="DeleteData(${i})" id="delete">Delete</button></td>
                </tr>`;
            }
        }
    }
    tbody.innerHTML = table;
}