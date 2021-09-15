// array of objects for provinces with there cities ///////////////////////////////////
const PROVINCE_CITIES = [
    {
        name: 'drenthe',
        coordinates: {lat: 52.785805, long: 6.897585},
        cities: [
            {
                name: 'Assen',
                coordinates: {lat: 52.99830716, long: 6.48677087},
            },
            {
                name: 'Coevorden',
                coordinates: {lat: 52.6610300, long: 6.7404600},
            },
            {
                name: 'Emmen',
                coordinates: {lat: 52.785805, long: 6.897585},
            },
        ],
    },
    {
        name: 'friesland',
        coordinates: {lat: 52.844948, long: 5.710553},
        cities: [
            {
                name: 'Leeuwarden',
                coordinates: {lat: 53.201233, long: 5.799913},
            },
            {
                name: 'Sneek',
                coordinates: {lat: 53.033748, long: 5.655647},
            },
        ],
    },
    {
        name: 'gelderland',
        coordinates: {lat: 52.449265, long: 5.834519},
        cities: [
            {
                name: 'Nijmegen',
                coordinates: {lat: 51.812563, long: 5.837226},
            },
            {
                name: 'Renkum',
                coordinates: {lat: 51.982983, long: 5.739978},
            },
            {
                name: 'Rheden',
                coordinates: {lat: 52.005737, long: 6.027959},
            },
            {
                name: 'Tiel',
                coordinates: {lat: 51.887618, long: 5.427877},
            },
        ],
    },
    {
        name: 'limburg',
        coordinates: {lat: 51.37048880, long: 6.17238620},
        cities: [
            {
                name: 'Kerkrade',
                coordinates: {lat: 50.865946, long: 6.070549},
            },
            {
                name: 'Maastricht',
                coordinates: {lat: 50.851368, long: 5.690973},
            },
            {
                name: 'Roermond',
                coordinates: {lat: 51.191320, long: 5.987772},
            },
            {
                name: 'Sittard',
                coordinates: {lat: 51.000624, long: 5.886479},
            },
        ],
    },
];
const PROVINCE_DROPDOWN = document.getElementById("province-dropdown"); // province select.
PROVINCE_DROPDOWN.addEventListener('change', onSelectChange);

function onSelectChange(event) {
    const {name, value} = event.target; // destructuring name and value.
    const CITIES_DROPDOWN_ELEMENT = document.getElementById("cities-dropdown"); // cities select.
    // find province object that equal value target //////////////////////////////////
    const SELECTED_PROVINCE = PROVINCE_CITIES
        .find((province) => province.name === value);
    // remove all options except first one ///////////////////////////////////////////
    if (name === 'province') while (CITIES_DROPDOWN_ELEMENT.children.length > 1) {
        console.log('while')
        CITIES_DROPDOWN_ELEMENT.removeChild(CITIES_DROPDOWN_ELEMENT.lastChild);
    }
    if (value) {
        CITIES_DROPDOWN_ELEMENT.removeAttribute('disabled'); // enable city select.
        // insert option tag for each province city /////////////////////////////////
        SELECTED_PROVINCE.cities.forEach((city) => CITIES_DROPDOWN_ELEMENT
            .insertAdjacentHTML('beforeend', "<option value=" + city.name.toLowerCase() + ">" + city.name + "</option>"));
    } else CITIES_DROPDOWN_ELEMENT.setAttribute('disabled', true); // disable city select if empty value.
}
