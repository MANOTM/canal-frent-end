import { useState } from 'react';
import './Stepped.css'

const shoose = ["Achat d'œuvre", "Collaboration", "Discussion artistique", "Commande personnalisée"]

function Stepped() {
    const [Shooser, setShooser] = useState({ "label": null, "steps": 0 })
    console.log(Shooser);


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
                {
                    Shooser.steps ?
                        (
                            Shooser.steps == 1 ?
                                (
                                    <div className='cordonnees'>
                                        <h4>Vos coordonnées</h4>
                                        <form>
                                            <div className="form-group-in">
                                                <input type="text" placeholder='Prénom*' />
                                                <input type="text" placeholder='Nom' />
                                            </div>
                                            <input type="text" placeholder='Email*' />
                                            <input type="text" placeholder='Téléphone' />
                                        </form>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <div className="final-form">
                                            <h4>Votre message</h4>
                                            <form>
                                                <div>
                                                    <label>Objet de votre {Shooser.label}</label>
                                                    <input type="text" placeholder={`Détails de votre ${Shooser.label}`} id="" />
                                                </div>
                                                <div>
                                                    <label>Votre message</label>
                                                    <input type="text" placeholder='Écrivez votre message ici...' id="" />
                                                </div>
                                                <div>
                                                    <label>Joindre un document (optionnel)</label>
                                                    <input type="file" id="" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )
                        )
                        :
                        <div className="shoose-motif">
                            <h4>Quel est le motif de votre contact ?</h4>
                            <div className="buttons-shooser">
                                {shoose.map((key, ind) => {
                                    return (
                                        <button key={ind} onClick={() => setShooser({ "label": key, "steps": 1 })}>{key}</button>
                                    )
                                })}
                            </div>
                        </div>
                }
            </div>
            {!Shooser.steps ||
                <div className="steps-btns">
                    <button onClick={() => { setShooser({ ...Shooser, "steps": Shooser.steps - 1 }) }}>Précédent</button>
                    <button className='next ' onClick={() => { setShooser({ ...Shooser, "steps": Shooser.steps + 1 }) }}>{Shooser.steps == 2 ? 'Envoyer' : 'Suivant'}</button>
                </div>
            }
        </div>
    );
}

export default Stepped;