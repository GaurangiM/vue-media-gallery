<template>
    <div class="container">
        <p>Explore Videos of your choice here !</p>
        <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-12 d-flex justify-content-center mb-5">

                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="all" @click="getVideos('All')">All</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="1" @click="getVideos('Food')">FOOD</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getVideos('Christmas')">CHRISTMAS</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getVideos('Halloween')">HALLOWEEN</button>
                <button type="button" class="btn btn-outline-black waves-effect filter" 
                data-rel="2" @click="getVideos('Birthday')">BIRTHDAY</button>
            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

        <!-- Grid row -->
        <!-- Search Row -->
        <div class="row">
            <form class="form-inline md-form mr-auto mb-4">
                <input id="search" class="form-control mr-sm-2" type="text" placeholder="Search" 
                aria-label="Search" v-model="searchKey">
                <button class=" btn btn-dark aqua-gradient btn-rounded btn-sm my-0" 
                type="submit" @click="searchVideos($event)">Search</button>
            </form>

            <!-- Small button group -->
            <div class="btn-group sort">
                <button class="btn btn-danger btn-sm dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Sort By
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#" @click="sort('desc')">Duration &darr;</a>
                    <a class="dropdown-item" href="#" @click="sort('asc')">Duration &uarr;</a>
                </div>
            </div>
        </div>
        <!-- Grid row -->

        <!-- Grid row -->
        <div class="gallery" id="gallery">

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[0].id" 
                @click="saveVideo(videoBook[0])">
                    <source :src="videoBook[0].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
            
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">

            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[1].id"
                @click="saveVideo(videoBook[1])">
                    <source :src="videoBook[1].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">

            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[2].id"
                @click="saveVideo(videoBook[2])">
                    <source :src="videoBook[2].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[3].id"
                @click="saveVideo(videoBook[3])">
                    <source :src="videoBook[3].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[4].id"
                @click="saveVideo(videoBook[4])">
                    <source :src="videoBook[4].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[5].id"
                @click="saveVideo(videoBook[5])">
                    <source :src="videoBook[5].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[6].id"
                @click="saveVideo(videoBook[6])">
                    <source :src="videoBook[6].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[7].id"
                @click="saveVideo(videoBook[7])">
                    <source :src="videoBook[7].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 2 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[8].id"
                @click="saveVideo(videoBook[8])">
                    <source :src="videoBook[8].video_files[0].link" type="video/mp4" />
                </video>
            </router-link>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="mb-3 pics animation all 1 view overlay zoom">
            <router-link to="/videodetails">
                <video class="video-fluid" autoplay loop muted :key="videoBook[9].id"
                @click="saveVideo(videoBook[9])">
                    <source :src="videoBook[9].video_files[0].link" type="video/mp4" />
                </video>
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
import $ from 'jquery'
import swal from 'sweetalert';


@Component
export default class Videos extends Vue {
    videoBook: Array<object> = [];
    searchVideo =false;
    video ="";
    searchKey = "";
    isLoading= false;
    fullPage=true;
    loader="spinner";

    beforeCreate() {
        const client = createClient(process.env.VUE_APP_APIKEY);
        client.videos.popular({  perPage: 10 }).then((videos: any) => {
            console.log(videos.videos);
            this.videoBook= videos.videos;
            console.log(this.videoBook);
        })
            .catch(err=> console.log(err));
    }

    getVideos(queryParam: string) {
        const client = createClient(process.env.VUE_APP_APIKEY);
        const query = queryParam;
        client.videos.search({ query, perPage: 10 }).then((videos: any) => {
            this.videoBook= videos.videos;
            console.log(this.videoBook.length);
            if(this.videoBook.length==0) {
                swal("No results found for " + queryParam , "Try refining your search query");
            }
        })
            .catch(err=> console.log(err));

        this.isLoading=true;
            setTimeout(() => {
            this.isLoading = false;
            }, 3000);
    }

    searchVideos(e: any) {
        e.preventDefault();
        this.getVideos(this.searchKey);
        this.searchKey="";

        this.isLoading=true;
            setTimeout(() => {
            this.isLoading = false;
            }, 300);
    }

    sort(param: string) {

        if(param=='asc') {
            this.videoBook.sort((a: any,b: any) => (a.duration > b.duration) ? 1 : -1);
            console.log(this.videoBook);
        }
        else {
            this.videoBook.sort((a: any,b: any) => (a.duration < b.duration) ? 1 : -1);
            console.log(this.videoBook);
        }

        
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
            }, 3000);
    }

    saveVideo(video: object) {

        localStorage.setItem("video", JSON.stringify(video));
    }
}
</script>


<style scoped>
   p {
    margin-top: 100px;
    margin-bottom: 1rem;
    text-align: center;
    }

    .sort button {
    height: 40px;
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

    .gallery {
        margin-bottom: 60px;
    }
</style>