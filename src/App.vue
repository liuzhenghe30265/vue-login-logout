<template>
  <div id="app">
    <header
            v-if="$route.meta.commonLayout">
      <router-link to="/">Home
      </router-link> |
      <router-link to="/about">About
      </router-link>
      <span>用户：{{$store.state.userInfo.name}}</span>
      <button
              @click="handleLoginout">注销</button>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginout() {
      this.$store.dispatch('loginOut').then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      })
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
