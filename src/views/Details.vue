<template>
    <div class="container details">
        <div class="row text-center">
            <div class="col-md-12 col-sm-12 photo">
                <img :src="photo.src.large" alt="">
            </div>
        </div>
        <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
        <div class="info text-center">
            <dl class="row text-center">
                <dt class="col-sm-6 text-right">Photographer :</dt>
                <dd class="col-sm-6 text-left">{{photo.photographer}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Photographer URL :</dt>
                <dd class="col-sm-6 text-left">{{photo.photographer_url}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Height :</dt>
                <dd class="col-sm-6 text-left">{{photo.height}} pixels</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Width :</dt>
                <dd class="col-sm-6 text-left">{{photo.width}} pixels</dd>
            </dl>
        </div>


        

        <div class="row moreHeader">
            <p>MORE PHOTOS</p>
        </div>

        <div class="row more">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[0].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link to="/details" @click.native="savePhoto(randomPhotoBook[0])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[1].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link :to="{path:'/details'}" @click.native="savePhoto(randomPhotoBook[1])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" :src="randomPhotoBook[2].src.portrait" alt="">
                        <div class="overlay">
                            <p>
                                <router-link to="/details" @click.native="savePhoto(randomPhotoBook[2])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { createClient } from 'pexels';

interface Keyable {
    [key: string]: any  ;
}

@Component
export default class Details extends Vue {
    photo: any=[];
    photoWidth='';
    randomPhotoBook: Array<object>= [];
    photoBook: Array<object>= [];
    isLoading= false;
    fullPage=true;
    loader="spinner";
    photoID: any= null;
    searchKey: any= "";

    

    @Watch('photoID')
    onIDChange(val: number, oldVal: number) {
        if(val !== oldVal) {
            this.photo=JSON.parse(localStorage.getItem("photo")!) ;
            this.photoWidth=this.photo.width;

        this.isLoading=true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);

        
    
        }

        
    }

    beforeCreate() {
        const client = createClient(process.env.VUE_APP_APIKEY);
        const query = 'beer';
        client.photos.search({ query, perPage: 15}).then((photos: any) => {
            this.photoBook=photos.photos;
            this.randomPhotoBook=this.generateRandomPhotoBook();
        })
            .catch(err=> console.log(err));
   
    }

    generateRandomPhotoBook() {
        this.randomPhotoBook.push(this.photoBook[this.generateRandomIndex()]);
        this.randomPhotoBook.push(this.photoBook[this.generateRandomIndex()]);
        this.randomPhotoBook.push(this.photoBook[this.generateRandomIndex()]);
        return this.randomPhotoBook;
    }

    generateRandomIndex() {
        const randomIndex= Math.floor(Math.random() * 14);
        return randomIndex;
    }

    mounted() {
        
        this.photo=JSON.parse(localStorage.getItem("photo")!) ;
        this.photoWidth=this.photo.width;
        this.photoID= this.photo.id;
        this.isLoading=true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);

    }
    
    savePhoto(savedPhoto: Keyable) {

        localStorage.setItem("photo", JSON.stringify(savedPhoto));
        this.photoID= savedPhoto.id;
        console.log(this.photoID);
    }

}


</script>

<style scoped>

    .moreHeader {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .details {
        margin-top: 150px;
    }

    dd {
        color: #4a148c  ;
        font-weight: bold;
    }

    .more {
        margin-bottom: 60px;
    }

    .info {
        margin-top: 60px;
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