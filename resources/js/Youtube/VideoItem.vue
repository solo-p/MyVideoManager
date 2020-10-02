<template>

    <div class="VideoItem__wrapper">

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" v-bind:src="videoImage" v-bind:alt="videoTitle">

          <div class="card-body">
            <h5 class="card-title">{{videoTitle}}</h5>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="#" class="btn btn-primary">{{videoDescription}}</a>
          </div>

        </div>

    </div>



</template>


<script>

    export default {

        props: ['video'],

        computed: {
            videoTitle() {

                return this.video.snippet.title;

            },

            videoDescription() {

                return this.video.snippet.description;

            },

            videoImage() {

                return this.video.snippet.thumbnails.high.url;

            }
        }

    }

</script>


<style lang="scss">
    .card {
        margin: 0px 5px 5px 0px;

        .card-img-top {
            max-height: 210px;
        }
    }
</style>