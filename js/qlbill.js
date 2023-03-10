function popup_show_bill(){
    document.querySelector(".list-qlsp").style.display = 'none';
    document.querySelector(".list-user").style.display = 'none';
    document.querySelector(".list-bill").style.display = "block";
    document.getElementById("rightsection").style.display = "block";
}
function popup_bill(){
    document.querySelector(".infobill").style.display = 'flex';
}
function popup_bill_hide(){
    document.querySelector(".infobill").style.display = 'none';
}
function showBills(){
    let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
    console.log(bills);
    let sp =`<tr>
            <th>Ngày</th>
            <th>Khách hàng</th>
            <th>Đơn giá</th>
            <th>Tình trạng</th>
        </tr>`;
    bills.map((bill, index) => {
        sp +=`<tr class="sp">
            <td onclick="showInfoBill(${index})">${bill.date}</td>
            <td onclick="showInfoBill(${index})">${bill.customer.fullname}</td>
            <td onclick="showInfoBill(${index})">${bill.total}</td>
            <td onclick="showInfoBill(${index})">${bill.status}</td>
        </tr>`; 
    });
    document.getElementById("listb").innerHTML = sp;
}
function searchBill(){
	let billArray = JSON.parse(localStorage.getItem('bills'));
	let status =document.getElementById('statussearch').value;
	let name =document.getElementById('name').value.toLowerCase();
	let billArrayTemp = [];
	for (let i = 0; i < billArray.length; i++) {
		if(status==billArray[i].status && billArray[i].customer.fullname.toLowerCase().search(name) >= 0) {
			billArrayTemp.push(billArray[i]);
		}
	}
	let sp =`<tr>
            <th>Ngày</th>
            <th>Khách hàng</th>
            <th>Đơn giá</th>
            <th>Tình trạng</th>
        </tr>`;
    billArrayTemp.map((bill, index) => {
        if(billArrayTemp.status=="Chưa xử lí"){
            sp +=`<tr class="sp">
            <td onclick="showInfoBill(${index})">${bill.date}</td>
            <td onclick="showInfoBill(${index})">${bill.customer.fullname}</td>
            <td onclick="showInfoBill(${index})">${bill.total}</td>
            <td onclick="showInfoBill(${index})">${bill.status}</td>
            </tr>`; 
        }
        else{
            sp +=`<tr class="sp">
            <td onclick="showInfoBill(${index})">${bill.date}</td>
            <td onclick="showInfoBill(${index})">${bill.customer.fullname}</td>
            <td onclick="showInfoBill(${index})">${bill.total}</td>
            <td onclick="showInfoBill(${index})">${bill.status}</td>
            </tr>`; 
        }
    });
    document.getElementById("listb").innerHTML = sp;
}
function showInfoBill(index){
    let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
    document.getElementById("info").value = bills[index].info;
    document.getElementById("date").value = bills[index].date;
    document.getElementById("fullnameb").value = bills[index].customer.fullname;
    document.getElementById("addressb").value = bills[index].customer.address;
    document.getElementById("phoneb").value = bills[index].customer.phone;
    document.getElementById("total").value = bills[index].total;
    document.getElementById("status").value = bills[index].status;
    document.getElementById("indexb").value = index;
    popup_bill();
}
function checkVstatus(){
    let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
    let index = document.getElementById("indexb").value;
    bills[index] = {
        info: bills[index].info,
        date: bills[index].date,
        customer: bills[index].customer,
        total: bills[index].total,
        status: "Đã xử lí"
    }
    localStorage.setItem("bills", JSON.stringify(bills));
    showBills();
    popup_bill_hide();
}
function checkXstatus(){
    let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
    let index = document.getElementById("indexb").value;
    bills[index] = {
        info: bills[index].info,
        date: bills[index].date,
        customer: bills[index].customer,
        total: bills[index].total,
        status: "Chưa xử lí"
    }
    localStorage.setItem("bills", JSON.stringify(bills));
    showBills();
    popup_bill_hide();
}