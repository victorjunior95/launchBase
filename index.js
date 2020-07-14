// Criar um programa que calcula a média
// das turmas de students e envia
// mensagem do cálculo da média.


// const name3 = `Diego e ${name}` // permite a adição de variáveis dentro da string (${})

// ARRAY - Conjunto de Objetos|variáveis
const classA = [
    {
        name: "Mayk",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student", 
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 0
    },
    {
        name: "Novo Aluno",
        grade: 5
    }
]

function calculateAverage(students) {
    // return (students[0].grade + students[1].grade + students[2].grade) / 3
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    
    const average = sum / students.length

    return average
}


function sendMessage(average, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (average > 5) {
            console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good!`)
    }
}

// Marcar student como flunked se a grade
// for menor que 5
// e, também enviar uma mensagem

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

// ^^ códigos/algorítmos
// execução >>
const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsFlunkeds(classA)
studentsFlunkeds(classB)