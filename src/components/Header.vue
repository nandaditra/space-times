<script>

export default{
    name: 'Header',
}   
</script>

<template>
   <header class="shadow-sm p-3 mb-3 z-1">
       <nav class="navbar navbar-expand-lg">
          <div class="container">
            <img v-bind:src="'/src/assets/img/logo.png'">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0z">
                <li class="nav-item">
                  <a class="nav-link" href="#">SEARCH</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">METADATA</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ASSETS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CAPTIONS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ALBUM</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   </header>
</template>

<style>

header {
  padding:10px;
  
}

.nav-item {
  font-size: 20px;
  padding:5px 10px;
  font-weight: 500;
}

.nav-item a:hover {
  font-weight: 600;
  color:#FF3131;
}

.nav-link {
  color:#17214D;
}
</style>
