<template>
    <div id="demo">
        <!--<button v-on:click="isShow = !isShow">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="isShow">hello</p>
        </transition>-->
        <!--<button v-on:click="isShow = !isShow">
            Toggle Render
        </button>
        <transition name="slide-fade">
            <p v-if="isShow">
                Hello
            </p>
        </transition>-->
        <!--<button v-on:click="isShow = !isShow">
            Toggle Show
        </button>
        <transition name="bounce">
            <p v-if="isShow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris facilisis enim libero, at lacinia diam fermentum id.
                Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>-->
        <!--<button @click="isShow = !isShow">
            Toggle render
        </button>
        <transition name="custom-classes-transition"
                    enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <p v-if="isShow">hello</p>
        </transition>-->
        <!--<button @click="isShow = !isShow">
            Toggle Javascript
        </button>
        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:enter-cancelled="enterCancelled"

                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                v-on:leave-cancelled="leaveCancelled"
        >
            <p v-if="isShow">hello</p>
        </transition>-->
        <!--<button @click="isShow = !isShow">
            Toggle
        </button>
        <transition v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-bind:css="false">
            <p v-if="isShow">Demo</p>
        </transition>-->
        <button @click="isShow = !isShow">
            Toggle
        </button>
        <transition appear appear-class="custom-appear-class" appear-to-class="custom-appear-to-class"
                    appear-active-class="custom-appear-active-class"></transition>
    </div>
</template>

<script>
    export default {
        name: "TransitionDemo",
        data(){
            return{
                isShow:true
            }
        },
        methods:{
            /*
            * 进入时
            * */
            beforeEnter(el){
                //...
                el.style.opacity=0
                el.style.transformOrigin='left'
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter(el,done){
                //...
                console.log('hello')
                Velocity(el,{opacity:1,fontSize:'1.4em'},{duration:500})
                Velocity(el,{fontSize:'1em'},{complete:done})
                //done()
            },
            afterEnter(el){
                //...
            },
            enterCancelled(el){
                //...
            },
            /*
            * 离开时
            * */
            beforeLeave(el){
                //...
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            leave(el,done){
                //...
                console.log('hello')
                Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
                Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
                Velocity(el, {
                    rotateZ: '45deg',
                    translateY: '30px',
                    translateX: '30px',
                    opacity: 0
                }, { complete: done })
            },
            afterLeave(el){
                //...
            },
            leaveCancelled(el){
                //...
            }

        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .slide-fade-enter-active{
        transition: all 0.3s ease;
    }
    .slide-fade-leave-active{
        transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
    }
    .slide-fade-enter,.slide-fade-leave-to{
        transform: translateY(10px);
        opacity: 0;
    }

    .bounce-enter-active{
        animation: bounce-in .5s;
    }
    .bounce-leave-active{
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }
</style>