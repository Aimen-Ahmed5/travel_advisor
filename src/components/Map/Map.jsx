import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; 
import Rating  from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    
    //calling useStyles hook
    const classes = useStyles();
    //calling useMediaQuery hook, if width is larger than 600px then isMobile will be false
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = { lat: 0, lng: 0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            // Go to console.cloud.google.com/projectcreate, create project, choose it
            // then search api library, click Javascript maps, enable it, create credentials and copy API key 
             bootstrapURLKeys = {{ key: 'AIzaSyCWXhzd6Ww7f6eOE8EiiA1eC90vA03c8kY' }}
             defaultCenter = {coordinates}
             center = {coordinates}
             defaultZoom = {14}
             margin = {[50, 50, 50, 50]}
             options = {''}
             onChange = {''}
             onChildClick = {''}
             >

            </GoogleMapReact>

        </div>
    );
}

export default Map;