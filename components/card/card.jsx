const Card = ({ children }) => {
    return (
        <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
           { children }
        </div>
    )
}

export default Card