<template>
    <footer class='footer'>
        <div class="footer-info">
            <Section class="info">footer</Section>
        </div>
        <div class="footer-copy">
            <Section class="copy">copy</Section>
        </div>
    </footer>
</template>

<script>
import Section from './section'
export default {
   components: {
     Section
   } 
}
</script>

<style>
.footer {
    height: 660px;
    background: #002446;
    color: white;
}
.footer-info {
    display: flex;
    justify-content: center;
    height: 580px;
}
.footer-copy {
    display: flex;
    justify-content: center;
    height: 80px;
    background: #001f3c;
}
.copy {
    display: flex;
    align-items: center;
}
</style>