<template>
  <div class="post-container" @click="navigateToDetail(postData.postId)">
    <div class="post-heading">
      {{postData.title}} 
      <span class="post-subheading">{{postData.category}}</span> 
    </div>
    <div class="post-content">
      {{postData.content}}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'PostListItem',
  props: {
    postData: {
      type: Object
    }
  },
  methods: {
    navigateToDetail(postId) {
      this.$router.push({ path: `/detail/${postId}` });
    }
  }
}
</script>

<style scoped lang="scss">

.post-container {
  text-align: left;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 2px;
  margin-top: 15px;
  // h-offset v-offset blur spread color
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background: #f4f4f4;
    &::after {
      background: #f4f4f4;
    }
  }

  .post-heading {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .post-subheading {
    font-size: 0.7rem;
    background: #333;
    color: #fff;
    padding: 3px 6px;
    letter-spacing: 1px;
    border-radius: 10px;
    margin-left: 5px;
    text-transform: capitalize;
  }

  .post-content {
    overflow: hidden;
    position: relative; 
    line-height: 1.2rem;
    max-height: 3.6rem;
    text-align: justify;
    white-space: pre-wrap;
  }
}
</style>
