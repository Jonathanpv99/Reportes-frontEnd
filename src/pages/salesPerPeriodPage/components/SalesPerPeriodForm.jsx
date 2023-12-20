
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const SalesPerPeriodForm = () => {

    const [error, setError] = useState( true );

    const { register, handleSubmit, formState: {
        errors
    }} = useForm();

    const onSubmit = handleSubmit( ( data ) =>{
        if( data.product == 0){
            setError( false );
            setTimeout(function() {
                setError( true )
              }, 4000);
        }
        console.log( data );
        console.log( data )
    })

    return (
        <div className="m-10 bg-azul rounded-xl  text-center ">
            <h1 className='text-2xl font-bold pt-3'>
                Sales Per Period
            </h1>
            <form onSubmit={ onSubmit } 
                className='flex flex-row justify-center gap-32 p-10'
            >
                <div className='flex flex-col'>
                    <label> Initial Date </label>
                    <input 
                        { ...register('initialdate', { required: true})}
                        type="date"
                        className='w-full px-4 py-2 rounded-md my-2 text-black'
                    />
                    {
                        errors.initialdate && (
                            <p className='text-red-500'>Initial Date is required</p>
                        )
                    }
                </div>
                <div className='flex flex-col'>
                    <label> Final Date </label>
                    <input 
                        { ...register('finaldate', { required: true})}
                        type="date"
                        className='w-ful px-4 py-2 rounded-md my-2 text-black'
                    />
                    {
                        errors.finaldate && (
                            <p className='text-red-500'>Final Date is required</p>
                        )
                    }
                </div>
                <div className='flex flex-col'>
                    <label> Product </label>
                    <select
                        { ...register('product' )}
                        className='w-full px-4 py-2 rounded-md my-2 text-black'
                    >
                        <option value="0">Select An Option</option>
                        { }

                    </select>
                    { error ? null : <p className='text-red-500 mt-2'> Select a Valid Option</p>}
                </div>
            
                <button type='submit'  className='bg-gray-400 rounded-md max-h-10 mt-9 px-2' >
                    Accept
                </button>
            </form>

        </div>
    )
}

export default SalesPerPeriodForm;