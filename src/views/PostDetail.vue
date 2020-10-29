<template>
  <div class="detail-container">
    <div class="button-group">
      <span class="left-button-group">
        <font-awesome-icon icon="arrow-left" @click="backNavigation()" class="back-button" />
      </span>
      <span class="right-button-group">
        <font-awesome-icon icon="thumbs-up" @click="toggleLike()" :class="['like-button', isLiked ? 'liked' : '']" />
        <button class="button fill-button" @click="navigateToEdit(post.postId)">Edit</button>
        <button class="button" @click="deletePost()">Delete</button>
      </span>      
    </div>
    <div class="form-container">
      <h2 class="post-heading">
        {{post.title}} 
        <span class="post-subheading">{{post.category}}</span> 
      </h2>
      <div class="post-content">{{post.content}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostDetail',
  props: {
    postDetails: Object
  },
  data () {
    return {
      post: [],
      isLiked: false
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
    ...mapActions ([
      'deletePostAction',
      'updatePost'
    ]),
    fetchData() {
      this.post = this.getPost(this.$route.params.postId);
      this.isLiked = this.post.isLiked;
    },
    navigateToEdit(postId) {
      this.$router.push({ path: `/edit/${postId}` });
    },
    deletePost() {
      this.deletePostAction(this.post.postId);
      this.$router.push({ path: `/` });
    },
    toggleLike() {
      this.post.isLiked = !this.post.isLiked;
      this.isLiked = this.post.isLiked;
      this.updatePost(this.post);
    },
    backNavigation() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">

.detail-container {
  max-width: 70%;
  margin: auto;

  .form-container {
    text-align: left;

    .post-heading {
      margin-bottom: 20px;
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      font-size: 1.2rem;
      text-align: justify;
      white-space: pre-wrap;
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    .left-button-group {
      font-size: 1.5rem;
    }

    .right-button-group {
      .like-button {
        font-size: 1.2rem;
        color: #a4a4a4;
        cursor: pointer;
      }

      .liked {
        color: #406BA7;
      }
    }
  }
}

@media (max-width: 500px) {
  .detail-container {
    max-width: 90%;
  }
}

</style>

