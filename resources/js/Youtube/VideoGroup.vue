<template>

    <div class="VideoGroup__wrapper row grid">

        <video-item

            v-for="video in videos"
            :video="video"
            :key="video.id.videoId"

            >

        </video-item>

    </div>


</template>



<script>

    import Isotope from 'isotope-layout';

    import VideoItem from './VideoItem.vue';

    export default {

        props: ['videos'],


        components: {

            VideoItem

        },

        created()
        {
            this.relayoutTheGrid();
        },

        data() {
            return {

                isotope: null;

            }
        },

        methods: {

            relayoutTheGrid() {

                setTimeout(()=>{

                    var elem = document.querySelector('.grid');

                        this.isotope = new Isotope( elem, {
                            itemSelector: '.card',
                              layoutMode: 'masonry'
                        });

                }, 1);

            }
        }
    }

</script>