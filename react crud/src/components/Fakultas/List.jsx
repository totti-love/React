import React, { useEffect, useState } from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; //import SweerAlert2
export default function List() {
  //state fakultas
  const [fakultas, setFakultas] = useState([]);

  useEffect(() => {
    axios
      .get("https://academic-mi5a.vercel.app/api/api/fakultas")
      .then((response) => {
        console.log(response);
        setFakultas(response.data.data);
      });
  }, []);

  const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! Fakultas: ${nama}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan jika dikonfirmasi
        axios
          .delete(`https://academic-mi5a.vercel.app/api/api/fakultas/${id}`)
          .then((response) => {
            // Hapus fakultas dari state setelah sukses dihapus dari server
            setFakultas(fakultas.filter((f) => f.id !== id));
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
      <h2>List Fakultas</h2>
      <NavLink to="/fakultas/create" className="btn btn-primary mb-3">
        Tambah
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Singkatan</th>
            <th>Dekan</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {fakultas.map((data) => (
            <tr key={data.id}>
              <td>{data.nama}</td>
              <td>{data.singkatan}</td>
              <td>{data.dekan}</td>
              <td>
              <NavLink
                  to={`/fakultas/edit/${data.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </NavLink>
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