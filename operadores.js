/*=========================================

    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    <=      Menor igual a
    >=      Maior igual a 
    ==      Igual a 
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

=========================================*/

// // DESAFIO 01
// const idade = 16
// // verificar se a pessoa é maior igual a 18 anos
// // se sim, deixar entrar, senão, bloquear a a entrada
// if (idade >= 18) {
//     console.log('Deixar entrar')
// } else {
//     console.log('Bloquear a entrada')
// }

// // se a pessoa tiver 17 anos
// // avisar para voltar quando fizer 18 anos
// if (idade === 17) {
//     console.log('Volte quando tiver 18')
// }

/*=================================================================================================

    OPERADORES DE LÓGICA

    &&     "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
    ||     "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.
    !      "NÃO" Nega uma condição.

=================================================================================================*/

// DESAFIO 01
const idade = 18
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, senão, bloquear a a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

/*====================================
    OPERADORES ARITIMÉTICOS

    *     Multiplicação
    /     Divisão
    %     Resto da divisão
    +     Adição
    -     Subtração

====================================*/

