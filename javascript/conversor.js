var btnConverter = document.querySelector('#btn-parse')
console.log(btnConverter)
btnConverter.addEventListener("click", function(event){
    event.preventDefault()

    decimalTXT = document.querySelector('#dec').value
    numDec = Number(decimalTXT )
    
    binary = numDec.toString(2)
    hexadec = numDec.toString(16)

    //testes
    console.log(numDec)
    console.log(binary)
    console.log(hexadec)
    
    document.querySelector('#span-bin-id').innerHTML = `Binary: ${binary}`
    document.querySelector('#span-hexa-id').innerHTML = `Hexadecimal: ${hexadec}`
 
})