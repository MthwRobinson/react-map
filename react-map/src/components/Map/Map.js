import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibXRod3JvYmluc29uIiwiYSI6ImNqNXUxcXcwaTAyamcyd3J4NzBoN283b3AifQ.JIfgHM7LDVb34sWhN4L8aA';

class Map extends Component {

  constructor(props: Props) {
      super(props);
      this.state = {
        lng: 5,
        lat: 34,
        zoom: 1.5
      };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('mouseenter', 'points', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseleave', 'points', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });    


    map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-77.03238901390978, 38.913188059745586]
                  },
                  "properties": {
                      "title": "Mapbox DC",
                      "icon": "fire-station",
                      "description" : "<strong>DC!"
                  }
              }, {
                  "type": "Feature",
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-122.414, 37.776]
                  },
                  "properties": {
                      "title": "Mapbox SF",
                      "icon": "campsite"
                  }
              }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
    }
        });
    });

  } 



  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="Map">
        <div ref={el => this.mapContainer = el} 
             className="map absolute top right left bottom"
             id="map" />
      </div>
    );
  }  

}

export default Map;
