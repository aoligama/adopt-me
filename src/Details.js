import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Details extends Component {
    constructor () {
        super()
        this.state = { loading: true }
    }

    async componentDidMount () {
        const id = this.props.match.params.id
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${id}`
        )
        const json = await res.json()
        const [ pets ] = json.pets
        
        this.setState(Object.assign(
            {
                loading: false
            },
            pets
        ))
    }

    render () {
        const { animal, breed, city, state, description, name } = this.state
        return(
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Details)