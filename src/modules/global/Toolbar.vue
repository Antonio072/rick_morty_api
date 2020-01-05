<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" >
          <h1 class="title">
            <span class="has-text-success">Rick and Morty</span>
            <span class="subtitle">API</span>
          </h1>
        </router-link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/">
                <a class="button is-primary">
                  <i class="material-icons">home</i>
                  <strong>Inicio</strong>
                </a>
              </router-link>
              <router-link to="/personajes">
                <a class="button is-primary">
                  <i class="material-icons">account_circle</i>
                  <strong>Personajes</strong>
                </a>
              </router-link>
              <router-link to="/episodios">
                <a class="button is-primary">
                  <i class="material-icons">list</i>
                  <strong>Episodios</strong>
                </a>
              </router-link>
              <router-link to="/lugares">
                <a class="button is-primary">
                  <i class="material-icons">location_on</i>
                  <strong>Lugares</strong>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>