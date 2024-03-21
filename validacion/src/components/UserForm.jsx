import { useReducer } from "react";

//Estado inicial del formulario con valores iniciales y errores iniciales para cada campo
const initialState = {
    firstName: {
        value: '',
        error: null
    },

    lastName: {
        value: '',
        error: null
    },

    email: {
        value: '',
        error: null
    }
};

//Función reductora que recibe el estado actual y una acción, y devuelve el nuevo estado
function reducer(state, action) {
   switch(action.type) {
    case 'CHANGE':
        return {
            ...state,
            [action.field]: {
                ...state[action.field],
                value: action.payload, //Actualiza el valor del campo
                error: validate(action.field, action.payload) //Ejecuta la validacion para el campo actual
            }
        };
        default:
            return state;
   }
}

//Funcion para validar los campos del formulario
function validate(field, value) {
    switch(field) {
        case 'firstName':
            return value.trim() === '' ? 'El nombre es requerido' : null; //Si el campo esta vacio, devuelve un mensaje de error
        case 'lastName':
            return value.trim() === '' ? 'El apellido es requerido' : null; //Si el campo esta vacio, devuelve un mensaje de error
        case 'email':
            return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'El email no es válido' : null; //Si el email no es valido, devuelve un mensaje de error
        default:
            return null;
    }
}

//Componente principal del formulario
export default () => {
    //Usa el hook useReducer para manejar el estado del formulario
    const [state, dispatch] = useReducer(reducer, initialState);

    //Funcion para manejar el cambio de los campos del formulario
    function handleChange(e) {
        const {name, value} = e.target;
        //Dispara la accion de cambio con el tipo 'CHANGE', el campo afectado y su nuevo valor
        dispatch({
            type: 'CHANGE',
            field: name,
            payload: value
        });
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label><br />
                    <input className="content-input" type="text" name="firstName" value={state.firstName.value} onChange={handleChange} />
                    {state.firstName.error && <p>{state.firstName.error}</p>}
                </div>

                <div>
                    <label>Last Name</label><br />
                    <input className="content-input" type="text" name="lastName" value={state.lastName.value} onChange={handleChange}/>
                    {state.lastName.error && <p>{state.lastName.error}</p>}
                </div>

                <div>
                    <label>Email</label><br />
                    <input className="content-input" type="text" name="email" value={state.email.value} onChange={handleChange}/>
                    {state.email.error && <p>{state.email.error}</p>}
                </div>

                {/*Boton de submit deshabilitado si hay algun campo con error*/}
                <button className="btn-submit" disabled={Object.values(state).some(field => field.error) || 
                    Object.values(state).some(field => field.value === '')}>
                    Sumbit
                </button>
            </form>
        </div>
    )
}