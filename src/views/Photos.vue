<template>
    <div class="container">
        <p>Explore Photos of your choice here !</p>

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-12 d-flex justify-content-center mb-5">

                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="all" @click="getPhotos('All')">ALL</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="1" @click="getPhotos('Cheese')">CHEESE</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getPhotos('Spring')">SPRING</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getPhotos('Peony')">PEONY</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getPhotos('Coffee')">COFFEE</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getPhotos('People')">PEOPLE</button>
            </div>
            <!-- Grid column -->

        </div>

        <!-- Grid row -->
        <!-- Search Row -->
        <div class="row">
            <form class="form-inline md-form mr-auto mb-4">
                <input id="search" class="form-control mr-sm-2" type="text" placeholder="Search" 
                aria-label="Search" v-model="searchKey">
                <button class=" btn btn-dark aqua-gradient btn-rounded btn-sm my-0" 
                type="submit" @click="searchPhotos($event)">Search</button>
            </form>
            <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
            <!-- Small button group -->
            <div class="btn-group sort">
                <button class="btn btn-danger btn-sm dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Sort By
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" @click="sort('desc')">Height &darr;</a>
                    <a class="dropdown-item" href="#" @click="sort('asc')">Height &uarr;</a>
                </div>
            </div>
        </div>
        <!-- Grid row -->

        <div class="gallery" id="gallery">

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link :to="{ name: 'Details'}">
                <img class="img-fluid" :src="photoBook[0].src.medium" 
                alt="Card image cap" @click="savePhoto(photoBook[0])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[1].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[1])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[2].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[2])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[3].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[3])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[4].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[4])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[5].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[5])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[6].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[6])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[7].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[7])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[8].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[8])">
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/details">
            <img class="img-fluid" :src="photoBook[9].src.medium" 
            alt="Card image cap" @click="savePhoto(photoBook[9])">
            </router-link>
        </div>
        <!-- Grid column -->

        </div>
        <!-- Grid row -->
    
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'
import { createClient } from 'pexels'; 
import $ from 'jquery';
import swal from 'sweetalert';

@Component
export default class Photos extends Vue {

    
    photoBook: Array<object> = [];
    searchPhoto =false;
    photo = "";
    response ="";
    searchKey = "";
    filter= '';
    isLoading= false;
    fullPage=true;
    loader="spinner";
    


    beforeCreate() {
        const client = createClient(process.env.VUE_APP_APIKEY);
        const query = 'All';
        client.photos.curated({ perPage: 10 }).then((photos: any) => {
            this.searchPhoto=true;
            this.photoBook= photos.photos;
        })
            .catch(err=> console.log(err));
    }

    getPhotos(queryParam: string) {

        const client = createClient(process.env.VUE_APP_APIKEY);
        const query = queryParam;
        //console.log(queryParam);
        client.photos.search({ query, perPage: 10 }).then((photos: any) => {
            this.searchPhoto=true;
            this.photoBook= photos.photos;
            console.log(this.photoBook.length);
            if(this.photoBook.length==0 || queryParam=='')
            {   
                swal("No results found for " + query , "Try refining your search query");
                this.isLoading=false;
                return;
            }   
        })
            .catch(err=> console.log(err));
    }

    searchPhotos(e: any) {

        if(this.searchKey=='')
        {   
                swal("No results found for empty space"  , "Try refining your search query");
                this.isLoading=false;
                return;
        }
        else {
        e.preventDefault();
        this.getPhotos(this.searchKey);
        this.searchKey="";
        } 
        
    }

    sort(param: string) {
        console.log(param);

        if(param=='asc') {  
            this.photoBook.sort((a: any,b: any) => (a.height > b.height) ? 1 : -1);
            console.log(this.photoBook);
        }
        else {
            this.photoBook.sort((a: any,b: any) => (a.height < b.height) ? 1 : -1);
            console.log(this.photoBook);
        }
    }

    savePhoto(photo: object) {

        localStorage.setItem("photo", JSON.stringify(photo));
    }

    

    mounted() {
        $(function() {
            let selectedClass = "";
            $(".filter").click(function(){
            selectedClass = $(this).attr("data-rel")!;
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
            }, 300);
            });
            });

            this.isLoading=true;
            setTimeout(() => {
            this.isLoading = false;
            }, 1500);
    }
    
}
</script>


<style scoped>
   p {
    margin-top: 100px;
    margin-bottom: 1rem;
    text-align: center;
    }

    .gallery {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
        column-width: 33%; }
        .gallery .pics {
        -webkit-transition: all 350ms ease;
        transition: all 350ms ease; }
        .gallery .animation {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1); }

        @media (max-width: 450px) {
        .gallery {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
        }
        }

        @media (max-width: 400px) {
        .btn.filter {
        padding-left: 1.1rem;
        padding-right: 1.1rem;
        }
        }

        .sort button {
            height: 40px;
        }

        .btn-search {
            background-color: pink;
        }

        .dropdown li a {
            color: black;
        }

        .dropdown li a:hover {
            text-decoration: none;
            background-color: black;
            color: white;
        }

        .gallery {
            margin-bottom: 60px;
        }

        




</style>