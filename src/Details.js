import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import ThemeContext from './ThemeContext'

class Details extends Component {
    state = { loading: true }

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
        if (this.state.loading) {
            return <h2>loading...</h2>
        }

        const { 
            animal, 
            breed, 
            city, 
            state, 
            description, 
            name, 
            images 
        } = this.state
        
        return(
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    
                    <p>{description}</p>
                </div>
                <Carousel images={images} />
            </div>
        )
    }
}

const DetailWithRouter = withRouter(Details)

export default function DetailsWithErrorBoundary(){
    return (
        <ErrorBoundary>
            <DetailWithRouter />
        </ErrorBoundary>
    )
}