<template>
    <div :class="[paramname, {'fixed': flag}]">
        <h3 v-if="flag">{{ parameter }}</h3>
        <h3 v-else>{{ rand }}</h3>
        <div class="param">
            <div class="paramblock"></div>
        </div>
        <h2>{{ paramname }}</h2>
    </div>
</template>

<script>
import {onMounted, ref} from 'vue';

export default {
    name: 'ParamBlock',
    setup() {
        const rand = ref(0);
        onMounted(() => {
            setInterval( function () {
                rand.value = Math.floor(Math.random() * 5) + 1;
            },100);
        });
        return {
            rand
        }
    },
    inject: ['fixedFlag','randomParam'],
    props: ['paramname'],
    computed: {
        parameter() {
            if(this.paramname === 'Speed') {
                return this.randomParam[0];
            } else if (this.paramname === 'Scale') {
                return this.randomParam[1];
            } else if (this.paramname === 'Charge') {
                return this.randomParam[2];
            } else if (this.paramname === 'Shield') {
                return this.randomParam[3];
            }
            return 0;
        },
        flag() {
            return this.fixedFlag.value;
        }
    },    
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
}
.param {
    height: 300px;
    width: 100%;
    background-color: #444;
    position: relative;
    --param: v-bind(parameter);
}
.paramblock {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: calc(20% * var(--param));
    animation: .8s ease-in-out alternate infinite beyoon;
}
.Speed {
    flex: 1;
    .paramblock {
        background-color: orange;
    }
    h2 {
        color: orange;
    }
}
.Scale {
    flex: 1;
    .paramblock {
        background-color: lightgreen;
    }
    h2 {
        color: lightgreen;
    }
}
.Charge {
    flex: 1;
    .paramblock {
        background-color: magenta;
    }
    h2 {
        color: magenta;
    }
}
.Shield {
    flex: 1;
    .paramblock {
        background-color: skyblue;
    }
    h2 {
        color: skyblue;
    }
}
.fixed {
    .paramblock {
        animation-play-state: paused;
        animation: .5s ease-in-out alternate paramfix;
    }
}


@keyframes beyoon {
    0% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}

@keyframes paramfix {
    0% {
        height: 0;
    }
    100% {
        height: calc(20% * var(--param));
    }
}
</style>