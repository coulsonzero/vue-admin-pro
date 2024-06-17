<template>
  <div class="card-wrapper">
    <div class="card-bottom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.card-wrapper {
  width: 200px;
  height: 300px;
  /* background-color: #454545; */
  background-image: url("https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.card-bottom {
  height: 100px;
  width: 100%;
  border-radius: 5px;
  bottom: 0;
  background: rgba(255, 255, 255, 0.26);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>