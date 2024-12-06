import React, { useEffect, useState } from "react"
import axios from "axios"
export default function List(){
    const [prodi, setProdi] = useState([]);
    useEffect(() => {
        axios
            .get("https://academic-mi5a.vercel.app/api/api/prodi")
            .then((response) => {
                console.log(response)
                setProdi(response.data.data)
            })
    }, [])

    return (
        <>
            <h2>List Program Studi</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama Prodi</th>
                        <th>Singkatan</th>
                        <th>Kaprodi</th>
                        <th>Fakultas</th>

                    </tr>
                </thead>
                <tbody>
                    {prodi.map((data) => (
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                            <td>{data.singkatan}</td>
                            <td>{data.kaprodi}</td>
                            <td>{data.fakultas.nama}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
