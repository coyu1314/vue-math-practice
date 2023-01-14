<template>
    <div class="condition">
        <h5 > 
            Generate Questions From: <input type="number" :value="fld_from" @input="$emit('update:fld_from', $event.target.value)" class="fld_result" >
            To: <input type="number" :value="fld_to" @input="$emit('update:fld_to', $event.target.value)" class="fld_result">
            For a max Qty: <input type="number" :value="maxTotal" @input="$emit('update:maxTotal', $event.target.value)" class="fld_result" >
            <BButton size="sm" class="m-3" variant="outline-primary" @click="$emit('rebuild')">Update</BButton>
        </h5>
    </div>
  </template>
  
  <script lang="ts" >

  export default {
      emits : ['rebuild', 'update:maxTotal', 'update:fld_from', 'update:fld_to'],
      props: ['title', 'maxTotal', 'fld_from', 'fld_to']
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">

  </style>
  