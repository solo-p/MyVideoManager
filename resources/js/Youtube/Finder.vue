<script>
    import Search from './Search';
    //import LocalDB from "../LocalDB";

    export default {
        created () {
          let placeholder = this.localDB.getData('search')
          if (placeholder) {
            this.setPlaceHolder(placeholder);
          }
        },

        data () {
              return {
                localDB: new LocalDB(),
                searchString: '',
                placeholder: 'asd'
              }
        },

        methods: {
            handleFormSubmit(){
            window.eventBus.$emit('searchForYoutubeStarted', this.searchString);

                Search({
                    apiKey: 'AIzaSyDCJGBbq5Qm04-2nB0bojAFemHjFGht7sQ',
                    term: 'this.searchString',
                    items: '10',

                }, data => {
                    window.eventBus.$emit('searchResultFromYoutube', data);
                    this.setPlaceHolder(this.searchString);
                    this.searchString = '';
                });
            },

            setPlaceHolder (string) {
                this.placeholder = "Search result for " + string;
            }
        }
    }

</script>

<template>
  <div class="Search__wrapper">
    <div class="container">
      <form v-on:submit.prevent="handleFormSubmit">
        <input
          v-bind:placeholder="placeholder"
          v-model="searchString"
          type="text"
          class="form-control">
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .Search__wrapper {
    margin-bottom: 10px;
  }
</style>