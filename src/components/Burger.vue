<template>
    <div>
    <!-- <div id="burger" :class="{ 'active' : !getPanelIs }" @click.prevent="toggle"> -->
        <span class="menuContainer" v-on:click="this.toggle">
            <i class="fas fa-bars menubars"></i>
        </span>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
	
	methods: {
			...mapMutations({
				toggle : 'togglePanel'
			}),
			...mapGetters({
				getPanelIs : 'getPanelIs',
			})
	}
}
</script>

<style scoped>
    .menuContainer {
        position: fixed;
		top: 16px;
		left: 16px;
        z-index: 1000;
    }
    .menubars {
        font-size: 1.5rem;
        color : #322F42;
    }
   .hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }

    .burger-button {
        position: fixed;
		top: 0;
		left: 0;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 1000;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: #130f40;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar {
        background-color: #fff;
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>