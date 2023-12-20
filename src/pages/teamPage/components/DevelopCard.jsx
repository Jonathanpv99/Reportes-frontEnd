import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

const DevelopCard = ( props) => {

    const { photo, name, lastName, email, phone, github, linkedin} = props;

    return (
        <div className="m-2 flex flex-col gap-3 p-2  font-medium rounded-3xl p-5 bg-azul">
            <div>
                <img className="max-w-xs rounded-full"
                src={ `../../../../${ photo }` }alt="photo" />
            </div>
            <div className="flex justify-center items-center mt-4">
                <div className="felx flex-row mb-2 text-justify">
                    <h1> Name: { name }</h1>
                    <h1>Surnames: { lastName }</h1>
                    <h1>Email: { email }</h1>
                    <h1>Phone Number: +52 { phone }</h1>
                    <h1>GitHub User: { github }</h1>
                    <a className="text-gray-400" href={ linkedin }>
                        Go to Linkedin...
                        <FontAwesomeIcon  icon={ faArrowTurnUp }/>
                    </a>
                    <hr className="border-naranja"/>
                </div>
            </div>

        </div>
    )
}

export default DevelopCard;