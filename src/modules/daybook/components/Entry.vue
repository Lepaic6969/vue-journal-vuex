<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:1}})">
    <!-- Título -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">24</span>
      <span class="mx-1 fs-5">Febrero</span>
      <span class="mx-2 fw-light">2023, viernes</span>
    </div>
    <div class="entry-description">
      Ullamco dolor do eiusmod ea sit quis irure duis dolore. Lorem deserunt amet nisi dolore
       laborum sit do reprehenderit voluptate ipsum enim nostrud ipsum. 
       Lorem culpa duis voluptate pariatur ipsum veniam proident est veniam elit nulla adipisicing mollit. 
       Non dolore incididunt adipisicing nostrud anim et duis ullamco nostrud eu anim do quis laborum.
        Eiusmod et commodo id excepteur irure amet elit in eiusmod deserunt eiusmod dolor dolore et.
        Aliqua eiusmod nostrud elit quis ad do reprehenderit quis enim cupidatat ad sunt sint laboris.
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transition:0.2s all ease-in;
    &:hover{
      background-color: lighten($color: grey, $amount: 45); //Toma el color y lo aclara, esto es propio de sass
      transition:0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  }
 
</style>