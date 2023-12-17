import DevelopCard from "./components/DevelopCard";
import Develops from "./Develops";

const TeamPage = () => {

    const instanciaDevelops = new Develops();

    const develops = instanciaDevelops.array;

    return (
        <>
            <div className=" flex justify-center items-center">
                <h1 className="text-2xl font-bold">Software Developers</h1>
            </div>
            
            <div className="mt-3 flex justify-around items-center bg-azul-m rounded-lg">
                {develops.map( (develop) => 
                    <DevelopCard 
                        key={ develop.id } 
                        photo={ develop.photo } 
                        name={ develop.name } 
                        lastName={ develop.lastName } 
                        email={ develop.email } 
                        phone={ develop.phone } 
                        github={ develop.github }
                        linkedin={ develop.linkedin }
                    />
                )}
            
            </div>
        </>
        
    )
}

export default TeamPage;