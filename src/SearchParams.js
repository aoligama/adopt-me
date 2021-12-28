import { useState } from 'react'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const breeds = []

    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location" 
                        onChange={e => setLocation(e.target.value)} 
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"  
                        value={animal} 
                        onChange={e => setAnimal(e.target.value)} 
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option></option>
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        id="breed"  
                        value={breed} 
                        onChange={e => setBreed(e.target.value)} 
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option></option>
                        {
                            breeds.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams