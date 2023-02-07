<template>
  <div class="d-flex gap-5 py-3">
    <router-link v-for="(item, index) in items" :key="index" :to="item.route" :class="{ disabled: item.disabled}"> 
      {{ item.name }}<span v-if="index != items.length - 1" class="mx-2">/</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'RouteDirectoryComp',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}
</style>