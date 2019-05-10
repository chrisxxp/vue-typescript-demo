<template>
    <div>
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../components/itemcontainer.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    itemcontainer,
  },
})

export default class Item extends Vue {
    created() {
        //进入题目页面，开始计时
        this.$store.commit('REMBER_TIME');
    }
}
</script>

<style lang="scss">
    

</style>
