//procurar botao
document.querySelector("#add-time").addEventListener('click', cloneField);
//quando clicar no botao

//executar ação
function cloneField(){
//duplicar campos
    const NewFields = document.querySelector('.schedule-item').cloneNode(true);
//limpár o filds
    const fields = NewFields.querySelectorAll('input')
// para cada campo
    fields.forEach(function(field){
        //pegar o campo e limpa
        field.value =""
    });
//colocar na pagina
    document.querySelector('#schedule-items').appendChild(NewFields);
}
