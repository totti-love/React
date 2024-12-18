import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
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
    const handleDelete = (id, nama) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this! Mahasiswa: ${nama}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Lakukan penghapusan jika dikonfirmasi
          axios
            .delete(`https://academic-mi5a.vercel.app/api/api/mahasiswa/${id}`)
            .then((response) => {
              // Hapus fakultas dari state setelah sukses dihapus dari server
              setMahasiswa(mahasiswa.filter((f) => f.id !== id));
              // Tampilkan notifikasi sukses
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
            })
            .catch((error) => {
              console.error("Error deleting data:", error); // Menangani error
              Swal.fire(
                "Error",
                "There was an issue deleting the data.",
                "error"
              );
            });
        }
      });
    };
    return (
      <>
        <h2>List Mahasiswa</h2>
                <NavLink to="/mahasiswa/create" className="btn btn-primary mb-3">
                  Tambah
                </NavLink>

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
                <td>
                  <button
                    onClick={()=> handleDelete(data.id,data.nama)}
                    className="btn btn-danger">Hapus
                  </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
