// ทำงานกับ Object

// ตัวแปรเก็บข้อมูล
const customerName = "kongruksiam";
const age = 25;
const address = "กรุงเทพมหานคร";

const customer = {
    customerName,
    age,
    address,
    showData() {
        console.log("ข้อมูลลูกค้าชื่อว่า =" + customerName);
    }
}

customer.showData();