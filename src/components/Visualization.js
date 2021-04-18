import '../App.css'
const Visualization = ({visualization, className, fromCanvas}) => {
    const {id, name, vis} = visualization;
    return <div className={className} id={fromCanvas ? id : 'image-' + id}>
        <h3>{name} - {fromCanvas ? '(to canvas)' : '(to image)'}</h3>
        <p>{vis}</p>
    </div>
}

export default Visualization;