<template>
<div id="date">
    <div class="index-container">
        <p class="day">{{_index}}</p>
        <span class="vertical-line"></span>
    </div>
    <div class="dateinfo">
        <p class="month">{{month}}</p>
        <p class="year">{{year}}</p>
    </div>
    
</div>
</template>

<script>
export default {
    props:{
        // index:{
        //     type:Number,
        //     observer:function(newVal,oldVal,changedPath)
        //     {
        //        if(newVal<10){
        //            this.setData({
        //                _index:'0'+newVal
        //            })
        //        } 
        //     }
        // }
    },
    data(){
        return{
    //         months:[
    //     '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
    //     '十二月'
    //   ],
    //         year:Number,
    //         month:String, 
    //         _index:String
               year:2018,
               month:'六月',
               _index:15
        }
    },
    methods:{
    //     ready:function(){
    //         let date = new Date()
    //         let month = date.getMonth()
    //         let year = date.getFullYear()
    //         this.setData({
    //             month:this.data.months[month],
    //             year:year
    // })
    // }
    }
}
</script>

<style>
.date{
    display: inline-flex;
    flex-direction: row;
    line-height: 30px;

}
.index-container{
    display: flex;
    flex-direction: row;
    align-items: baseline;

}
.day{
    font-size: 20px;
}
.vertical-line{
    margin-right: 7px;
    height: 22px;
    border-left: 1px solid black;
}
.dateinfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.month{
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 2px;
    margin-right: 2rpx;
}
.year{
    font-size: 10px;
    line-height: 10px;
    padding-bottom: 3px;    
}
</style>


