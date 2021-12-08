import { FormControl, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PostsList from './PostsList';
import Header from './Header';
import '../styles/Home.css';

/**
 * This component shows the layout of the application, with some functionalities. Use the Material UI library for interface design
 * 
 */

const Home = () => {

    const [filter, setFilter] = useState('');
    const [showResults, setShowResults] = useState('all');

    useEffect(() => {
        if (localStorage.getItem('queryFilter') != null) {
            setFilter(localStorage.getItem('queryFilter'));
        }
    }, [])

    const handleToggle = (event) => {
        setShowResults(event.target.value);
    }

    const handleSelect = (event) => {
        setFilter(event.target.value);
        if (localStorage.getItem('queryFilter') == null) {
            localStorage.setItem('queryFilter', event.target.value);
        } else {
            localStorage.queryFilter = event.target.value;
        }
    }

    return (
        <div className="home">
            <Header />
            <ToggleButtonGroup
                color="primary"
                value={showResults}
                exclusive
                size="small"
                onChange={handleToggle}
                className="home__toggle"
            >
                <ToggleButton value="all" disableRipple={true} fullWidth={true} >All</ToggleButton>
                <ToggleButton value="favs" disableRipple={true} >My faves</ToggleButton>
            </ToggleButtonGroup>

            <FormControl className="home__select">
                <Select
                    value={filter}
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
            
            {filter !== '' ? <PostsList key={filter} filter={filter} showResults={showResults} className="posts" /> : ''}
        </div>
    )
}

export default Home