import React from 'react';
import { useForm, Controller} from 'react-hook-form'

function CrearUsuario() {
    const { control, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://654acfad5b38a59f28ee3f86.mockapi.io/api/users', {
            method: 'POST' ,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSOn.stringify(newUser),
        })
        .then ((response) => {
            if (response.ok) {
                console.log('Se creo el usuario con exito');
            } else {
                console.error('Ocurrio un error al creal el usuario')
            }
        })
        .catch((error) => {
            console.error('Error', error)
        });
        }
        }

        console.log(data);
    

    return(
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='Formulario'>
            <div>
                <label>Nombre :</label>
                <Controller
                name="nombre"
                control=""
                defaultValues=""
                render={({field}) => <input {...field} />}
                />
            </div>
            <div>
            <label>Email :</label>
                <Controller
                name="email"
                control=""
                defaultValues=""
                render={({field}) => <input {...field} />}
                />
            </div>
            <div>
            <label>Celular:</label>
                <Controller
                name="celular"
                control=""
                defaultValues=""
                render={({field}) => <input {...field} />}
                />
            </div>
            {error.nombre && <p>No ingresaste el nombre</p>}
            {error.email && <p>No ingresaste el nombre</p>}
            {error.celular && (
                <p>El celular tiene que tener 9 digitos</p>
            )}
            <button>Crear Usuario</button>
            </form>
        </div>
    )

    
export default CrearUsuario
    
    
    
