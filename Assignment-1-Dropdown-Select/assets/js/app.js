function onSelectChange(event) {
    const {name, value} = event.target; // destructuring name and value.
    const CITIES_DROPDOWN_ELEMENT = document.getElementById("cities-dropdown"); // cities select.
    // array of objects for provinces with there cities //////////////////////////////
    const PROVINCE_CITIES = [
        {
            name: 'drenthe',
            cities: ['Assen', 'Coevorden', 'Emmen'],
        },
        {
            name: 'friesland',
            cities: ['Leeuwarden', 'Sneek'],
        },
        {
            name: 'gelderland',
            cities: ['Nijmegen', 'Renkum', 'Rheden', 'Tiel'],
        },
        {
            name: 'limburg',
            cities: ['Kerkrade', 'Maastricht', 'Roermond', 'Sittard'],
        },
    ];

    // find province object that equal value target //////////////////////////////////
    const SELECTED_PROVINCE = PROVINCE_CITIES
        .find((province) => province.name === value);

    // remove all options except first one ///////////////////////////////////////////
    while (CITIES_DROPDOWN_ELEMENT.children.length > 1) {
        CITIES_DROPDOWN_ELEMENT.removeChild(CITIES_DROPDOWN_ELEMENT.lastChild);
    }
    if (value) {
        CITIES_DROPDOWN_ELEMENT.removeAttribute('disabled'); // enable city select.
        // insert option tag for each province city /////////////////////////////////
        SELECTED_PROVINCE.cities.forEach((val) => CITIES_DROPDOWN_ELEMENT
            .insertAdjacentHTML('beforeend', "<option value=" + val.toLowerCase() + ">" + val + "</option>"));
    } else CITIES_DROPDOWN_ELEMENT.setAttribute('disabled', true); // disable city select if empty value.
}
