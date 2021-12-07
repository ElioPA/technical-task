import { FormControl, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { flexbox } from '@mui/system';
import React, { useState, useEffect } from 'react';
import PostsList from './PostsList';
import '../styles/Home.css'

const Home = () => {

    const [query, setQuery] = useState('');
    const [showResults, setShowResults] = useState('all');

    useEffect(() => {
        if(localStorage.getItem('queryFilter') != null){
            setQuery(localStorage.getItem('queryFilter'));
        }
    }, [])

    const handleChange = (event) => {
        console.log(event.target.value);
        setShowResults(event.target.value);
    }

    const handleSelect = (event) => {
        setQuery(event.target.value);
        if (localStorage.getItem('queryFilter') == null) {
            localStorage.setItem('queryFilter', event.target.value);
        } else {
            localStorage.queryFilter = event.target.value;
        }
    }
    

    return (
        <div className="home">
            <h1>HACKER NEWS</h1>
            <ToggleButtonGroup
                color="primary"
                value={showResults}
                exclusive
                size="small"
                onChange={handleChange}
            >
                <ToggleButton value="all" disableRipple={true} fullWidth={true} >All</ToggleButton>
                <ToggleButton value="favs" disableRipple={true} >My faves</ToggleButton>
            </ToggleButtonGroup>
            <br />
            <FormControl style={{ display: flexbox, margin: 25 }}>
                <Select
                    value={query}
                    onChange={handleSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    size="small"
                >
                    <MenuItem value="" disabled={true}>
                        <em>Select your news</em>
                    </MenuItem>
                    <MenuItem value="angular">Angular</MenuItem>
                    <MenuItem value="reactjs">Reactjs</MenuItem>
                    <MenuItem value="vuejs">Vuejs</MenuItem>
                </Select>
            </FormControl>

            {query !== '' ? <PostsList query={query} showResults={showResults} /> : ''}

        </div>
    )
}

export default Home
