/* 

- Variavel
Pedacinho da mémoria do computador,
eu posso guardar o que eu quiser


- Função (não é função matematica)
Pedacinho do codigo que só executa
quando é chamado

Botão > For Clicado > Chamar a minha Função > ligar o som
document = HTML
querySelector (Selecionar ou pegar um item no HTML)
addEventListener sua vizinha fofoqueira (Ouvindo alguem e te contar quando algo acontecer)

*/
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

//Ligar o som 
botaoSom.addEventListener("click", ligarSom)

function ligarSom (){
    video.muted = false /* tocar o som */
}
//Mostrar o modal

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

    function mostrarModal(){
        modal.style.display = "block"
    }
    function esconderModal(){
        modal.style.display = "none"
    }

    

