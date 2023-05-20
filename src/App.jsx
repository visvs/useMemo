import { useMemo, useState } from 'react';


const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const [ counter, increment ]= useState( 1 );
    const [ show, setShow ] = useState(true);
    const myArray =  [0,2,3] //0 false 1 true

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);
    //&&  retorna el componente si es verdadero  ||

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizedValue }</h4>
           {/*  <h4>{ heavyStuff() }</h4> */}

            {show && <p>{'Valor que se oculta o muestra'}</p>}
            <button
                className="btn btn-primary"
                onClick={ () => increment(counter +1) }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
  }
