var num =  [5, 8, 2, 9, 3]


num.sort()
num.push(1,7,6,8)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(`O terceiro valor do vetor é ${num[2]}`)

console.log("___________________")
for (c = 0; c< num.length; c++) {
    console.log(`A ${c}º posição do vetor num é: ${num[c]}`)
    
}


let pos = num.indexOf(8)
console.log(`o valor 8 esta na posição ${pos}`)