
const Name = ({ name, fgcolor, bgcolor }) => {
    return (
        <div className="center-text-m0">
            <h2 style={{
                color: fgcolor,
                backgroundColor: bgcolor,
            }}>
                {name}
            </h2>
        </div>
    )
}

export default Name
