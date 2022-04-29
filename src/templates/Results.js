const Results = async () => {

    const $form = document.querySelector('#form');
    const $cerrar = document.querySelector('#cerrar');
    const $busqueda = document.querySelector('#busqueda');
    const APIs = 'https://rickandmortyapi.com/api/character/';

    const view = (`
    <div>
        ${$form.addEventListener('submit', async (event) => {
            event.preventDefault();
                const $data = await new FormData($form);
                console.log(`${APIs}?name=${$data.get('name')}`)
                try {
                    const { results: charactersList } = await getDataR(`${APIs}?name=${$data.get('name')}`);
                    console.log(charactersList)
                    console.log(charactersList)
                    console.log(charactersList.map(chars => `
                        <article class="personaje-container" id="personaje-container">
                            <a href="#/${chars.id}">
                                <div class="img-container">
                                    <img class="personaje-img" src="${chars.image}" alt="">
                                </div>
                                <div class="personaje-description">
                                    <h2 class="name">${chars.name}</h2>
                                </div>
                            </a>
                        </article>
                    `).join())
                    getDataR(`${APIs}?name=${$data.get('name')}`).map(chars => `
                        <article class="personaje-container" id="personaje-container">
                            <a href="#/${chars.id}">
                                <div class="img-container">
                                    <img class="personaje-img" src="${chars.image}" alt="">
                                </div>
                                <div class="personaje-description">
                                    <h2 class="name">${chars.name}</h2>
                                </div>
                            </a>
                        </article>
                    `).join()

                        $cerrar.classList.remove('none')
                        $busqueda.classList.remove('none')

                } catch (error) {
                    // alert('No se encontró ningún resultado')
                    // console.clear()
                }
                cerrar();
            } )}
        </div>`)

    function cerrar() {
        $cerrar.addEventListener('click', () => {
            $cerrar.classList.add('none');
            $busqueda.classList.add('none');
        } );
    }
    async function getDataR(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    return view;
}

export default Results;