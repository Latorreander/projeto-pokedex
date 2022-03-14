/*
quando clicar no pokémon da listagem, temos que esconder o cartão atual aberto e mostrar o cartão correspondente ao que foi selecionado da listagem.

pra isso vamos trabalhar com dois elementos, a listagem e o cartão do pokémon:
1- listagem
2- cartão do pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokémons

 - remover a classe aberto só do cartão que está sendo mostrado para esconde-lo

 - ao clicar no pokémon da listagem pegamos o id desse pokémon para saber qual mostrar

 - remover a classe ativa que marca o pokémon selecionado

 - adicionar a classe ativo no pokémon da lista selecionada
*/



// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

const listaSelecaoPokemons =  document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(pokemonsCard);

