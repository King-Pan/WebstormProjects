<template>
  <div class="hello">
    {{msg}}
    <br>
    {{1*1000}}
    <br>
    {{"哈哈"}}
    <br>
    {{ 0>10 ? "对的" : "0==10" }}
    <br>
    {{ '注意: 只能存在单行语句'}}

    <p>{{flag}}</p>
    <p v-html="hello">

    </p>
    <p v-text="hello">

    </p>
    <span v-bind:class="v_class">哈哈</span>
    <div v-bind:title="ts" v-bind:class="d_class">提示</div>
    <div class="div_c1">
      {{message.split('').reverse().join('')}}
    </div>
    <span v-if="show">我能不能被看到啊</span>
    <a href="javascript;" v-on:click="submit">登录</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: '我是flag',
      hello: 'Hello Vue指令',
      v_class: 'ha',
      ts: '我是一个提示',
      d_class: 'div_c1',
      message: '我是中国人',
      show: true
    }
  },
  methods: {
    submit: function () {
      alert('登录')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha{
  color: red;
}
.div_c1{
  color: blue;
  background-color: aliceblue;
  font-size: 20px;
}
</style>
