let details = [];
var mode = ``
function getData() {
    let storage = localStorage.getItem("details");
    if (storage) {
        details = JSON.parse(storage);
    } else {
        setData();
    }
};
getData();
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};

let check = localStorage.getItem('check');
if(check){
    mode = `<span class="material-symbols-outlined switch-on">toggle_on</span>`
    document.getElementById("main-body").classList.toggle('samar');
}else{
    mode = `<span class="material-symbols-outlined switch-on">toggle_off</span>`;
}

let form = `<div class="container">
<button id="switch-button" onClick="switchMode()">${mode}</button>
<div class="frm" id="form">
    <input type="text" placeholder="Enter Your Name" class="Name" id="inp" value=""><br>
    <input type="email" placeholder="Enter Your Email" class="Email" id="inp2" value=""><br>
    <input type="tel" placeholder="Enter Your Number" class="Number" id="inp3" value=""><br>
    <button class="btn" id="submit" onClick="saveData()">Save</button>
</div>
</div>`;

document.getElementById("form-main").innerHTML = form;

const saveData = () => {

    let name = document.getElementById("inp");
    let email = document.getElementById("inp2");
    let phone = document.getElementById("inp3");

    let data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
    };

    if (name.value.length == 0) {
        alert('Enter Your Name')
    } else if (email.value.length == 0) {
        alert('Enter Your Email')
    } else if (phone.value.length == 0) {
        alert('Enter Your Phone')
    } else if (isNaN(phone.value)) {
        alert('Enter a Valid Number')
    } else {
        details.push(data)
        name.value = ''
        email.value = ''
        phone.value = ''
    }

    setData();
    table()
};


function table() {
    let data = `
    `
    for (let i = 0; i < details.length; i++) {
        data = data + `  <tr class="content-row">
        <td id="serial-data">${i + 1}</td>
        <td id="name-data">${details[i].name}</td>
        <td id="email-data">${details[i].email}</td>
        <td id="phone-data">${details[i].phone}</td>
        <td id="edit-data"><button id="edit-btn" onclick="editData(${i})">Edit</button></td>
        <td id="del-data"><button id="edit-btn" onclick="removeData(${i})">Remove</button></td>
    </tr>`
    };
    document.getElementById('t-body').innerHTML = data;
};
table();



function removeData(index) {
    details.splice(index, 1);
    setData()
    table()
}


function editData(index) {
    let update = `<div class="container">
<button id="switch-button" onClick="switchMode()"></button>
<div class="frm" id="form">
    <input type="text" placeholder="Enter Your Name" class="Name" id="newinp" value="${details[index].name}"><br>
    <input type="email" placeholder="Enter Your Email" class="Email" id="newinp2" value="${details[index].email}"><br>
    <input type="tel" placeholder="Enter Your Number" class="Number" id="newinp3" value="${details[index].phone}"><br>
    <button class="btn" id="newsubmit"  onclick="updateData(${index})">Update</button>
</div>
</div>`
    document.getElementById("form-main").innerHTML = update;
}

function updateData(index) {
    details[index] = {
        name: newinp.value,
        email: newinp2.value,
        phone: newinp3.value
    }
    if (isNaN(newinp3.value)) {
        alert('Enter a Valid Number')
    } else {
        setData()
        table()
        document.getElementById("form-main").innerHTML = form;
    }
}


function switchMode () {
    location.reload();
    document.getElementById("main-body").classList.toggle('samar');
    localStorage.setItem("check",'samar' )
    if(check){
        localStorage.removeItem("check",'samar' )
    };  
};


