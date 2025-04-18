import React from 'react'

export const DashboardApp = ({tipoUsuario}) => {

    switch (tipoUsuario) {
        case 'admin':
            return <h1>Bienvenido administrado</h1>
            break;
        case 'infra':
            return <h1>Bienvenido infraestructura</h1>
            break;
        case 'dev':
            return <h1>Bienvenido developer</h1>
            break;

        default:
            return <h1>Recuerde logearse para ingresar</h1>
            break;
    }
}
