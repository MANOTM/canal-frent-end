import { useEffect, useState } from "react"
import api from "../../api/axios"

const categories = ["Animal", "Personnage", "Paysage", "Commande Personnalisée"]

function ArtFilter({ setLoading, setError, setArticles, setTotalPages ,currentPage}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [availableOnly, setAvailableOnly] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [totalWorks,setTotalWorks] = useState(26)

    const handleCategoryToggle = (category) => {
        setSelectedCategories(category)
    }

    const clearFilters = () => {
        setSearchTerm("")
        setAvailableOnly(false)
        setSelectedCategories([])
    }
    useEffect(() => {
            const load = async () => {
                try {
                    setLoading(true);
                    setError("");
    
                    const res = await api.get("/article", { params: { page: currentPage,category: selectedCategories,search:searchTerm} });
    
                    // Try common response shapes
                    const payload = res.data || {};
                    const items =
                        payload.articles ?? []; // prefer data, fallback to articles
                    const pages = payload.totalPages ?? 1;
    
                    setArticles(items);
                    setTotalPages(Math.max(1, pages));
                    setTotalWorks(payload.totalArticles ?? 0);
                } catch (e) {
                    console.error(e);
                    setError("Failed to load articles");
                } finally {
                    setLoading(false);
                }
            };
    
            load();
        }, [selectedCategories,searchTerm]);

    return (
        <>
            {/* Search Input */}
            <div className="search-container">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Available Only Checkbox */}
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="available-only"
                    checked={availableOnly}
                    onChange={(e) => setAvailableOnly(e.target.checked)}
                    className="checkbox"
                />
                <label htmlFor="available-only" className="checkbox-label">
                    Disponibles à la vente uniquement
                </label>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <h3 className="categories-title">CATÉGORIES</h3>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryToggle(category)}
                            className={`category-button ${selectedCategories.includes(category) ? "active" : ""}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
                <span className="results-count">
                    {totalWorks} sur {totalWorks} œuvres
                </span>
                <button onClick={clearFilters} className="clear-button">
                    Effacer les filtres
                </button>
            </div>

        </>
    )
}

export default ArtFilter