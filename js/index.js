let details = [];

let form = `<div class="container">
<form action="#" class="frm" id="form">
    <input type="text" placeholder="Enter Your Name" class="Name" id="inp" value=""><br>
    <input type="email" placeholder="Enter Your Email" class="Email" id="inp2" value=""><br>
    <input type="tel" placeholder="Enter Your Number" class="Number" id="inp3" value=""><br>
    <button class="btn" id="submit" type="submit">Save</button>
</form>
</div>`;

document.getElementById("form-main").innerHTML = form ;

document.getElementById("submit").addEventListener("click", () => {

    let name = document.getElementById("inp");
    let email = document.getElementById("inp2");
    let phone = document.getElementById("inp3");

    let data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
    };
    details.push(data);
    name.value=''
    email.value=''
    phone.value=''
    getData()

});


function getData() {
    let data = `<table class="table">
    <thead class="heading">
        <tr class="heading-row">
            <th id="serial-number">S NO.</th>
            <th id="name-head">Name</th>
            <th id="email-head">Email</th>
            <th id="phone-number">Phone</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody class="content">`
    for (let i = 0; i < details.length; i++) {
        data = data + `  <tr class="content-row">
        <td id="serial-data">${i+1}</td>
        <td id="name-data">${details[i].name}</td>
        <td id="email-data">${details[i].email}</td>
        <td id="phone-data">${details[i].phone}</td>
        <td id="edit-data"><button id="edit-btn" onclick="editData(${i})">Edit</button></td>
        <td id="del-data"><button id="edit-btn" onclick="removeData(${i})">Remove</button></td>
    </tr>`
        };
        data = data + `</tbody></table>`  
        document.getElementById('t-body').innerHTML = data
};

function removeData(index){
details.splice(index,1)
getData()
}


function editData(index){
let update = `<div class="container">
<form action="#" class="frm" id="form">
    <input type="text" placeholder="Enter Your Name" class="Name" id="newinp" value="${details[index].name}"><br>
    <input type="email" placeholder="Enter Your Email" class="Email" id="newinp2" value="${details[index].email}"><br>
    <input type="tel" placeholder="Enter Your Number" class="Number" id="newinp3" value="${details[index].phone}"><br>
    <button class="btn" id="newsubmit" type="submit"  onclick="updateData(${index})">Update</button>
</form>
</div>`

document.getElementById("form-main").innerHTML = update;
}

function updateData(index){
details[index] = {
    name:newinp.value,
    email:newinp2.value,
    phone:newinp3.value
}
getData()
document.getElementById("form-main").innerHTML = form;
}

