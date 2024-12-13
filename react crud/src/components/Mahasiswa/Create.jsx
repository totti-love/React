/* eslint-disable no-unused-vars */
// src/components/mahasiswa/Create.jsx
import React, { useState, useEffect } from "react"; // Import React dan hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateMahasiswa() {
  // Inisialisasi state untuk menyimpan data mahasiswa
  const [npm, setNpm] = useState("");
  const [namaMahasiswa, setNamaMahasiswa] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [prodiId, setProdiId] = useState("");
  const [prodiList, setProdiList] = useState([]);
  // Inisialisasi state untuk menyimpan pesan error
  const [error, setError] = useState("");
  // Inisialisasi state untuk menyimpan pesan sukses
  const [success, setSuccess] = useState("");

  // Mengambil daftar fakultas dari API saat komponen dimuat
  useEffect(() => {
    const fetchProdi = async () => {
      try {
        const response = await axios.get(
          "https://academic-mi5a.vercel.app/api/api/prodi"
        );
        setProdiList(response.data.data); // Simpan data fakultas ke dalam state
      } catch (error) {
        setError("Failed to fetch prodi data");
      }
    };

    fetchProdi(); // Panggil fungsi untuk mengambil data fakultas
  }, []); // Kosongkan array dependensi agar hanya dijalankan sekali saat komponen dimuat

  // Fungsi yang akan dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah form disubmit
    setError(""); // Reset pesan error sebelum proses
    setSuccess(""); // Reset pesan sukses sebelum proses

    // Validasi input: jika namamahasiswa atau fakultasId kosong, set pesan error
    if (npm.trim() === "" || prodiId.trim() === "") {
      setError("NPM are required");
      return;
    }
    if (namaMahasiswa.trim() === "") {
      setError("Nama mahasiswa are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (tanggalLahir.trim() === "") {
      setError("Tanggal Lahir are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (tempatLahir.trim() === "") {
      setError("Tempat Lahir are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (email.trim() === "") {
      setError("Email are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (hp.trim() === "") {
      setError("No HP are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (alamat.trim() === "") {
      setError("Alamat are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }

    try {
      // Melakukan HTTP POST request untuk menyimpan data mahasiswa
      const response = await axios.post(
        "https://academic-mi5a.vercel.app/api/api/mahasiswa", // Endpoint API yang dituju
        {
          npm: npm,
          nama: namaMahasiswa, // Data nama mahasiswa
          tanggal_lahir: tanggalLahir,
          tempat_lahir: tempatLahir,
          email: email,
          hp: hp,
          alamat: alamat,
          prodi_id: prodiId,
        }
      );

      // Jika response HTTP status 201 (Created), berarti berhasil
      if (response.status === 201) {
        // Tampilkan pesan sukses jika mahasiswa berhasil dibuat
        setSuccess("mahasiswa created successfully!");
        setNpm("");
        setNamaMahasiswa(""); // Kosongkan input form setelah sukses submit
        setTanggalLahir("");
        setTempatLahir("");
        setEmail("");
        setHp("");
        setAlamat("");
        setProdiId(""); // Kosongkan dropdown setelah sukses submit
      } else {
        // Jika tidak berhasil, tampilkan pesan error
        setError("Failed to create mahasiswa");
      }
    } catch (error) {
      // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
      setError("An error occurred while creating mahasiswa");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create mahasiswa</h2>
      {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        {/* Tangani event submit dengan handleSubmit */}
        <div className="mb-3">
          <label className="form-label">NPM</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="npm"
            value={npm} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setNpm(e.target.value)} // Update state saat input berubah
            placeholder="Enter NPM" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama mahasiswa</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="namaMahasiswa"
            value={namaMahasiswa} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setNamaMahasiswa(e.target.value)} // Update state saat input berubah
            placeholder="Enter Mahasiswa Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tanggal Lahir</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="date"
            className="form-control"
            id="tanggalLahir"
            value={tanggalLahir} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setTanggalLahir(e.target.value)} // Update state saat input berubah
            placeholder="Enter Tanggal Lahir" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tempat Lahir</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="tempatLahir"
            value={tempatLahir} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setTempatLahir(e.target.value)} // Update state saat input berubah
            placeholder="Enter Tempat Lahir" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="email"
            value={email} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
            placeholder="Enter Email" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">No HP</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="hp"
            value={hp} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setHp(e.target.value)} // Update state saat input berubah
            placeholder="Enter No HP" // Placeholder teks untuk input
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Alamat</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text-area"
            className="form-control"
            id="alamat"
            value={alamat} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setAlamat(e.target.value)} // Update state saat input berubah
            placeholder="Enter Address" // Placeholder teks untuk input
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Program Studi</label>
          {/* Dropdown untuk memilih fakultas */}
          <select
            className="form-select"
            id="prodiId"
            value={prodiId} // Nilai dropdown disimpan di state fakultasId
            onChange={(e) => setProdiId(e.target.value)} // Update state saat pilihan berubah
          >
            <option value="">Select Program Studi</option>
            {prodiList.map((prodi) => (
              <option key={prodi.id} value={prodi.id}>
                {/* Set key dan value untuk masing-masing fakultas */}
                {prodi.nama} {/* Nama fakultas sebagai teks di dropdown */}
              </option>
            ))}
          </select>
        </div>
        {/* Tombol submit dengan class bootstrap */}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
