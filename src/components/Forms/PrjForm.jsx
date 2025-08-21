"use client"

import { useState } from "react"
import { HiOutlinePhotograph } from "react-icons/hi"
import "./contact-form.css"

export default function PrjForm() {
    const [selectedFiles, setSelectedFiles] = useState([])

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setSelectedFiles(files)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        console.log("Form data:", data)
        console.log("Files:", selectedFiles)

        alert("Form submitted! Check console for details.")
    }

    return (
        <div className="form-container-prj">
            <form onSubmit={handleSubmit}>
                {/* Contact Information Section */}
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="nomComplet" className="form-label">
                            Nom complet <span className="required">*</span>
                        </label>
                        <input type="text" id="nomComplet" name="nomComplet" required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email <span className="required">*</span>
                        </label>
                        <input type="email" id="email" name="email" required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone" className="form-label">
                            Téléphone
                        </label>
                        <input type="tel" id="telephone" name="telephone" className="form-input" />
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

                <button type="submit" className="submit-button">
                    Envoyer
                </button>
            </form>
        </div>
    )
}
