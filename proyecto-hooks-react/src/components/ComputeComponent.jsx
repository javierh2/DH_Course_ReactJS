import React, { use } from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

export const ComputeComponent = () => {

    const [show, setShow] = useState(true);

    const [numList, setNumList] = useState([2, 4, 6, 8]);

    const GetCompute = (numList) => {
        console.log('Calculando...');
        return numList.reduce((a, b) => a * b);
    }

    const addNumber = () => {
        setNumList([...numList, numList[numList.length - 1] + 2]);
    }

    const memorizedCompute = useMemo(() => GetCompute(numList), [numList]);

        return (
            <>
                <h2>Calculos: </h2>
                <h4>El calculo es: {memorizedCompute}</h4>
                {show && <h6>los numeros base son:{numList}</h6>}
                <hr />
                <button type="button" className="btn btn-info" onClick={() => { setShow(!show) }}>{show ? 'Ocultar!' : 'Calcular!'}</button>
                <button type="button" className="btn btn-danger" onClick={() => addNumber()}>Agregar más numeros a la lista</button>
            </>
        )
    }