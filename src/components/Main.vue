<script>
import { HTTP } from '../auth/auth-http';
import axios from 'axios'

export default {
    name: 'Main',
    data() {
      return {
        post: [],
        asteroid: [],
        mars: [],
        error: null
      }  
    },
    methods : {
       fecthAsteroid() {
           axios.get('https://images-api.nasa.gov/search?q=asteroid&page_size=5')
           .then(response => {
              this.asteroid =  response.data["collection"]["items"]
           })
           .catch(e => {
              this.error = e 
           })
       },

       fetchMarsData() {
          HTTP.get('mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-2-3&total_photos=1&page=1&api_key=2AH7DKu3eBC04a3UFr1bnuB2ERwy6qAYVe1hnZQJ')
          .then(response => {
            let data = response.data['photos']
            this.mars = data.slice(0,6)
          })
          .catch(e => {
             this.error = e 
          })
        },
    },
    mounted() {
       HTTP.get('/planetary/apod?count=1&api_key=2AH7DKu3eBC04a3UFr1bnuB2ERwy6qAYVe1hnZQJ')
        .then(response => {
              this.post = response.data
        })
        .catch(e => {
              this.error = e 
      })
      this.fecthAsteroid()
      this.fetchMarsData()
  }
}

</script>

<template>
   <main class="z-1 ">
       <div class="container">
           <div class="row">
             <div class="col-sm-12 col-md-9">
                <span class="badge bg-red mb-3">#TODAY</span>
                    <div v-for="data in post" class="carousel-inner">
                          <img :src="data.url" class="rounded d-block w-100" :alt="data.url">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{{ data.date }}</h5>
                                <p>{{ data.title }}</p>
                            </div>
                    </div>

                    <span class="badge bg-dark-blue my-3">#MARS</span>
                    <div class="row overflow-auto" >
                          <div v-for="data in mars" class="col-sm-6 col-md-4 mr-0">
                              <img :src="data['img_src']" class="rounded d-block w-100" :alt="data['img_src']"> 
                              <h4 class="mt-1 pb-3">{{ data['camera']['full_name'] }}</h4>     
                          </div>
                    </div>
             </div>
             <div class="col-sm-12 col-md-3">
                 <span class="badge bg-dark-blue">Asteroid</span>
                 <div class="row" v-for="data in asteroid">
                     <div class="col-12 my-2">
                         <img :src="data.links[0].href" class="rounded d-block w-100">
                         <h4 class="mt-2">{{ data.data[0].title }}</h4>
                     </div>
                 </div>
             </div>
           </div>
        </div>
   </main>
</template>

<style>
.bg-red {
   background-color: #FF3131;
}

.bg-dark-blue {
  background-color: #17214D;
}

.col-12:hover {
  border-radius: 5px;
  margin:1px;
  padding:3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h4 {
  font-size: 16px;
  font-weight: 600;
  padding:5px;
}

h4:hover {
  color:#FF3131;
  font-size: 17px;
}

</style>
