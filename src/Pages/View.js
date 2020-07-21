import { baseURL } from '../config';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import React from 'react'
require('dotenv').config()




export default class extends React.Component {

    state = {
        dogBreeds: [],
    }



    showAllBreeds = () => {
        return this.state.dogBreeds.map((dogBreed, i) => {
            return (
                <section key={dogBreed._id} className="breed-box">
                    <h2>{dogBreed.breed}</h2>
                    <p className="breed-website"><a href={dogBreed.url} target="_blank" rel="noopener noreferrer">{dogBreed.breed}  Website</a></p>
                    <p className="weight">Average Weight In Pounds (lbs)</p>
                    <p className="weights">Male:{' '}
                        {dogBreed.maleWeightLow} to {dogBreed.maleWeightHigh}</p>
                    <p className="weights">Female: {' '}
                        {dogBreed.femaleWeightLow} to {dogBreed.femaleWeightHigh}</p>
                    <h3>Attributes & Information</h3>
                    <p className="prompt">Shedding: {dogBreed.shedding}</p>
                    <p>Blows Coat? {dogBreed.blowsCoat}</p>
                    <p>Professional Grooming Needed: {dogBreed.professionalGrooming}</p>
                    <p>Grooming Needs (brushing, combing, etc.): {dogBreed.grooming}</p>
                    <p>Friendly to Cats? {dogBreed.likelyCatFriendly}</p>
                    <p>Exercise Needs: {dogBreed.exercise}</p>
                    <p>Biddability (aka, Trainability): {dogBreed.biddability}</p>
                    <p>Prey Drive (hunting, chasing, etc.): {dogBreed.preyDrive}</p>
                    <p>Barking/Vocality: {dogBreed.barking}</p>
                    <h3>Main Drives</h3>
                    <div>{Array.isArray(dogBreed.mainDrive) ? dogBreed.mainDrive.map((maindrive, k) => {
                        return (
                            <p key={`mainDrive-${i}-${k}`}>{maindrive}</p>
                        )

                    }) : <p>{dogBreed.mainDrive}</p>}</div>

                    <h3>Activities</h3>
                    <div>{Array.isArray(dogBreed.activities) ? dogBreed.activities.map((activity, j) => {
                        return (
                            <p key={`activity-${i}-${j}`}>{activity}</p>
                        )
                    }) : <p>{dogBreed.activities}</p>}</div>
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
                <span className="hero">
                    <h1>Find Your Perfect Dog Breed</h1>
                </span>
                <Loader
                    visible="true"
                    type="Rings"
                    color="#ff3312"
                    height={100}
                    width={100}
                    timeout={1500}
                />
                <span >
                    <div className="dog-block">{this.showAllBreeds()}</div>
                </span>
            </div>
        );
    }
}