
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const ProdutsPerQuarterForm = () => {

    const [error, setError] = useState( true );

    const { register, handleSubmit} = useForm();

    const onSubmit = handleSubmit( ( data ) =>{

        if( data.date == 0 || data.quarter == 0){
            setError( false );
            setTimeout(function() {
                setError( true )
              }, 4000);
        }
        console.log( data );
    });

    return (
        <>
            <div className=" flex justify-center items-center pt-5">
                <h1 className="text-2xl font-bold">Products Per Quarter</h1>
            </div>
            <div className="m-10 bg-azul rounded-xl   text-center">
                
                <form onSubmit={ onSubmit } 
                    className='flex flex-row justify-center gap-32 pl-10 pr-10 pb-5'
                >
                    <div className='flex flex-col'>
                        <label> search year </label>
                        <select
                            { ...register('date', )}
                            className='w-full px-4 py-2 rounded-md my-2 text-black'
                        >
                            <option value="0">Select An Option</option>
                            { }

                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label> Quarter </label>
                        <select
                            { ...register('quarter')}
                            className='w-full px-4 py-2 rounded-md my-2 text-black'
                        >
                            <option value="0">Select An Option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            
                        </select>
                        
                    </div>
                
                    <button type='submit'  className='bg-gray-400 rounded-md max-h-10 mt-9 px-2' >
                        Accept
                    </button>
                </form>
                { error ? null : <p className='text-red-500 mr-48 pb-4'> Select a Valid Option</p>}
            </div>
        </>
        
    )
}

export default ProdutsPerQuarterForm;