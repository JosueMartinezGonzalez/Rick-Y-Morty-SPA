import logo from '../assets/images/logo.png'
import user from '../assets/images/user.jpg'

const Header = () => {
    const view = `
    <div class="header-content">
            <div class="contenedor-logo">
                <img class="logo" src=${logo} alt="">
            </div>
            <form action="" class="contenedor-buscador" id="form">
                <div class="contenedor-buscador_icono">
                    <i class="fas fa-search"></i>
                </div>
                <input name="name" class="buscador" id="inputBuscador" type="text" placeholder="Buscar Personaje">
            </form>
            <div class="contenedor-user">
                <div class="contenedor-user_img">
                    <img class="user" src=${user} alt="">
                </div>
                <div class="contenedor-user_icono">
                    <i class="fas fa-sort-down"></i>
                </div>
            </div>
        </div>
    `;
    return view;
}

export default Header;