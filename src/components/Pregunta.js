import React from 'react';
import { Fragment, useState } from 'react/cjs/react.production.min';
import Error from './Error';

const Pregunta = () => {
    //Definir estado
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardadError] = useState(false);

    // Funcion que lea el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Submit para el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // VALIDAR
        if(cantidad < 1 || isNaN (cantidad) ) {
            guardadError(true);
            return;
        }

        // si se pasa de la validacion
        guardadError(false);

    }


    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto"/> : null}

            <form onSubmit={agregarPresupuesto}>
                

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;