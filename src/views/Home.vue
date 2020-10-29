<template>
  <div class="home">
    <div class="header-button">
      <router-link class="button" to="/create">Add New Post</router-link>
    </div>
    <div v-for="post in posts" :key="post.index">
      <PostListItem :post-data="post" />
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/PostListItem.vue'

export default {
  name: 'Home',
  components: {
    PostListItem
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  max-width: 70%;
  margin: auto;
  padding: 20px 10px;

  .header-button {
    padding-bottom: 20px;
    text-align: right;
  }
}

@media (max-width: 500px) {
  .home {
    max-width: 90%;
  }
}

</style>
