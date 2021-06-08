import './Formulaire.css';
import React from 'react'
import { RadioGroup } from 'evergreen-ui'

export default function Formulaire(props) {

    function SexeRadioGroup(props) {
        const [options] = React.useState([
            { label: 'Homme', value: 'homme' },
            { label: 'Femme', value: 'femme' }
        ])
        return (
            <RadioGroup
            className="RadioGroup"
            label=""
            size={20}
            value={props.value}
            options={options}
            onChange={event => props.setValue(event.target.value)}
            />
        )
    }
    
    function ActivityRadioGroup(props) {
        const [options] = React.useState([
            { label: 'Sédentaire', value: 'sedentaire' },
            { label: 'Normale', value: 'normale' },
            { label: 'Sportive', value: 'sportive' }
        ])
        return (
            <RadioGroup
            className="RadioGroup"
            label=""
            size={20}
            value={props.value}
            options={options}
            onChange={event => props.setValue(event.target.value)}
            />
        )
    }

    return(
        <div className="Formulaire">
            <ul>
                <li>
                <div className='Label'>Votre sexe :</div>
                    <SexeRadioGroup 
                    value={props.sexe} 
                    setValue={props.setSexe}/>
                </li>
                <li>
                    <div className='Label'>Votre taille :</div>
                    <input type="number" 
                    value={props.taille} 
                    onChange={event => props.setTaille(event.target.value)}/>
                    <p>centimètres</p>
                </li>
                <li>
                    <div className="Label">Votre poids :</div>
                    <input type="number" 
                    value={props.poids} 
                    onChange={event => props.setPoids(event.target.value)}/>
                    <p>kilogrammes</p>
                </li>
                <li>
                    <div className='Label'>Votre âge :</div>
                    <input type="number" 
                    value={props.age} 
                    onChange={event => props.setAge(event.target.value)}/>
                    <p>ans</p>
                </li>
                <li>
                    <div className='Label'>Votre activité physique :</div>
                    <ActivityRadioGroup
                    value={props.activite}
                    setValue={props.setActivite}/>
                </li>
            </ul>
        </div>
    )
}