// Default Parameter
const getDataCustomer = (customerName, customerAddress = "กรุงเทพมหานคร") => {
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`;
    return address;
};

console.log(getDataCustomer("ก้องรักสยาม"));
console.log(getDataCustomer("โจโจ้","น่าน"));

