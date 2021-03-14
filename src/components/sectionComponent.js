const sectionComponent = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            {props.children}
        </>
    )
}

export default sectionComponent;
