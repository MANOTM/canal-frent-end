"use client"

import { useState } from "react"
import { HiOutlinePhotograph } from "react-icons/hi"
import "./contact-form.css"
import api from "../../api/axios"

export default function PrjForm() {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setSelectedFiles(files)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");

        if (!name || !email || selectedFiles.length === 0) {
            setMsg("Name, email, and image are required");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        if (phone) formData.append("tel", phone);

        formData.append("img", selectedFiles[0]);

        try {
            setLoading(true);
            const res = await api.post("/commande", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMsg("Commande submitted successfully ✅");

            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setSelectedFiles([]);


        } catch (err) {
            console.error(err);
            const apiMsg =
                err?.response?.data?.message || "Failed to submit commande. Try again.";
            setMsg(apiMsg);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="form-container-prj">
            <form onSubmit={handleSubmit}>
                {/* Contact Information Section */}
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="nomComplet" className="form-label">
                            Nom complet <span className="required">*</span>
                        </label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} id="nomComplet" name="nomComplet" required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email <span className="required">*</span>
                        </label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone" className="form-label">
                            Téléphone
                        </label>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} id="telephone" name="telephone" className="form-input" />
                    </div>
                </div>

                {/* File Upload Section */}
                <div className="form-section">
                    <label className="form-label">
                        Photos de référence <span className="required">*</span>
                    </label>

                    <div className="file-upload-container">
                        <input
                            type="file"
                            id="photos"
                            multiple
                            accept="image/*"
                            required
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        <div className="file-upload-area">
                            <div className="upload-content">
                                <div className="upload-icon">
                                    <HiOutlinePhotograph color="#222" />
                                </div>
                                <div>
                                    <p className="upload-text">Cliquez pour ajouter des photos</p>
                                    <p className="upload-subtext">Sujets, inspirations, ambiances...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedFiles.length > 0 && (
                        <div className="file-list">
                            <p className="file-list-title">
                                {selectedFiles.length} fichier{selectedFiles.length > 1 ? "s" : ""} sélectionné
                                {selectedFiles.length > 1 ? "s" : ""}:
                            </p>
                            <ul className="file-list-items">
                                {selectedFiles.map((file, index) => (
                                    <li key={index} className="file-list-item">
                                        {file.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {msg && <p className="msg-form">{msg}</p>}
                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? " Envoi en cours..." : "Envoyer"}
                </button>
            </form>
        </div>
    )
}
