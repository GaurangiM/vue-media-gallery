<template>
    <div class="container">
        <p>Explore photos or videos of your choice here !</p>

        <div class="filter">
                        <ul id="filters">
                            <li>
                                <router-link to="/photos">
                                <button type="button" class="btn btn-outline-black waves-effect filter" 
                                data-rel="all">PHOTOS</button>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/videos">
                                <button type="button" class="btn btn-outline-black waves-effect filter" 
                                data-rel="all">VIDEOS</button>
                                </router-link>
                            </li>
                        
                        </ul>
        </div>

        <div class="recommended">
            <div class="recommended row"> 
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg">
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import { createClient } from 'pexels'; 



@Component
export default class Home extends Vue {
    photoBook: Array<object> = [];



}
</script>


<style scoped>
   p {
    margin-top: 100px;
    margin-bottom: 1rem;
    text-align: center;
    }

    .container {
        margin-bottom: 60px;
    }
</style>