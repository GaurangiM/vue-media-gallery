<template>
    <div class="container">
        <div class="row text-center">
            <video class="video-fluid" autoplay loop muted controls :key="video.id">
                    <source :src="video.video_files[0].link" type="video/mp4" />
            </video>
        </div>
        <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
        <div class="info text-center">
            <dl class="row text-center">
                <dt class="col-sm-6 text-right">Videographer :</dt>
                <dd class="col-sm-6 text-left">{{video.user.name}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Videographer URL :</dt>
                <dd class="col-sm-6 text-left">{{video.user.url}}</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Duration :</dt>
                <dd class="col-sm-6 text-left">{{video.duration}} seconds</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Height :</dt>
                <dd class="col-sm-6 text-left">{{video.height}} pixels</dd>
            </dl>
            <dl class="row text-center ">
                <dt class="col-sm-6 text-right">Width :</dt>
                <dd class="col-sm-6 text-left">{{video.width}} pixels</dd>
            </dl>
        </div>

        <div class="row moreHeader">
            <p>MORE VIDEOS</p>
        </div>

        <div class="row more">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img :src="randomVideoBook[6].image" class="img-responsive">
                        <div class="overlay">
                            <p>
                                <router-link to="/videodetails" @click.native="saveVideo(randomVideoBook[6])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img :src="randomVideoBook[7].image" class="img-responsive">
                        <div class="overlay">
                            <p>
                                <router-link to="/videodetails" @click.native="saveVideo(randomVideoBook[7])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img :src="randomVideoBook[9].image" class="img-responsive">
                        <div class="overlay">
                            <p>
                                <router-link to="/videodetails" @click.native="saveVideo(randomVideoBook[9])">DETAILS</router-link>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 100px;
    }

    .info {
        margin-top: 60px;
    }

    dd {
        color: #4a148c  ;
        font-weight: bold;
    }

    .moreHeader {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .details {
        margin-top: 150px;
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

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { createClient } from 'pexels';

interface Keyable {
    [key: string]: any; 
}

@Component
export default class VideoDetails extends Vue{

    video: object=[];
    randomVideoBook: Array<object>= [];
    isLoading= false;
    fullPage=true;
    loader="spinner";
    videoID= null;

    @Watch('videoID')
    onIDChange(val: number, oldVal: number) {
        if(val !== oldVal) {
            this.video=JSON.parse(localStorage.getItem("video")!) ;

        this.isLoading=true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);

        
    
        }

        
    }

    mounted() {
        console.log("mounted");
        this.video=JSON.parse(localStorage.getItem("video")!) ;
    
        console.log(this.video);

        this.isLoading=true;
            setTimeout(() => {
            this.isLoading = false;
            }, 1500);
    }

    beforeCreate() {
        const client = createClient(process.env.VUE_APP_APIKEY);
        client.videos.popular({ perPage: 80}).then((videos: any) => {
            this.randomVideoBook= videos.videos;
        })
            .catch(err=> console.log(err));
    }
    
    saveVideo(video: Keyable) {

        localStorage.setItem("video", JSON.stringify(video));
        this.videoID= video.id;
        console.log(this.videoID);
    }
}
</script>