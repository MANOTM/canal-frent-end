import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Stepped.css';
import api from '../../api/axios';

const shoose = ["Achat d'œuvre", "Collaboration", "Discussion artistique", "Commande personnalisée"];

function Stepped() {
    const [Shooser, setShooser] = useState({ "label": null, "steps": 0 });
    const [shoosedArt, setShoosedArt] = useState('');
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        Objet: "",
        message: "",
    });
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')
    const [btnValue, setBtnValue] = useState('Suivant')

    const [isSubmiting, setIsSubmiting] = useState({success: true, message: ''})



    const hundledatavalid = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

        console.log(formData);
        if (
            formData.fname.trim() !== "" &&
            formData.lname.trim() !== "" &&
            formData.email.trim() !== ""
        ) {

            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const stepVariants = {
        initial: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
        animate: { opacity: 1, x: 0 },
        exit: (dir) => ({ opacity: 0, x: dir > 0 ? -100 : 100 }),
    };

    useEffect(() => {

        const latestArticles = async () => {
            try {
                const response = await api.get(`/article/latest`);
                setArticles(response.data?.articles);
                setLoading(false)
            } catch (error) {
                throw error;
            }
        }

        latestArticles()
    }, [])
    useEffect(() => {
        const searchArticles = async (search) => {
            if (!search.trim()) {
                return
            }
            setLoading(true)
            try {
                const response = await api.get(`/article/search`, {
                    params: { search }, // sends ?search=...
                });
                setArticles(response.data);
                setLoading(false)
            } catch (error) {
                throw error;
            }
        }
        searchArticles(search)
    }, [search])

    useEffect(() => {
        const handelbutton = () => {
            if (Shooser.steps === 1 && Shooser.label == "Achat d'œuvre") {
                setBtnValue('Suivant')
                if (shoosedArt) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            } else if (Shooser.steps === 1 && Shooser.label !== "Achat d'œuvre") {
                setBtnValue('Suivant')
                if (formData.fname.trim() !== "" && formData.email.trim() !== "") {
                    setIsValid(true);
                }
                else {
                    setIsValid(false);
                }
            } else if (Shooser.steps === 2 && Shooser.label !== "Achat d'œuvre") {
                setBtnValue('Envoyer')
                if (formData.Objet.trim() !== "" && formData.message.trim() !== "") {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            } else if (Shooser.steps === 2 && Shooser.label == "Achat d'œuvre") {
                setBtnValue('Envoyer')
                if (formData.fname.trim() !== "" && formData.email.trim() !== "") {
                    setIsValid(true);
                }
                else {
                    setIsValid(false);
                }
            } else {
                setBtnValue('Suivant')
                setIsValid(false);
            }
        }
        handelbutton()
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmiting({success: true, message: ''})
        if (!isValid) return;

        // step navigation case
        if (btnValue !== "Envoyer") {
            setDirection(1); // going forward
            setShooser({ ...Shooser, steps: Shooser.steps + 1 });
            return;
        }

        // submit case
        try {
            // base payload
            const initData = {
                name: `${formData.fname} ${formData.lname}`.trim(),
                email: formData.email,
                phone: formData.phone,
                type: Shooser.label,
            };

            // decide payload shape based on chosen label
            const isAchat =
                Shooser?.label === "Achat d'œuvre" || Shooser?.label === "Achat d'oeuvre";

            const finalData = isAchat
                ? { ...initData, articleId: shoosedArt }
                : { ...initData, objet: formData.Objet, msg: formData.message };

            // optional: set a loading flag
            setLoading(true);

            const { data } = await api.post("/contact/new", finalData);

            // success handling
            setIsSubmiting({success: true, message: "Message envoyé avec succès !"})
            setShooser({ label: null, steps: 0 });
            setFormData({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                Objet: "",
                message: "",
            });
            setIsValid(false);
            setShoosedArt('');

        } catch (err) {
            setIsSubmiting({success: false, message: "Échec de l'envoi du message, veuillez réessayer."}) 
        } finally {
            setLoading?.(false);
        }
    };

    return (
        <div className="Stepped">
            <div className="stepped-count">
                <div className="nbr-count active-nbr">1</div>
                <div className={`bar- ${Shooser.steps > 0 && 'active-bar'}`}></div>
                <div className={`nbr-count ${Shooser.steps > 0 && 'active-nbr'}`}>2</div>
                <div className={`bar- ${Shooser.steps > 1 && 'active-bar'}`}></div>
                <div className={`nbr-count ${Shooser.steps > 1 && 'active-nbr'}`}>3</div>
            </div>

            {isSubmiting.message && <div className={`msg-submit ${!isSubmiting.success && 'error'}`}>{isSubmiting.message}</div>}

            <div className="mainone">
                <AnimatePresence mode="wait" custom={direction}>
                    {!Shooser.steps ? (
                        <motion.div
                            key="step0"
                            custom={direction}
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="shoose-motif"
                        >
                            <h4>Quel est le motif de votre contact ?</h4>
                            <div className="buttons-shooser">
                                {shoose.map((key, ind) => (
                                    <button key={ind} onClick={() => {
                                        setDirection(1);
                                        setShooser({ "label": key, "steps": 1 });
                                    }}>
                                        {key}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : Shooser.steps === 1 && Shooser.label !== "Achat d'œuvre" ? (
                        <motion.div
                            key="step1"
                            custom={direction}
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="cordonnees"
                        >
                            <h4>Vos coordonnées</h4>
                            <form>
                                <div className="form-group-in">
                                    <input type="text" placeholder='Prénom*'
                                        name='fname'
                                        value={formData?.fname}
                                        onChange={hundledatavalid} />
                                    <input type="text" placeholder='Nom'
                                        name='lname'
                                        value={formData?.lname}
                                        onChange={hundledatavalid} />
                                </div>
                                <input type="text" placeholder='Email*'
                                    name='email'
                                    value={formData?.email}
                                    onChange={hundledatavalid} />
                                <input type="text" placeholder='Téléphone'
                                    name='phone'
                                    value={formData?.phone}
                                    onChange={hundledatavalid} />
                            </form>
                        </motion.div>
                    ) : Shooser.steps === 1 && Shooser.label == "Achat d'œuvre" ?
                        (
                            <motion.div className="aricle-selec" key="step1"
                                custom={direction}
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.4 }}>
                                <h4>Sélectionnez vos œuvres</h4>
                                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Rechercher une œuvre...' />
                                <div className="grid-articles">
                                    {loading ? (
                                        // Show 6 skeletons while loading
                                        Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="skeleton-father">
                                                <div className="skeleton"></div>
                                                <div className="skeleton" style={{ height: "25px" }}></div>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            {articles?.length > 0 ? (
                                                articles.map((art, i) => (
                                                    <div className={`${art._id == shoosedArt && 'active'}`} key={art._id || i} onClick={() => setShoosedArt(art._id)}>
                                                        <img src={art.mainImg} alt={art.name} />
                                                        <p>{art.name}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className='noArticleFound'>No articles found</p>
                                            )}
                                        </>
                                    )}

                                </div>
                            </motion.div>
                        )
                        : Shooser.label !== "Achat d'œuvre" ?
                            (
                                <motion.div
                                    key="step2"
                                    custom={direction}
                                    variants={stepVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    className="final-form"
                                >
                                    <h4>Votre message</h4>
                                    <form>
                                        <div>
                                            <label>Objet de votre {Shooser.label}</label>
                                            <input
                                                value={formData?.Objet}
                                                name='Objet'
                                                onChange={hundledatavalid} type="text" placeholder={`Détails de votre ${Shooser.label}`} />
                                        </div>
                                        <div>
                                            <label>Votre message</label>
                                            <input
                                                name='message'
                                                value={formData?.message}
                                                onChange={hundledatavalid} type="text" placeholder='Écrivez votre message ici...' />
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (<motion.div
                                key="step1"
                                custom={direction}
                                variants={stepVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="cordonnees"
                            >
                                <h4>Vos coordonnées</h4>
                                <form>
                                    <div className="form-group-in">
                                        <input type="text" placeholder='Prénom*'
                                            name='fname'
                                            value={formData?.fname}
                                            onChange={hundledatavalid} />
                                        <input type="text" placeholder='Nom'
                                            name='lname'
                                            value={formData?.lname}
                                            onChange={hundledatavalid} />
                                    </div>
                                    <input type="text" placeholder='Email*'
                                        name='email'
                                        value={formData?.email}
                                        onChange={hundledatavalid} />
                                    <input type="text" placeholder='Téléphone'
                                        name='phone'
                                        value={formData?.phone}
                                        onChange={hundledatavalid} />
                                </form>
                            </motion.div>)}
                </AnimatePresence>
            </div>

            {Shooser.steps > 0 && (
                <div className="steps-btns">
                    <button onClick={() => {
                        setDirection(-1); // going backward
                        setShooser({ ...Shooser, "steps": Shooser.steps - 1 });
                    }}>
                        Précédent
                    </button>
                    <button
                        disabled={!isValid}
                        className={`next ${!isValid && 'disbled'}`}
                        onClick={handleSubmit}
                    >
                        {btnValue}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Stepped;





