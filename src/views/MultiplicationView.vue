<template>
  <div>
    <h3 class="title">Multiplication Practices </h3>
    <ConditionBar v-model:maxTotal="maxTotal" v-model:fld_to="fld_to" v-model:fld_from="fld_from" @rebuild="rebuild()" />
    <div class="pb-4 box text-left">
        <b-row>
            <b-col cols="2" class="mb-3 question" v-for="itm in result" v-bind:key="itm" :class="itm.resp">
            {{itm.x}} x {{itm.y}} = <input type="number" v-model="itm.result" class="fld_result">
            </b-col>
        </b-row>
        <FooterArea @check-answer="check()" @shuffle="shuffle()" @clearAll="clearAll()" :total="result.length" :totalCorrect="totalCorrect" :totalWrong="totalWrong"/>
    </div>
  </div>
</template>

<script >
    import ConditionBar from '../components/ConditionBar'
    import libs from '../libs/math.ts'
    import FooterArea from '@/components/FooterArea.vue';
    export default {
      components : {ConditionBar, FooterArea},
      // color: 'blue',
     
       data(){
        return {
          fld_from : 2,
          fld_to: 30,
          totalCorrect : 0,
          totalWrong : 0,
          maxTotal : 100,
          dataList :[2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, ],
          result : [],
          colorArr: ['blue', 'red', 'black', 'purple'],
          color: 'blue',
          idx: 0
        }
        
      }, 
      mounted() {
        // this.dataList.push(libs.randomNum(30, 1000))
        // this.dataList = libs.getListNum(this.fld_from, this.fld_to);
        libs.buildList(libs.getListNum(this.fld_from, this.fld_to));
        libs.shuffle();
        this.result = libs.addLimit()
        // console.log(this.result);
        // for(const itm of this.result){
        //   console.log(itm)
        // }
      },
      methods: {

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
          if(confirm("Are you sure you want to update?")){
            // this.clearAll();
            this.result = [];
            libs.buildList(libs.getListNum(this.fld_from, this.fld_to));
            libs.shuffle();
            this.result = libs.addLimit(this.maxTotal);
          }
          
        },
        check() {
          
          if(libs.ok2check(this.result)){
            this.totalCorrect = 0;
            this.totalWrong = 0;
            for(let item of this.result) {
              // console.log(item)
              if (item.x * item.y == item.result * 1) {
                item.resp = 'good';
                this.totalCorrect++;
              } else {
                item.resp = 'wrong';
                this.totalWrong++;
              }
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