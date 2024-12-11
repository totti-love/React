 import React, { useEffect, useState } from "react"
import axios from "axios"
export default function List() {
    const [mahasiswa, setMahasiswa] = useState([]);
    useEffect(() => {
        axios
            .get("https://academic-mi5a.vercel.app/api/api/mahasiswa")
            .then((response) => {
                console.log(response)
                setMahasiswa(response.data.data)
            })
    }, [])

    return (
      <>
        <h2>List Mahasiswa</h2>
        <table className="table">
          <thead>
            <tr>
              <th>NPM</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Tanggal lahir</th>
              <th>Tempat lahir</th>
              <th>HP</th>
              <th>Alamat</th>
              <th>Prodi</th>
              <th>Fakultas</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((data) => (
              <tr key={data.id}>
                <td>{data.npm}</td>
                <td>{data.nama}</td>
                <td>{data.email}</td>
                <td>{data.tanggal_lahir}</td>
                <td>{data.tempat_lahir}</td>
                <td>{data.hp}</td>
                <td>{data.alamat}</td>
                <td>{data.prodi.nama}</td>
                <td>{data.prodi.fakultas.nama}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
