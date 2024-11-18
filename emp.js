let eployees=[
    {eid:101,ename:'rahul',gender:'male'},
    {eid:102,ename:'nanda',gender:'male'},
    {eid:103,ename:'sneha',gender:'female'},
    {eid:104,ename:'priya',gender:'female'}
    ]
    for(let emp of eployees){
        if(emp.gender=='male'){
            console.log(emp)
        }
    }
// ==============================================
// print no even numbers  in the given array?
let array=[20,230,12,40,45,,55,]
let even_count=0;
for (let num of array){
    if(num%2===0){
        even_count++;
    }
}
console.log(even_count)
// ===============================================
// print no of even numbers and odd numbers in the given array?
let arr=[12,2,3,4,5,6,7,34,212,343,21]
let eveen_count=0
let odd_count=0
for (num of arr){
    if(num%2===0){
        eveen_count++;
    }
    else{
        odd_count++;
    }
}
console.log('even numbers='+eveen_count)
console.log('odd numbers='+odd_count)
// ================================================
let stu=[
    {eid:101,ename:'nanda',age:20,gender:'male'},
    {eid:102,ename:'kuar',age:21,gender:'female'}
]
let male_count=0;
let female_count=0;
for (empl of stu){
    if(empl.gender=='female'){
        female_count++;
    }
    if(empl.gender=='male'){
        male_count++;
    }
}
console.log('no of male stu:',male_count)
console.log('no of female stu:',female_count)
// ================================================
function add(a,b){
    let c=10
    console.log(a+b+c)
}
add(10,20);
add(10,1);
add(13,13,33);
add(1);
// ===========================================
