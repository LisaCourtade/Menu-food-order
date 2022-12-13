const Add = ({ meal, onClick }) => { 
    return (
    <button onClick={() => onClick(meal)} className="btn">
        Add
    </button>
    )

} 


export default Add