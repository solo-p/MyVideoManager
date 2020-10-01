<template>

    <div class="YoutubeDash__wrapper">
        <video-group
            :videos="videos">

        </video-group>
    </div>



</template>


<script>

    import VideoGroup from './VideoGroup.vue';

    import Search from './Search';

    export default {

    components: {

        VideoGroup

    },


        created() {

            Search({
                apiKey: 'AIzaSyDCJGBbq5Qm04-2nB0bojAFemHjFGht7sQ',
                term: 'X Men',
                items: '10',
                term: 'laravel repository'
            }, response => this.videos = response);

        },

        data() {
            return {
                videos: null
            }
        }



    }
</script>