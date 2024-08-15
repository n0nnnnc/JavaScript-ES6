// splice & slice
// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่)
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย - 1)

const data = [10, 20, 30, 40, 50];
console.log(data);
const lastdata = data.slice(1, 3); // 1, 2 [20, 30]
console.log(lastdata);