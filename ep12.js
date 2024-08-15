// การ Loop Array
// For loop, ForEach, ForOf

const data = [10, 20, 30, 40, 50];

// for(let i = 0; i < data.length; i++) {
//     if (data[i] >= 30) break;
//     console.log(`ลำดับที่ ${i} = ${data[i]}`);
// };

// data.forEach(e => {
//     console.log(`สมาชิกใน Array Data = ${e}`);
// });

for (const element of data) {
    if(element >= 30) break;
    console.log(`สมาชิก Array Data = ${element}`);
    
}