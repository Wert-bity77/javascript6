let arr = ['olma', 'anor', 'banan', 'olcha']

console.log(arr);
let savol1 = alert(`Boshlanishda arryning uznligi: ${arr.length}`)

let savol2 = confirm(`siz arryngizdan ortiqchasini olib tashllamoqchimisiz`)



if(savol2 == true){
    arr.pop()
    console.log(arr);
}else{
    console.log(arr);
}
 