
/*menu*/
function popup_show_dssp(){
    document.querySelector(".list-qlsp").style.display = 'block';
    document.querySelector(".list-user").style.display = 'none';
    document.querySelector(".list-bill").style.display = "none";
    document.getElementById("rightsection").style.display = "none";
}
function popup_show_dsuser(){
    document.querySelector(".list-qlsp").style.display = 'none';
    document.querySelector(".list-user").style.display = 'block';
    document.querySelector(".list-bill").style.display = "none";
    document.getElementById("rightsection").style.display = "none";
}
/*qlsp*/
function popup_show_add(){
    let id=document.getElementById("id");
    let namepd=document.getElementById("namepd");
    let loai= document.getElementById("loai");
    let thuonghieu=document.getElementById("thuonghieu");
    let dungtich=document.getElementById("dungtich");
    let img= document.getElementById("hinhanh");
    let giatien=document.getElementById("giatien");
    let detail=document.getElementById("detail");
    id.value="";
    namepd.value ="";
    loai.value="";
    dungtich.value="";
    thuonghieu.value="";
    img.value="";
    giatien.value="";
    detail.value="";
    document.getElementById("addpd").style.display = "block";
    document.getElementById("editpd").style.display = "none";
    document.querySelector(".addproduct").style.display = 'flex';
}
function popup_show(){
    document.querySelector(".addproduct").style.display = 'flex';
}
//window.onclick = function(event) {
   // if (event.target == document.querySelector(".addproduct")) {
    //    document.querySelector(".addproduct").style.display = "none";
   // }
//}
function popup_hide(){ 
    document.querySelector(".addproduct").style.display = "none";
}
function addProduct(){
    let id=document.getElementById("id");
    let namepd=document.getElementById("namepd");
    let loai= document.getElementById("loai");
    let thuonghieu=document.getElementById("thuonghieu");
    let dungtich=document.getElementById("dungtich");
    let img= document.getElementById("hinhanh");
    let giatien=document.getElementById("giatien");
    let detail=document.getElementById("detail");
    let products = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    let objproduct={
        id: id.value,
        name: namepd.value,
        type: loai.value,
        brand: thuonghieu.value,
        capacity: dungtich.value,
        img: img.value,
        price: giatien.value,
        detail: detail.value
    }
    console.log(objproduct);
    products.push(objproduct);
    let json = JSON.stringify(products);
    if (!id.value || !namepd.value || !loai.value || !thuonghieu.value || !dungtich.value 
         || !img.value || !giatien.value || !detail.value){
        alert("Vui lòng nhập đủ thông tin");
    }else if(isNaN(Number(giatien.value))){
		Alert('Giá không hợp lệ','warning');
	}
    else{
        localStorage.setItem("product", json);
        alert("Thêm thành công");
        id.value="";
        namepd.value ="";
        loai.value="";
        thuonghieu.value="";
        dungtich.value="";
        img.value="";
        giatien.value="";
        detail.value="";
        showProduct();
    }
}
function showProduct(){
    let products = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    console.log(products);
    let sp =`<tr>
            <th>ID</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Thương hiệu</th>
            <th>Loại</th>
            <th>Dung tích</th>
            <th>Chi tiết</th>
            <th>Giá tiền</th>
            <th>Chức năng</th>
        </tr>`;
    products.map((product, index) => {
        sp +=`<tr class="sp">
            <td>${product.id}</td>
            <td><img src="${product.img}"></td>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.type}</td>
            <td>${product.capacity}</td>
            <td>${product.detail}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="editProduct(${index})" style="cursor:pointer;">Edit</button> 
                |<button onclick="deleteProduct(${index})" style="cursor:pointer;">Delete</button>
            </td>
        </tr>`; 
    });
    document.getElementById("list").innerHTML = sp;
}
function editProduct(index){
    let products = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    document.getElementById("id").value = products[index].id;
    document.getElementById("namepd").value = products[index].name;
    document.getElementById("loai").value = products[index].type;
    document.getElementById("thuonghieu").value = products[index].brand;
    document.getElementById("dungtich").value = products[index].capacity;
    document.getElementById("hinhanh").value = products[index].img;
    document.getElementById("giatien").value = products[index].price;
    document.getElementById("detail").value = products[index].detail;
    document.getElementById("indexpd").value = index;

    document.getElementById("addpd").style.display = "none";
    document.getElementById("editpd").style.display = "block";
    popup_show();
}
function updateProduct(){
    let products = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    let index = document.getElementById("indexpd").value;
    products[index] = {
        id: document.getElementById("id").value,
        name: document.getElementById("namepd").value,
        type: document.getElementById("loai").value,
        brand: document.getElementById("thuonghieu").value,
        capacity: document.getElementById("dungtich").value,
        img: document.getElementById("hinhanh").value,
        price: document.getElementById("giatien").value,
        detail: document.getElementById("detail").value
    }
    localStorage.setItem("product", JSON.stringify(products));
    showProduct();
}
function deleteProduct(index){
    let products = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    if(confirm("OK!!!!")){
        products.splice(index, 1);
    }
    localStorage.setItem("product", JSON.stringify(products));
    showProduct();
}
function deleteAllProdcut(){
    if(confirm("Bạn muốn xóa tất cả sản phầm!")){
        localStorage.removeItem("product");
    }
    showProduct();
}
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('hinhanh').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
