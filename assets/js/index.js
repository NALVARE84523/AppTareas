$('.toggle').click(function(){
    $('.formulario').animate({
        height:"toggle",
        'padding-top': 'toggle',
        'padding-bottom':'toggle',
        opacity: 'toggle'
    }, "slow");
})


document.getElementById('formTask').addEventListener('submit', guardarUsuario);

function guardarUsuario(e){
    let usuario = (document.getElementById('usuario').value);
    let contraseña = (document.getElementById('contraseña').value);
    let correo = (document.getElementById('correo').value);
    let telefono = (document.getElementById('telefono').value);

    const registro ={
        usuario,
        contraseña,
        correo,
        telefono
};

if (localStorage.getItem('registros') === null) {
    let registros = [];
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));


}else{
    window.location.assign('listaDeTareas.html')
}

e.preventDefault();



}
