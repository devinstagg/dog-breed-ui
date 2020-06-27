import React from 'react'
require('dotenv').config()



export default class extends React.Component {

    state = {
        dogBreeds: [],
    }



    showAllBreeds = () => {
        return this.state.dogBreeds.map((dogBreed) => {
            return (
                <div key={dogBreed._id} className="breed-box">
                    <h2>{dogBreed.breed}</h2>
                    <a href={dogBreed.url}>{dogBreed.breed} Website</a>
                    <p>Average Weight – Male</p>
                    {dogBreed.maleWeightLow} to {dogBreed.maleWeightHigh}
                    <p>Average Weight – Female</p>

                </div>
            )
        })
    }

    getAllBreeds = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/all-breeds`, {
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