import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Stepped.css';

const shoose = ["Achat d'œuvre", "Collaboration", "Discussion artistique", "Commande personnalisée"];

function Stepped() {
    const [Shooser, setShooser] = useState({ "label": null, "steps": 0 });
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    const [isValid, setIsValid] = useState(false)
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

    return (
        <div className="Stepped">
            <div className="stepped-count">
                <div className="nbr-count active-nbr">1</div>
                <div className={`bar- ${Shooser.steps > 0 && 'active-bar'}`}></div>
                <div className={`nbr-count ${Shooser.steps > 0 && 'active-nbr'}`}>2</div>
                <div className={`bar- ${Shooser.steps > 1 && 'active-bar'}`}></div>
                <div className={`nbr-count ${Shooser.steps > 1 && 'active-nbr'}`}>3</div>
            </div>

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
                                <input type="text" placeholder='Rechercher une œuvre...' />
                                <div className="grid-articles"> 

                                    <div className='skeleton-father'>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>

                                    <div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>

                                    <div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>
                                    <div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>

                                    <div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>

                                    <div>
                                        <div className="skeleton"></div>
                                        <div className="skeleton" style={{height:'25px'}}></div>
                                    </div>
                                    {/* <div className='active'>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div>
                                    <div>
                                        <img src="https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754288263/paintings/wcrjeoigew3nkqot5q3p.webp" alt="" />
                                        <p>Snowie</p>
                                    </div> */}
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
                                            <input type="text" placeholder={`Détails de votre ${Shooser.label}`} />
                                        </div>
                                        <div>
                                            <label>Votre message</label>
                                            <input type="text" placeholder='Écrivez votre message ici...' />
                                        </div>
                                        <div>
                                            <label>Joindre un document (optionnel)</label>
                                            <input type="file" />
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
                        className={`next ${!isValid && 'disbled'}`}
                        onClick={() => {
                            setDirection(1); // going forward
                            setShooser({ ...Shooser, "steps": Shooser.steps + 1 });
                        }}
                    >
                        {Shooser.steps === 2 ? 'Envoyer' : 'Suivant'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Stepped;
