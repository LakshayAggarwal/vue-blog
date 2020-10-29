<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Blog App</router-link>
    </div>
    <router-view class="route-container"/>
    <footer class="footer">
      Copyright © 2020. All rights reserved.
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  #nav {
    height: 10vh;
    background: #333;
    padding: 25px;
    display: flex;
    color: #fff;
    justify-content: left;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .route-container {
    padding-top: 20px;
    min-height: 80vh;
  }

  .footer {
    display: flex;
    font-size: 0.8rem;
    height: 10vh;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
