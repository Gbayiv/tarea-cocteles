/**
 * Consumir datos desde el Script PHP Local
 */
async function listarLocal() {
    const lista = document.getElementById('lista-local');
    lista.innerHTML = '<p>Cargando datos locales...</p>';

    try {
        const respuesta = await fetch('datos.php');
        const cocteles = await respuesta.json();

        lista.innerHTML = cocteles.map(c => `
            <div class="item-card">
                <div class="info">
                    <h4>${c.nombre}</h4>
                    <small>${c.categoria} • Base: ${c.base}</small>
                </div>
            </div>
        `).join('');

    } catch (error) {
        lista.innerHTML = '<p style="color:red">Error al conectar con PHP</p>';
        console.error(error);
    }
}

/**
 * Consumir datos desde la API Externa (TheCocktailDB)
 */
async function listarAPI() {
    const lista = document.getElementById('lista-api');
    lista.innerHTML = '<p>Conectando con API externa...</p>';
    
    // El link que dio el profe (Endpoint)
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        // Mostramos los primeros 5 resultados
        lista.innerHTML = data.drinks.slice(0, 5).map(d => `
            <div class="item-card">
                <img src="${d.strDrinkThumb}" alt="${d.strDrink}">
                <div class="info">
                    <h4>${d.strDrink}</h4>
                    <small>ID: ${d.idDrink}</small>
                </div>
            </div>
        `).join('');

    } catch (error) {
        lista.innerHTML = '<p style="color:red">Error al conectar con la API</p>';
        console.error(error);
    }
}