<template>
    <div class="container">
        <div class="row random text-center">
            <div class="col-md-12 col-sm-12 photo">
                <img :src="randomPhoto.src.large" alt="">
            </div>
        </div>
        <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
        <div class="info text-center">
            <dl class="row text-center">
                <dt class="col-sm-6 text-right">Photographer :</dt>
                <dd class="col-sm-6 text-left">{{randomPhoto.photographer}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Photographer URL :</dt>
                <dd class="col-sm-6 text-left">{{randomPhoto.photographer_url}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Height :</dt>
                <dd class="col-sm-6 text-left">{{randomPhoto.height}} pixels</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Width :</dt>
                <dd class="col-sm-6 text-left">{{randomPhoto.width}} pixels</dd>
            </dl>
        </div>

        <div class="row">
            <p>MORE PHOTOS</p>
        </div>

        <div class="row more">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[6].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link to="/details" @click="savePhoto(randomPhotoBook[6])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[8].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link to="/details" @click="savePhoto(randomPhotoBook[8])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[3].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link to="/details" @click="savePhoto(randomPhotoBook[3])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>
        </div>

    </div>
        
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { createClient } from 'pexels';
import { faSpinner, faAlignLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import $ from 'jquery' 

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


@Component
export default class Random extends Vue{

    skipPhoto= "";
    randomPhoto= "";
    randomPhotoIndex= 0;
    randomPhotoBook: Array<object>= [];
    isLoading= false;
    fullPage=true;
    loader="spinner";


    beforeCreate() {
        const client = createClient(process.env.VUE_APP_APIKEY);
        client.photos.curated({ perPage: 80}).then((photos: any) => {
            this.randomPhotoBook=photos.photos;
            this.randomPhotoIndex=Math.floor(Math.random() * 14);
            this.randomPhoto= photos.photos[this.randomPhotoIndex];
            this.randomPhotoBook.splice(this.randomPhotoIndex,1);
            console.log(this.randomPhotoIndex,this.randomPhotoBook);
        })
            .catch(err=> console.log(err));
    }

    mounted() {
        this.isLoading=true;
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
    }

    savePhoto(photo: object) {

        localStorage.setItem("photo", JSON.stringify(photo));
        this.isLoading=true;
        setTimeout(() => {
          this.isLoading = false;
        }, 6000);
    }

}

</script>

<style scoped>

    dd {
        color: #4a148c  ;
        font-weight: bold;
    }

    .info {
        margin-top: 60px;
    }

    .random {
        margin-top: 80px;
    }

    .info h3 {
        margin-top: 75px;
    }

     p {
        margin-top: 30px;
    }

    .more {
        margin-bottom: 60px;
    }

        @media (min-width: 768px) {
        .carousel-multi-item-2 .col-md-3 {
        float: left;
        width: 25%;
        max-width: 100%; } }

        .carousel-multi-item-2 .card img {
        border-radius: 2px; }

        .controls-top {
        text-align: center;
        font-size: 25px;
        }

        .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    background: #42b078;
    }

    .hovereffect .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    padding: 50px 20px;
    }

    .hovereffect img {
    display: block;
    position: relative;
    max-width: none;
    width: calc(100% + 20px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-10px,0,0);
    transform: translate3d(-10px,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    }

    .hovereffect:hover img {
    opacity: 0.4;
    filter: alpha(opacity=40);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    }

    .hovereffect h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    overflow: hidden;
    padding: 0.5em 0;
    background-color: transparent;
    }

    .hovereffect h2:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    }

    .hovereffect:hover h2:after {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    }

    .hovereffect a, .hovereffect p {
    color: #FFF;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    }

    .hovereffect:hover a, .hovereffect:hover p {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    }
</style>