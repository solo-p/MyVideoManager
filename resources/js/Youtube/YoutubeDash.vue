<template>

    <div class="YoutubeDash__wrapper">
        <finder></finder>

        <div v-if="!loading">
            <video-group
                :videos="videos">

            </video-group>
        </div>

        <div v-if="loading">Loading...</div>
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
                term: searchTerm,
                items: 10
            }, response => this.handleSearchResults(response));

           window.eventBus.$on('searchForYoutubeStarted', (string) => {
                this.loading = true;
                this.localDB.setData('search', string);
           });

           window.eventBus.$on('searchResultFromYoutube', videos => {
               console.log('search result', videos);
               this.loading = false;
               this.videos = videos;
           });

        },

        data() {
              return {
                localDB: new LocalDB(),
                videos: null,
                loading: true
              }
        },

        methods: {
              handleSearchResults(result) {
                this.loading = false;
                this.videos = result;
              }
        }


    }
</script>