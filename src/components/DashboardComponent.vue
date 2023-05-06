<script>
import SideBarComponent from '../components/SideBar/SideBarComponent.vue';
import NavBarComponent from './NavBarComponent/NavBarComponent.vue';

export default {
  components: {
    SideBarComponent,
    NavBarComponent,
  },

}


</script>

<template>
  <div class="main">
    <div class="content__side-bar">
      <SideBarComponent />
    </div>

    <div class="content__lateral">
      <div class="content__nav-bar">
        <NavBarComponent />
      </div>
      <div class="pages">
        <slot></slot>
      </div>
    </div>


  </div>
</template>

<style lang="scss" src="./style.scss" scoped/>

