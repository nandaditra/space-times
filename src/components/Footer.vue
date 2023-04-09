<script>
    export default {
        name:'Footer'
    }
</script>

<template>
   <footer>
       <div class="container">
           <div class="row">
                <div class="col-sm-12 col-md-6 mr-4">
                    <img class="logo" v-bind:src="'/src/assets/img/logo.png'" alt="logo.png">
                    <p class="p-footer mt-4">The images.nasa.gov API is organized around REST, has predictable/resource­-oriented URLs and uses HTTP response codes to indicate API errors. This API uses built-­in HTTP features such as HTTP authentication and HTTP verbs, which are understood by many off-­the-­shelf HTTP clients. Please note that JSON is returned by all API responses, including errors. Each of the endpoints described</p>
                </div>
                <div class="col-sm-12 col-md-6 mr-0">
                    <div class="row">
                         <div class="col-sm-8 col-md-4">
                             <p class="text-center"><b>Media Social</b></p>
                             <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Tiktok</li>
                             </ul>
                         </div>
                         <div class="col-sm-8 col-md-4">
                            <p class="text-center"><b>Other</b></p>
                            <ul>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Term & Condition</li>
                                <li>Safety</li>
                            </ul>
                         </div>
                         <div class="col-sm-8 col-md-4">
                            <p class="text-center"><b>Sponsored By</b></p>
                            <img class="w-100" v-bind:src="'/src/assets/img/nasa.png'" alt="nasa.png">
                         </div>
                    </div>
                </div>
           </div>
       </div>

       <p class="text-center"> &copy; copyright - 2023 by hackntra</p>
   </footer>
</template>

<style>
footer {
    margin-top:20px;
    font-size: 14px;
    text-align: justify;
}

.logo {
   width:25%;
   text-align: left;
}

p {
    margin:10px;
}

footer ul {
    list-style-type: none;
}

footer li {
   padding:5px;
}

footer li:hover {
    font-weight: 600;
    color:black;
}
</style>
