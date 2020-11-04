<template>
    <header class='header'>
        <Section class="header-wrapper">
            <nuxt-link to="/">高灯科技</nuxt-link>
            <ul>
                <li v-for='item in navList' :key='item.title'>{{item.title}}</li>
            </ul>
        </Section>
    </header>
</template>

<script>
import Section from './section'
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
    },
    components: {
        Section
    } 
}
</script>

<style>
 .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: white;
 }

 .header-wrapper {
     display: flex;
     align-items: center;
 }
 a  {
    text-decoration: none;
 }
 ul {
    display: flex;
    justify-content: space-between; 
    list-style: none;
    flex: 1;
    padding-left: 540px;
 }
li {
    width: 64px;
    height: 16px;
    font-weight: 400;
    color: #333333;
    line-height: 16px;
    width: 64px;
    font-size: 16px;
  }

</style>