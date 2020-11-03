<template>
    <header class='header'>
        <div class="header-wrapper">
            <nuxt-link to="/">高灯科技</nuxt-link>
           <nav>
               <ul>
                   <li v-for='item in navList' :key='item.title'>{{item.title}}</li>
               </ul>
           </nav>
        </div>
    </header>
</template>

<script>

export default {
    data () {
        return {
            navList: [
                {
                    title: '关于高灯',
                },
                {
                    title: '业务范畴',
                },
                {
                    title: '财税科技',
                },
                {
                    title: '联系我们',
                },
            ]
        }
    }
}
</script>

<style>
 .header {
    display: flex;
    height: 100px;
    padding-left: 362px;
    padding-right: 360px;
    background: #FFFFFF;
 }

 .header-wrapper {
     display: flex;
     align-items: center;
     width: 100%;
 }
 a  {
    text-decoration: none;
    color: inherit;
 }
 nav {
     flex:1;
 }
 ul {
    display: flex; 
    justify-content: space-between;
    list-style: none;
    padding-left: 540px;
 }
li {
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    line-height: 16px;
  }

</style>