<template>
  <div>
    <h3 class="title">Subtraction Practices</h3>
    <!-- <h5 > Max Qty: <input type="number" v-model="maxTotal" class="fld_result" >
      Generate From: <input type="number" v-model="fld_from" class="fld_result" >
      To: <input type="number" v-model="fld_to" class="fld_result">
      <BButton size="sm" class="m-3" variant="outline-primary" @click="rebuild()">Update</BButton>
    </h5> -->
    <ConditionBar v-model:maxTotal="maxTotal" v-model:fld_to="fld_to" v-model:fld_from="fld_from" @rebuild="rebuild()" />
    
    <div class="pb-4 box text-left">
        <!-- <b-row>
            <b-col>
            Total: <input type="number" v-model="maxTotal" class="fld_result" @blur="rebuild()">
            </b-col>
            
        </b-row> -->
        <b-row>
            <b-col cols="2" class="mb-3 question" v-for="itm in result" v-bind:key="itm" :class="itm.resp">
            {{itm.x}} - {{itm.y}} = <input type="number" v-model="itm.result" class="fld_result">
            </b-col>
        </b-row>
        
        <FooterArea @check-answer="check()" @shuffle="shuffle()" @clearAll="clearAll()" :total="result.length" :totalCorrect="totalCorrect" :totalWrong="totalWrong"/>
        
    </div>
  </div>
</template>

<script >

    import libs from '../libs/math.ts'
    import ConditionBar from '@/components/ConditionBar.vue';
    import FooterArea from '@/components/FooterArea.vue';
    
    export default {
      components : {ConditionBar,FooterArea},
      data(){
        return {
          fld_from : 2,
          fld_to: 30,
          totalCorrect : 0,
          totalWrong : 0,
          maxTotal : 100,
          dataList :[],
          result : [],
        }
        
      }, 
      mounted() {
        this.dataList = libs.getListNum(this.fld_from, this.fld_to);
        libs.buildList(this.dataList);
        libs.shuffle();
        this.result = libs.addLimit()
      },
      methods: {
        change(){
          this.idx = (this.idx+1 )%(this.colorArr.length)
          this.color = this.colorArr[this.idx]
          console.log(libs.result)
        },
        clearAll(){
          if(confirm("Are you sure you want to clear all?")){
            this.totalWrong = 0;
            this.totalCorrect = 0;
            libs.clean(this.result)
            // libs.shuffle();
            this.result = libs.addLimit(this.maxTotal);
          }
        },
        shuffle(){
          if(confirm("Are you sure you want to shuffle them?")){
            libs.clean(libs.result)
            libs.shuffle()
            this.result = libs.addLimit(this.maxTotal)
          }
        }, 
        rebuild(){
          if(confirm("Are you sure you want to change the conditions?")){
            // this.clearAll();
            this.result = [];
            libs.buildList(libs.getListNum(this.fld_from, this.fld_to));
            libs.shuffle();
            this.result = libs.addLimit(this.maxTotal);
          }
          
        },
        check() {
          this.totalCorrect = 0;
          this.totalWrong = 0;
          for(let item of this.result) {
            console.log(item)
            if (item.x*1 - item.y*1 == item.result * 1) {
              item.resp = 'good';
              this.totalCorrect++;
            } else {
              item.resp = 'wrong';
              this.totalWrong++;
            }
          }
        }
      }, 
      

    }
</script>

<style>
  .title  {background-color: #f3f3fe; padding: 10px;}
  .box  {margin-right: 5%; margin-left: 5%;}
  .fld_result {max-width: 100px;}
  .text-left {text-align: left;}
  .question {font-weight: bold; font-size: larger; }
  .question.wrong {color: red;}
  .question.good {color: green;}

</style>