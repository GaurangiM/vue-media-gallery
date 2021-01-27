<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/">HOME</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/random">RANDOM</router-link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" 
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATEGORIES</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <router-link class="dropdown-item" to="/photos">PHOTOS</router-link>
                      <router-link class="dropdown-item" to="/videos">VIDEOS</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>