// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.


// const nome3 = `Diego e ${nome}` // permite a adição de variáveis dentro da string (${})

const aluno01 = 'Junior'
const notaAluno01 = 1.8

const aluno02 = 'Mayk'
const notaAluno02 = 10

const aluno03 = 'Diego'
const notaAluno03 = 2




const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}, parabéns!`)
} else {
    console.log('A média é menor que 5.')
}


