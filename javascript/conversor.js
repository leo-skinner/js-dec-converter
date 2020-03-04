var btnConverter = document.querySelector('#btn-converter')
console.log(btnConverter)
btnConverter.addEventListener("click", function(event){
    event.preventDefault()

    decimalTXT = document.querySelector('#dec').value
    numDec = Number(decimalTXT )
    
    binario = numDec.toString(2)
    hexadec = numDec.toString(16)

    //testes
    console.log(numDec)
    console.log(binario)
    console.log(hexadec)
    
    document.querySelector('#span-bin-id').innerHTML = `Binário: ${binario}`
    document.querySelector('#span-hexa-id').innerHTML = `Hexadecimal: ${hexadec}`
 
})