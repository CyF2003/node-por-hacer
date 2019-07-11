const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Actualiza el estado de la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}