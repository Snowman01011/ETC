import "../components/global.css"

function Button({ ButtonValue }: { ButtonValue: String}){
    return(
        <>
            <button 
                className=""
            >
                { ButtonValue }
            </button>
        </>
    )
}

export default Button