import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
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
        <NavLink to="/prodi/create" className="btn btn-primary mb-3">
          Tambah
        </NavLink>
        <table className="table">
          <thead>
            <tr>
              <th>Nama Prodi</th>
              <th>Kaprodi</th>
              <th>Singkatan</th>
              <th>Fakultas</th>
            </tr>
          </thead>
          <tbody>
            {prodi.map((data) => (
              <tr key={data.id}>
                <td>{data.nama}</td>
                <td>{data.kaprodi}</td>
                <td>{data.singkatan}</td>
                <td>{data.fakultas.nama}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
