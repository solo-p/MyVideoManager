<template>

    <div class="YoutubeDash__wrapper">
        <finder></finder>

        <video-group
            :videos="videos">

        </video-group>
    </div>



</template>


<script>

    import VideoGroup from './VideoGroup.vue';

    import Finder from './Finder.vue';

    import Search from './Search';

    export default {

    components: {

        VideoGroup, Finder

    },


        created() {

            Search({
                apiKey: 'AIzaSyDCJGBbq5Qm04-2nB0bojAFemHjFGht7sQ',
                term: 'X Men',
                items: '10',
                term: 'laravel repository'
            }, response => this.videos = response);

            window.eventBus.$on('searchResultFromYoutube', videos => {
                console.log('search result', videos);
            });

        },

        data() {
            return {
                videos: null
            }
        }



    }
</script>