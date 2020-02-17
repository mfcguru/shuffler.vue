<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        Vue Shuffler
      </router-link>
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/"  class="nav-link" >
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shuffle
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link to="/api" class="dropdown-item" >
                  API Shuffle
                </router-link>
                <router-link to="/socket" class="dropdown-item" >
                  Web Socket Shuffle
                </router-link>
              </div>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link" >
                About
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
</template>

<script>

export default {
  name: 'NavbarComponent'
}
</script>
