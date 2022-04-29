import Header from '../templates/Header';
import Results from '../templates/Results';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const response = null || document.getElementById('busqueda');

    header.innerHTML = await Header();
    response.innerHTML = await Results();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    response.innerHTML = await render();
    content.innerHTML = await render();
}

export default router;