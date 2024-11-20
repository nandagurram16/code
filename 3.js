function add(name,dob){
    let year=new Date().getFullYear()
    return year-dob;
}
console.log(add('kuamr',2003))
console.log(add('fd',3924))
// ==============================
// function cal_Age(name,dob){
//     let current_year = new Date().getFullYear();
//     return Name : ${name} - Age : ${current_year - dob}
// }

// let msg1  = cal_Age("Malavika M",1987)
// let msg2 = cal_Age("Sam",1984)
// let msg3 = cal_Age("Manju",1978)
// console.log(msg1) 
// console.log(msg2) 
// console.log(msg3)
// ===========================================================
// How to verify/check given array is empty or not?
let arr=[10,20,3,4,55,]
if(arr.length>0){
    console.log('not empty array')
}
else{
    console.log('empty array')
}
console.log(arr.length)
// ============================================================
// How to verify/check given object is empty or not?
let obj={
    eid:101,
    ename:'nanda'
}
let user={}
let num=[1,2,3,3]
// console.log(num.length)
// console.log(obj.length)
// console.log(user.length)
console.log(Object.keys(obj))
console.log(Object.keys(user))
console.log(Object.keys(obj).length)
console.log(Object.keys(user).length)
console.log(Object.keys(user).length>0)
console.log(Object.keys(obj).length>0)
// ========================================
let eid=[1,2,3,4,5]
eid.push(6)
console.log(eid)
// =================
let id=[12,4,24,24,32,434]
id.pop()
console.log(id)
id.unshift(100)
console.log(id)
id.shift()
console.log(id)
let new_id=id.slice(1,4)
console.log(new_id)
// ================================

