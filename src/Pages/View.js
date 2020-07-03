import { baseURL } from '../config';
import React from 'react'
require('dotenv').config()




export default class extends React.Component {

    state = {
        dogBreeds: [],
    }



    showAllBreeds = () => {
        return this.state.dogBreeds.map((dogBreed) => {
            return (
                <section key={dogBreed._id} className="breed-box">
                    <h2>{dogBreed.breed}</h2>
                    <p className="breed-website"><a href={dogBreed.url} target="_blank" rel="noopener noreferrer">{dogBreed.breed}  Website</a></p>
                    <p className="weights">Average Weight – Male (in pounds)</p> 
                    <p>{dogBreed.maleWeightLow} to {dogBreed.maleWeightHigh}</p>
                    <p className="weights">Average Weight – Female (in pounds)</p>
                    {dogBreed.femaleWeightLow} to {dogBreed.femaleWeightHigh}
                    <h3>Attributes</h3>
                    <p>Shedding: {dogBreed.shedding}</p>
                    <p>Blows Coat? {dogBreed.blowsCoat}</p>
                    <p>Professional Grooming Needed: {dogBreed.professionalGrooming}</p>
                    <p>Grooming Needs (brushing, combing, etc.): {dogBreed.grooming}</p>
                    <p>Friendly to Cats? {dogBreed.likelyCatFriendly}</p>
                    <p>Exercise Needs: {dogBreed.exercise}</p>
                    <p>Biddability (aka, Trainability): {dogBreed.biddability}</p>
                    <p>Prey Drive (hunting, chasing, etc.): {dogBreed.preyDrive}</p>
                    <p>Barking/Vocality: {dogBreed.barking}</p>
                    <h3>Main Drives</h3>
                   <p>{dogBreed.mainDrive}</p>
                    <h3>Activities</h3>
                    <p>{dogBreed.activities}</p>
                </section>
            )
        })
    }

    getAllBreeds = async () => {
        const response = await fetch(`${baseURL}/all-breeds`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': 'application/json'
            }
        })
        const successfulGet = response.status === 200 || 304

        if (successfulGet) {
            const dogBreeds = await response.json()
            this.setState({ dogBreeds })
        } else {
            console.log(response)
        }
    }
    componentDidMount() {
        this.getAllBreeds()
    }

    render() {
        return (
            <div>
                <span>
                    <h1>All Dog Breeds</h1>
                    <p>(Sorted in Alphabetical Order)</p>
                </span>
                <span className="dog-block">
                    <div>{this.showAllBreeds()}</div>
                </span>
            </div>
        );
    }
}