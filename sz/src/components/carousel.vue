<template>
<div id="carousel" @mouseenter="enter" @mouseleave="leave">
    <transition-group tag="ul" name="spendImg">
        <li v-for="(image,index) in carouselImg" :key="index" v-show="index==mark">
            <a><img :src="image.src"></a>
        </li>
    </transition-group>
    <div class="bullet">
        <span v-for="(item,index) in carouselImg.length" :key="index" :class="{'active':index==mark}" @click="change(index)"></span>
    </div>
    <div class="switch">
        <span class="prev" @click="prev"><i-icon type="return" size="28" color="#80848f" /></span>
        <span class="next" @click="next"><i-icon type="enter" size="28" color="#80848f" /></span>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      mark: 0,
      time: null,
      carouselImg: [
        {src: 'http://dummyimage.com/375x200/ffe599'},
        {src: 'http://dummyimage.com/375x200/dd7e6b'},
        {src: 'http://dummyimage.com/375x200/b6d7a8'}
      ]
    }
  },
  methods: {
    change (index) {
      this.mark = index
    },
    autoPlay () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    },
    play () {
      this.time = setInterval(this.autoPlay, 4000)
    },
    enter () {
      console.log('enter')
      clearInterval(this.time)
    },
    leave () {
      console.log('leave')
      this.play()
    },
    prev () {
      this.mark--
      if (this.mark === -1) {
        this.mark = 2
      }
    },
    next () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    }
  },
  created () {
    this.play()
  }
}
</script>
<style>
#carousel{
    width: 100%;
}  
#carousel ul li{
    display: inline-block;
    position: absolute;
}
#carousel img{
    width: 100%;
    height: 150px;
}
.bullet{
    position: absolute;
    font-size: 0;
    top: 35%;
    left: 50%;
    margin-left: -42px;
}
.bullet span{
    display: inline-block;
	width: 10px;
	height: 10px;
	background-color: #ffffff;
	margin-left: 15px;
    border-radius: 10px;
}
.bullet span :first-child{
    margin-left: 0;
}
.switch span{
    position: absolute;
    width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: rgba(0,0,0,.1);
	font-size: 20px;
	color: #ffffff;
	top: 30%;
	margin-top: -35px;
	cursor: pointer;
	font-family: "宋体";
}
.switch span:hover{
    background-color: rgba(0,0,0,.5);
}      
#carousel .prev{
    left: 0;
}
#carousel .next{
    right: 0;
}
#carousel .active{
    background-color: red !important;
}
#carousel .spendImg-enter-active{
    transform: translateX(0);
    transition: all 1s ease;
}
#carousel .spendImg-leave-active{
    transform: translateX(-100%);
    transition: all 1s ease;
}
#carousel .spendImg-enter{
    transform: translateX(100%);
}
#carousel .spendImg-leave{
    transform: translateX(0);
}


</style>