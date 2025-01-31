<template>
  <div>
    <AddMakeupItem />
    <MakeupItemsList />
  </div>
</template>

<script>
import AddMakeupItem from './components/AddMakeupItem.vue';
import MakeupItemsList from './components/MakeupItemsList.vue';


export default {
  components: {
    AddMakeupItem,
    MakeupItemsList
  }
};
</script>


