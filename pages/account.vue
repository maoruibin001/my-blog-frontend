<template>
    <div class="account">
        <p class="icon">
            <i class="iconfont icon-icon69" />
        </p>
         <div>
            <input v-model="name" type="text" placeholder="请输入姓名">
            <i class="iconfont icon-zhanghu" />
        </div>
        <div>
            <input v-model="phone" type="text" placeholder="请输入手机号码">
            <i class="iconfont icon-zhanghu" />
        </div>
        <div>
            <input v-model="password" type="password" placeholder="请输入你的密码">
            <i class="iconfont icon-yuechi" />
        </div>
        <div>
            <input v-model="repassword" type="password" placeholder="请再次输入你的密码">
            <i class="iconfont icon-yuechi" />
        </div>
        <transition name="fade" enter-active-class="animated zoomInLeft">
            <p v-if="show">
                {{ msg }}
            </p>
        </transition>
        <button @click="reset">
          <span>确认新增</span>
        </button>
    </div>
</template>

<script>
    import {
        debounce
    } from '~/lib/utils.js'
    import {
        mapActions,
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                msg: 'haha',
                phone: '',
                name: '',
                password: '',
                repassword: '',
                show: false
            }
        },
        computed: {
            ...mapState(['user'])
        },
        methods: {
            ...mapActions(['resetUser']),
            // checkPhone() {
            //     if (this.phone.length > 20) {
            //         this.msg = '请输入合适长度的用户名'
            //     }
            // },
            reset() {
                if (this.repassword === this.password) {
                    this.resetUser({
                        aid: this.user.id,
                        phone: this.phone,
                        password: this.password,
                        name: this.name
                    })
                }
            }
        },
        watch: {
            phone: debounce(function() {
                if (this.phone.length > 20) {
                    this.msg = '请输入合适长度的用户名'
                    this.show = true
                } else {
                    this.msg = ''
                    this.show = false
                }
            }, 500),
            password: debounce(function() {
                if (this.password.length < 3) {
                    this.msg = '请输入长度大于3位的密码'
                    this.show = true
                } else {
                    this.msg = ''
                    this.show = false
                }
            }, 500),
            repassword: debounce(function() {
                if (this.repassword !== this.password) {
                    this.msg = '请输入相同的密码'
                    this.show = true
                } else {
                    this.msg = ''
                    this.show = false
                }
            }, 500)
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .account {
        position: relative;
        margin: 5rem auto 2rem;
        height: 28rem;
        p.icon {
            width: calc(100% - 6.25rem);
            text-align: center;
            margin: 0 auto 6.25rem;
            .icon-icon69 {
                font-size: 3.75rem;
                color: rgb(129, 216, 208);
            }
        }
        div {
            width: 18.75rem;
            margin: 0 auto;
            position: relative;
            i {
                color: rgb(129, 216, 208);
                font-size: 1.875rem;
                display: block;
                position: absolute;
                top: 0;
                left: 1.25rem;
                transition: 0.5s;
            }
        }
        input {
            width: 12.5rem;
            height: 1.875rem;
            display: block;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
            margin-left: 4.375rem;
            outline: none;
            border: none;
            border-bottom: 0.1875rem solid rgb(129, 216, 208);
            background: transparent;
            color: #fff;
            font-size: 1rem;
            padding-left: 0.625rem;
            &:focus+i {
                color: darkturquoise;
            }
        }
        button {
            width: 12.5rem;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -5rem;
            background: rgb(129, 216, 208);
        }
    }
    p {
        text-align: center;
        height: 1rem;
        color: rgb(129, 216, 208);
    }
    .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
