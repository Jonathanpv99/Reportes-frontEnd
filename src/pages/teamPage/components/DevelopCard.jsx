
const DevelopCard = ( props) => {

    const { photo, name, lastName, email, phone, github, linkedin} = props;

    return (
        <div className="m-2 flex flex-col gap-3 p-2  font-medium rounded-3xl p-5 bg-azul">
            <div>
                <img className="max-w-xs rounded-full"
                src={ `../../../../${ photo }` }alt="photo" />
            </div>
            <div className="felx flex-row gap-4 mb-2 text-center">
                <h1> Name: { name }</h1>
                <h1>Surnames: { lastName }</h1>
                <h1>Email: { email }</h1>
                <h1>Phone Number: +52 { phone }</h1>
                <h1>GitHub User: { github }</h1>
                <a className=" text-cyan-600" href={ linkedin }>Go to Linkedin</a>
            </div>

        </div>
    )
}

export default DevelopCard;