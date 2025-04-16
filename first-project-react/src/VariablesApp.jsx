const string = 'Curso de react' // se ve tal cual el string
const string1 = "digital house"
const string2 = `este es un ${string} de ${string1}` // se ve una cadena de texto
const num = 1.5     // se ve como un numero
const array = ['html','css','js','react'] // se ve como texto todo junto, pero en el htmt está separado
const boolean = true // no se ve ni aparece en el html
const foo = () => 'devuelve un string' // si no la ejecuto en el componente rompe la app
const object = {name: 'javier', job: 'programador'} // no funciona y no se ve el objeto
const set = new Set([1,2,3,4])  //  es una excepcion ya que aunque sea un OBJ lo mismo muestra el derivado string o array
const date = new Date()    // no funciona y no se ve el objeto


export const VariablesApp = () => {
  return ( // llamando una variable
    <div>
        {string}
        <br />
        {string1}
        <br />
        {string2}
    </div>
  )
}
