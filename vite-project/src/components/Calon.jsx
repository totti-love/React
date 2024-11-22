export default function Calon({nama, perolehansuara, onClick}){
    return(
        <>
            <h1>{nama}</h1>
            <h1>Suara : {perolehansuara}</h1>
            <button onClick={onClick}>COBLOS</button>
        </>

    )
}