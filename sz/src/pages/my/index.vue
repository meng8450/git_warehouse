<template>
  <div class="my">
    <div class="head">
      <i-icon i-class="setup" type="setup" size="28" color="#ffffff" />
      <i-icon i-class="message" type="message" size="28" color="#ffffff" />
      <div class="user">
        <!-- <image :src="avatar"></image> -->
        <i-avatar :src="avatar" size="large"></i-avatar>
        <span>{{username}}</span>
      </div>
      <div class="excerpt">
        <!-- <button class="write"><image :src="write" />制作札记</button>
        <button class="note"><image :src="note" />我的札记</button> -->
        <i-button i-class="brush" shape="circle" :click="handleClick"><i-icon type="brush" size="28" color="#80848f" />制作札记</i-button>
        <i-button i-class="activity" shape="circle" :click="handleClick"><i-icon type="activity" size="28" color="#80848f" />我的札记</i-button>
      </div>
    </div>
    <i-cell-group>
    <i-cell title="我的喜欢" is-link url="#"></i-cell>
    <i-cell title="我的关注" is-link url="#"></i-cell>
    </i-cell>
    </i-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    avatar: require('../../../static/images/user.jpeg'),
    username: '懵懵'
  },
  methods: {}
}
</script>

<style>
.my {
  width: 100%;
  height: 280px;
  background-image: #99CCFF;
}
.my .setup{
  width: 25px;
  height: 25px;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.my .message{
  width: 25px;
  height: 25px;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
}
.head{
  background-color: #99CCCC;
  height: 250px;
}
.user{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
/* .user image{
  width: 70px;
  height: 70px;
  border-radius: 100%;
} */
.user span{
  font-size: 16px;
  color: #333333;
  margin-top: 8px;
}
.excerpt .brush{
  float: left;
  margin-left: 70px;
}
.excerpt .activity{
  float: left;
}
/* .excerpt button{
  width: 100px;
  height: 40px;
  border-radius: 50%;
}
.excerpt .write{
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: 0.5;
  color: #fff;
  font-size: 12px;
  float: left;
  margin-left: 50px;
}
.excerpt image{
  width: 20px;
  height: 20px;
  margin-top: 8px;
}
.excerpt .note{
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: 0.5;
  color: #fff;
  font-size: 12px;
  float: right;
  margin-right: 50px;
  border-radius: 30%;
} */
</style>

