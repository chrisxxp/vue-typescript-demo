<template>
  <div class="home_container">
    <div ref="test" v-on:click="click()">
    测试
  </div>
      <itemcontainer father-component="home"></itemcontainer>
      
  </div>
</template>

<script lang="ts">
import itemcontainer from '../components/itemcontainer.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    itemcontainer,
  }, 
})

export default class Home extends Vue {
  click () {
    let elet: any  = this.$refs.test
    elet.style.color = "red"
  }
}
</script>
 