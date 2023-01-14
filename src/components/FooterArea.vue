<template>
    <div class="footer">
        <b-row>
            <b-col>
              <h3>Correct: {{ totalCorrect }} / {{ total }}</h3>
              <h3>Wrong: {{ totalWrong }} / {{ total }}</h3>
            </b-col>
            <b-col class="text-right">
              <BButton size="md" class="m-3" variant="outline-danger" @click="$emit('clearAll')" >Clear All</BButton>
              <BButton size="md" class="m-3" variant="outline-primary" @click="$emit('shuffle')">Shuffle</BButton>
              <BButton size="md" class="m-3" variant="outline-primary" @click="$emit('checkAnswer')">Check Answer</BButton>
            </b-col>
        </b-row>
    </div>
  </template>
  
  <script lang="ts" >

  export default {
      emits : ['rebuild', 'clearAll', 'shuffle', 'checkAnswer'],
      props: ['totalCorrect', 'total', 'totalWrong']
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .text-right{text-align: right;}
  </style>
  