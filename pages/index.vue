<template>
    <div id="wrapper">
        <!-- <my-header /> -->
        <router-view v-show="!isLoading" class="content" :style="{minHeight: contentHeight, margin: 0, padding: 0}" />
        <!-- <spinner v-show="isLoading" /> -->
        <transition name="huojian" enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
            <a href="#app" class="rocket">
                <i v-if="show" class="iconfont icon-huojian" />
            </a>
        </transition>
        <!-- <my-footer /> -->
    </div>
</template>

<script>
    import "~/assets/css/icon.scss"
    import MyHeader from '~/components/front/MyHeader'
    import MyFooter from '~/components/front/MyFooter'
    // import spinner from '../share/spinner'
    const HEIDERHEIGHT = 106;
    const FOOTERHEIGHT = 94;
    const GAP = 60;
    import {
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                show: false,
                contentHeight: ''
                // contentHeight: document.body.clientHeight - HEIDERHEIGHT - FOOTERHEIGHT + GAP + "px",

            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        computed: {
            ...mapState(['isLoading'])
        },
        methods: {
            handleScroll() {
                this.show = window.scrollY > 400
            }
        },
        components: {
            MyHeader,
            MyFooter,
            // spinner
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    #wrapper {
        margin: 0 auto;
    }
    h1 {
        color: white;
        text-align: center;
    }
    .icon-huojian {
        font-size: 2.5rem;
        color: #C0CCDA;
        position: fixed;
        bottom: 1.25rem;
        right: 2.5rem;
        cursor: pointer;
        transition: 1s;
        &:hover {
            bottom: 1.875rem;
            color: #00ff7f;
            transition: 1s;
        }
    }
    .totop {
        bottom: 31.25rem;
        transition: 1s;
    }
    @media screen and (max-width: 440px) {
        .icon-huojian {
            right: 0.5rem;
        }
    }
</style>
