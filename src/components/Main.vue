<script>
import { HTTP } from '../auth/auth-http';
import axios from 'axios'

export default {
    name: 'Main',
    data() {
      return {
        post: [],
        asteroid: [],
        mars: []
      }  
    },
    methods : {
       fecthAsteroid() {
           axios.get('https://images-api.nasa.gov/search?q=asteroid&page_size=5')
           .then(response => {
              this.asteroid =  response.data["collection"]["items"]
              console.log(this.asteroid)
           })
           .catch(e => {
             console.log(e)
           })
       },

       fetchMarsData() {
          HTTP.get('mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-2-3&total_photos=6&page=1&api_key=2AH7DKu3eBC04a3UFr1bnuB2ERwy6qAYVe1hnZQJ')
          .then(response => {
            this.mars = response.data['photos']
          })
          .catch(e => {
             console.log(e)
          })
        }
    },
    mounted() {
       HTTP.get('/planetary/apod?count=1&api_key=2AH7DKu3eBC04a3UFr1bnuB2ERwy6qAYVe1hnZQJ')
        .then(response => {
              this.post = response.data
        })
        .catch(e => {
              console.log(e)
      })
      this.fecthAsteroid()
      this.fetchMarsData()
  }
}
</script>

<template>
   <main>
       <div class="container ">
           <div class="row">
             <div class="col-9">
                <span class="badge bg-red mb-3">#TODAY</span>
                    <div v-for="data in post" class="carousel-inner">
                          <img :src="data.url" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{{ data.date }}</h5>
                                <p>{{ data.title }}</p>
                            </div>
                    </div>

                    <span class="badge bg-dark-blue my-3">#MARS</span>
                    <div class="row overflow-auto" >
                          <div v-for="data in mars" class="col-4 mr-0">
                              <img :src="data['img_src']" class="d-block w-100"> 
                              <h4 class="mt-1 pb-3">{{ data['camera']['full_name'] }}</h4>     
                          </div>
                    </div>
             </div>
             <div class="col-3">
                 <h4 class="badge bg-dark-blue">Asteroid</h4>
                 <div class="row" v-for="data in asteroid">
                     <div class="col-12 my-2">
                         <img :src="data.links[0].href" class="d-block w-100 rounded-0">
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

h4 {
  font-size: 16px;
  font-weight: 600;
}
</style>
