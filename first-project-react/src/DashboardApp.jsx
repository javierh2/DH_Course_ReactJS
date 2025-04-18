import React from 'react'

const UsuarioLogeado = () =>{
    return(
        <div>
            <h1>Bienvenido</h1>
            <p>Usuario logeado</p>
        </div>
    )
}

const UsuarioNoLogeado = () =>{
    return(
        <div>
            <h1>ADIOS</h1>
            <p>para ingresar porfavor logearse</p>
        </div>
    )
}

export const DashboardApp = ({isLogged}) => {
    return isLogged ? <UsuarioLogeado/> : <UsuarioNoLogeado/>
}
