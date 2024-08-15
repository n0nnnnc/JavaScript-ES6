// Array Reduce

const cart = [
    { name:"กระเป๋า", price: 2000 },
    { name:"หนังสือ", price: 5000 },
    { name:"กล้องถ่ายรูป", price: 5000 },
];

// array.reduce((ค่าที่ถูกประมวลผล, e) => {},ค่าเริ่มต้น) // value = 0
const summation = cart.reduce((value, e) => e.price + value, 0);
console.log(`ลูกค้าต้องชำระเงิน = ${summation} บาท`);
