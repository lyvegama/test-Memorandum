import React from "react";

import logo from "../assets/logo-gray.png";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="">
        <img src={logo} className='nav-img' />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/series">
                Series
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/peliculas">
                Películas
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Links de interés
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="./client/public/Curriculum-lydia-vega.FullStack.pdf">
                  Visualizar mi curriculum
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.linkedin.com/in/lydia-vega/">
                  Perfil de LinkedIn
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://github.com/lyvegama">
                  Perfil de GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
