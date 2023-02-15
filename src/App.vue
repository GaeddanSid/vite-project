<script>
  export default {
    components: {}
  }
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/activity">Activity</RouterLink>
      </li>
      <li>
        <RouterLink to="/excuser">Excuser</RouterLink>
      </li>
      <li>
        <RouterLink to="/saved-excuses">Saved Excuses</RouterLink>
      </li>
      <li><RouterLink to="/profile">Profile</RouterLink></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
  @import '../assets/main.scss';
  $main-colour: #e08835;
  main {
    background-color: $main-bg;
    text-align: center;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    margin: 15px;
  }

  nav ul li a {
    color: $light;
    text-decoration: none;
    font-weight: 700;
  }
</style>
