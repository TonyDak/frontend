/*qluser*/
function popup_show_user2(){
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('usernameSignUp');
    var email = document.getElementById('emailSignUp');
    var password = document.getElementById('passwordSignUp');
    fullname.value ="";
    password.value ="";
    email.value="";
    address.value="";
    phone.value="";
    username.value="";
    document.getElementById("addu").style.display = "block";
    document.getElementById("edituser").style.display = "none";
    document.querySelector(".adduser").style.display = 'flex';
}
function popup_show_user1(){
    document.querySelector(".adduser").style.display = 'flex';
}
//window.onclick = function(event) {
    //if (event.target == document.querySelector(".adduser")) {
   ///     document.querySelector(".adduser").style.display = "none";
   // }
//}
function popup_hide_user(){ 
    document.querySelector(".adduser").style.display = "none";
}
function showUser(){
    let users = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    console.log(users);
    let tk =`<tr">
    <th>Họ tên</th>
    <th>Tên tài khoản</th>
    <th>Mật khẩu</th>
    <th>Email</th>
    <th>Địa chỉ</th>
    <th>SDT</th>
    <th>Ngày đăng kí</th>
    <th>Chức năng</th>
    </tr>`;
    users.map((user, index) => {
        tk +=`<tr class="user">
            <td>${user.fullname}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>${user.datesignup}</td>
            <td>
                <button onclick="editUser(${index})" style="cursor:pointer;">Edit</button> 
                |<button onclick="deleteUser(${index})" style="cursor:pointer;">Delete</button>
            </td>
        </tr>`; 
    });
    document.getElementById("listu").innerHTML = tk;
    document.getElementsByClassName("input-box2")[0].style.display = "block";
}
function editUser(index){
    let users = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    document.getElementById('fullname').value = users[index].fullname;
    document.getElementById("usernameSignUp").value = users[index].username;
    document.getElementById("passwordSignUp").value = users[index].password;
    document.getElementById("emailSignUp").value = users[index].email;
    document.getElementById("address").value = users[index].address;
    document.getElementById("phone").value = users[index].phone;
    document.getElementById("indexu").value = index;

    document.getElementById("addu").style.display = "none";
    document.getElementsByClassName("input-box2")[0].style.display = "none";
    document.getElementById("edituser").style.display = "block";
    popup_show_user1();
}
function updateUser(){
    let users = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    let index = document.getElementById("indexu").value;
    users[index] = {
        username: document.getElementById("usernameSignUp").value,
        password: document.getElementById("passwordSignUp").value,
        fullname: document.getElementById('fullname').value,
        email: document.getElementById("emailSignUp").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        datesignup: users[index].datesignup,
    }
    localStorage.setItem("user", JSON.stringify(users));
    showUser();
}
function deleteUser(index){
    let users = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    if(confirm("OK!!!!")){
        users.splice(index, 1);
    }
    localStorage.setItem("user", JSON.stringify(users))
    showUser();
}
function deleteAllUser(){
    if(confirm("Bạn muốn xóa tất cả user!")){
        localStorage.removeItem("user");
    }
    showUser();
}