console.log("Hola mundo! desde la consola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Fronted Jr. | Diseñadora web')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Pasante en Administración | Estudiante de Contaduría')
    .pauseFor(2500)
    .start();
