// export default {
  module.exports = {
    foo: function() { alert("foo!") }, 
    totalCorrect : 0,
    totalWrong: 0,
    result : <any>[], 
    arrList : <any>[],
    // maxTotal : 100,

    randomNum: function(min : number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    },

    ok2check : function (dataList : any){
      let ok2check = true;
      for(const item of dataList) {
        if(item.result==''){
          alert("Please finish all questions first");
          ok2check = false
          break;
        }
      }
      return ok2check;
    },
    getListNum: function(min_in=0, max_in=30){
      let numlist = [];
      let min = min_in*1;
      let max = max_in*1;
      if(min*1 >=0 && max*1 > min*1+2 && max*1 <=1000){
        
       //ok
      }else{
        alert("From "+min +" and To "+max +" is not valid range");
        
        min = 0;
        max = 30;
      }
      for(let i = min; i<=max; i++){
        numlist.push(i)
      }
      if(numlist.length>30){
        let maxQty = 0;
        const tmpList = [];

        while(maxQty < 30){
          const idx = this.randomNum(0, numlist.length);
          tmpList.push(numlist[idx]);
          numlist.splice(idx, 1)
          maxQty ++;
        }
        // console.log('tmp list: ')
        // console.log(tmpList);
        numlist = tmpList;
      }
      return numlist;
    },

    buildList: function(newList: any, largeFirst=false) {
      this.result = [];
      const mapKey :any = {};
      if(newList){
        this.dataList = newList;
      }
        for (let i = 1; i < this.dataList.length; i++) {
          for (let n = 0; n < this.dataList.length; n++) {
            let first = this.dataList[i];
            let second = this.dataList[n];
            if(first < second){
              first = this.dataList[n];
              second = this.dataList[i];
            }
            const key = first.toString() +'-'+second.toString();
            console.log(key);
            if( !(key in mapKey)){
              mapKey[key] = '';
              this.result.push({
                x: first,
                y: second,
                result : '',
                resp: '',
              });
            }
            
          }
        }
        console.log(mapKey);
        // console.log('Total: ' + this.result.length);
        // console.log('Final Total: ' + this.result.length);
        // console.log(this.result)
    }, 
    clean: function (dataList: any) {
        // if (confirm('Are you sure to clean all?')) {
          this.totalCorrect = 0;
          this.totalWrong = 0;
    
          for (const item of dataList){
            item.resp = '';
            item.result = '';
          }
          return this.result;
        // }
      }, 
    
      shuffle : function(qty=0) {
        const arrList = this.result;
        const max = arrList.length;
        let tmpVal;
        for (let i = 0; i < max; i++) {
          const randIdx = Math.floor(Math.random() * max) + 0;
          tmpVal = arrList[i];
          arrList[i] = arrList[randIdx];
          arrList[randIdx] = tmpVal;
        }
        this.result = arrList;
        if(qty > 0){
          return this.addLimit();
        }else{
          return arrList;
        }
        
        
      },

      addLimit: function(qty=100) {
        const arrList : any= [];
        let count = 0;
        for ( const item of this.result){
          if (count < qty) {
            arrList.push(item);
            count++;
          }
        }
        return arrList;
      },

      

}