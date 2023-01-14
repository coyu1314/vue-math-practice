<template>
  <div>
    
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="#">Simple Math</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/multiplication">Multiplication</b-nav-item>
        <b-nav-item to="/division">Division</b-nav-item>
        <b-nav-item to="/plus">Addition</b-nav-item>
        <b-nav-item to="/subtraction">Subtraction</b-nav-item>
        <!-- <b-nav-item ><router-link to="/division">Division</router-link></b-nav-item> -->
      </b-navbar-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto" >
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <nav>
      <router-link to="/">Home </router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/product">Product</router-link> | 
      <router-link to="/multiplication">Multiplication</router-link> | 
      <router-link to="/division">Division</router-link> | 
      <router-link to="/subtraction">Subtraction</router-link> | 
      <router-link to="/plus">Plus</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
