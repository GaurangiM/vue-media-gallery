<template>
    <div class="copyrightSection">
        <div class="heading">
            <h5 class="text-center">USEFUL LINKS</h5>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 text-center">
              <a href="/">Home</a>
            </div>
            <div class="col-md-4 col-sm-4 text-center">
              <a href="/random">Random</a>
            </div>
            <div class="col-md-4 col-sm-4 text-center">
              Categories
              <ul>
                <li><a href="/photos">Photos</a></li>
                <li><a href="/videos">Videos</a></li>
              </ul>
              
              
            </div>
        </div> 
            
    </div>

    <!-- Footer -->
  
  <!-- Footer -->
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class AppFooter extends Vue{
    
}
</script>

<style>
footer.page-footer .footer-copyright {
    color: black;
}

h5, h7 {
    color: black;
}

footer.page-footer a {
    color: black;
}

.links {
    margin-bottom: 30px;
    line-height: 30px;
}

.copyrightSection {
    color: black;
    
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #f5f5f5;
    height: 130px;
    line-height: 60px;
    flex-shrink: 0;
}

.copyrightSection p {
    margin: 0;
}

a {
  color: black;
}

ul {
    display: inline-grid;
    list-style: none;
}

 
</style>