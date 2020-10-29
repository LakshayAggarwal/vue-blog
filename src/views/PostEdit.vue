<template>
  <div>
    <div class="form-container">
      <div class="main-header">
        <div class="back-navigation">
          <font-awesome-icon icon="arrow-left" @click="backNavigation()" class="back-button" />
        </div>
        
        <h2 class="page-heading">
          Edit Post
        </h2>
      </div>      
      <form action="" @submit.prevent="updateBlogPost" method="post">
        <label for="title">Title</label>
        <input class="input-box" v-model="post.title" type="text" name="title" id="title">

        <label for="category">Category</label>
        <input class="input-box" v-model="post.category" type="text" name="category" id="category">

        <label for="content">Content</label>
        <textarea class="input-box" v-model="post.content" name="content" cols="30" rows="10"></textarea>

        <div class="button-group">
          <button class="button fill-button" @click="cancelClick()">Cancel</button>
          <input class="button" type="submit" value="Submit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PostEdit',
  data () {
    return {
      post: {}
    }
  },
  created () {
    this.fetchData();
  },
  computed: {
    ...mapGetters([
      'getPost'
    ])
  },
  methods: {
    ...mapActions([
      'updatePost'
    ]),
    fetchData() {
      this.post = this.getPost(this.$route.params.postId);
    },
    updateBlogPost() {
      this.updatePost(this.post);
      this.$router.push({ path: '/' });
    },
    cancelClick() {      
      this.$router.push({ path: '/' });
    },
    backNavigation() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">

.form-container {
  max-width: 70%;
  margin: auto {
    top: 20px;
  };

  .main-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .back-navigation {
      flex: 40%;
      font-size: 1.5rem;
    }

    .page-heading {
      flex: 60%;
    }
  }

  .button-group {
    text-align: right;
  }
}

@media (max-width: 500px) {
  .form-container {
    max-width: 90%;
  }
}
</style>
