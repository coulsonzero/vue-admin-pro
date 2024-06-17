<template>
  <div class="page">
    <header class="header-wrapper">
      <HeaderWrapper></HeaderWrapper>
    </header>
    <div class="content-wrapper">
      <div class="card-wrapper">
        <CardWrapper></CardWrapper>
        <ChatWrapper></ChatWrapper>
      </div>
      <Product />
      <Card />
    </div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
}


.header-wrapper {
    width: 100%;
    height: 80px;
    background: #f3f6fd;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.content-wrapper {
    width: 100%;
    height: calc(100% - 100px);
    background-color: #fff;
    scroll-behavior: smooth;
    overflow: scroll;
}

.card-wrapper {
  display: flex;
}
</style>