const nomes = ['daniel', 'natalia', 'juliana', 'paula', 'janaina', 'luana']

const nomesComIndex = nomes.map( (pessoa, index) =>{
   console.log(index +" - "+ pessoa)
   return pessoa + index
})

console.log(nomesComIndex)