import React from 'react'

export default class extends React.Component {
    state = {
        dogBreeds: [],
        userInput: {
            name: '',
            shedding: '',
            blowsCoat: ''
        }
    }

    nameChanged = (event) => {
        this.setState({
            userInput: {
                ...this.state.userInput,
                name: event.target.value
            }
        })
    }


    sheddingChanged = (event) => {
        this.setState({
            userInput: {
                ...this.state.userInput,
                shedding: event.target.value
            }
        })
    }

    blowsCoatChanged = (event) => {
        this.setState({
            userInput: {
                ...this.state.userInput,
                blowsCoat: event.target.value
            }
        })
    }

    submit = () => {
        const dogBreed = this.state.userInput
        const updatedDogBreeds = [...this.state.dogBreeds, dogBreed]
        this.setState({
            dogBreeds: updatedDogBreeds
        })
        console.log(updatedDogBreeds)
    }


    render() {
        return (
            <div className="main">
                <h1>Manage</h1>
                <section className="form">
                    <div>
                        <label htmlFor="name-input">Breed Name:</label><input type="text" id="name-input" value={this.state.userInput.name} onChange={this.nameChanged} />
                    </div>
                    <div>
                        <label htmlFor="url-input">Organization URL (USA):</label><input type="text" id="url-input" value={this.state.userInput.url} onChange={this.urlChanged} />
                    </div>
                    <div>
                        <label htlmlFor="shedding-input">Shedding:</label>
                        <select id="shedding-input" value={this.state.userInput.shedding} onChange={this.sheddingChanged}>
                            <option value="">Make a Selection</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">High</option>
                        </select>
                    </div>
                    <div>
                        <label htlmlFor="blows-coat-input">Blows Coat Seasonally:</label>
                        <select id="blows-coat-input" value={this.state.userInput.blowsCoat} onChange={this.blowsCoatChanged}>
                            <option value="">Make a Selection</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button onClick={this.submit}>Submit</button>
                </section>
            </div>
        );
    }
}