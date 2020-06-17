import React from 'react'
require('dotenv').config()



export default class extends React.Component {


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
                    <p></p>
                </span>
            </div>
        );
    }
}