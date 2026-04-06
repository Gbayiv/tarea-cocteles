// Función asíncrona para consumir el PHP Local
async function fetchLocalData() {
    const container = document.getElementById('local-list');
    try {
        const response = await fetch('datos.php');
        const data = await response.json();
        
        container.innerHTML = data.map(item => `
            <div class="item-card">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <small>${item.categoria} | Base: ${item.alcohol}</small>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error en PHP local:", error);
    }
}

// Función asíncrona para consumir la API Externa
async function fetchExternalAPI() {
    const container = document.getElementById('api-list');
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        container.innerHTML = data.drinks.slice(0, 5).map(drink => `
            <div class="item-card">
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <strong>${drink.strDrink}</strong>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error en API externa:", error);
    }
}