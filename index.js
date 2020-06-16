// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.


// const nome3 = `Diego e ${nome}` // permite a adição de variáveis dentro da string (${})

// ARRAY - Conjunto de Objetos|variáveis
const alunosDaTurmaA = [
    {
        nome: "Junior",
        nota: 1.8
    },
    {
        nome: "Mayk",
        nota: 10
    },
    {
        nome: "Diego",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 0
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
            console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

