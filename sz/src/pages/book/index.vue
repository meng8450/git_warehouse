<template>
  <div class="book">
    <i-input type="text" right mode="wrapped" placeholder="搜索书籍">{{value}}</i-input>
    <carousel/>
    <div class="hottag">
      <p>热门标签</p>
      <div class="taggroup">
      <i-tag i-class="tag" class="i-tags" name="心理">心理</i-tag>
      <i-tag i-class="tag" class="i-tags" name="诗歌">诗歌</i-tag>
      <i-tag i-class="tag" class="i-tags" name="古代">古代</i-tag>
      <i-tag i-class="tag" class="i-tags" name="散文">散文</i-tag>
      <i-tag i-class="tag" class="i-tags" name="感悟">感悟</i-tag>
      <i-tag i-class="tag" class="i-tags" name="爱情">爱情</i-tag>
      <i-tag i-class="tag" class="i-tags" name="历史">历史</i-tag>
      </div>
    </div>
    <div class="books">
      <p>精选书籍</p>
      <!-- <ul class="booklist">
        <li v-for="(book,index)in bookImg" :key="index">
          <a><img :src="book.src"></a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import carousel from '@/components/carousel'
export default{
  components: {carousel},
  data () {
    return {
      value: '',
      bookImg: [
        {src: '../../../static/images/first.jpg'},
        {src: '../../../static/images/second.jpg'},
        {src: '../../../static/images/third.jpg'},
        {src: '../../../static/images/four.jpg'}
      ]
    }
  }
}
</script>

<style>
.book .vary{
  width: 350px;
  margin-top:20px;
  margin:0 auto;
  font-size: 16px;
  text-align: center;
}
.hottag{
  margin-top: 20px;
}
.hottag .taggroup{
  height:50px;
  background-color: #fff;
}
.hottag .tag{
  margin-top:15px;
  margin-left: 20px;
  background-color:#FFFFCC;
}
.hottag p{
  margin-left: 15px;
  font-size: 14px;
  font-family: Microsoft yahei;
}
.books{
  margin-top:20px;
}
.books p{
  margin-left: 15px;
  font-size: 14px;
  font-family: Microsoft yahei;
}
</style>

