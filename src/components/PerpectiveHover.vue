<script setup>
import { onMounted, ref, watch } from 'vue';

const container = ref(null);
const inner = ref(null);

const mouse = ref(null);

var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.value.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

watch(container, () => {
    if (container) {
        mouse.value = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function(event) {
                var e = event || window.event;
                this.x = (e.clientX - this._x);
                this.y = (e.clientY - this._y) * - 1;
            },
            setOrigin: function(e) {
                this._x = e.value.offsetLeft + Math.floor(e.value.offsetWidth/2);
                this._y = e.value.offsetTop + Math.floor(e.value.offsetHeight/2);
            },
            show: function() { return '(' + this.x + ', ' + this.y + ')'; }
        }

        setTimeout(() => {
            mouse.value.setOrigin(container)
        }, 500)
    }
})
// Mouse 

// Track the mouse position relative to the center of the container.

var update = function(event) {
  mouse.value.updatePosition(event);
  updateTransformStyle(
    (((mouse.value.y / inner.value.offsetHeight/2).toFixed(2)) * -1),
    (((mouse.value.x / inner.value.offsetWidth/2).toFixed(2)) * -1),
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x * 10 + "deg) rotateY(" + y * 10 + "deg) scale(1)";
  inner.value.style.transfrom = style;
  inner.value.style.webkitTransform = style;
  inner.value.style.mozTransform = style;
  inner.value.style.msTransform = style;
  inner.value.style.oTransform = style;
};
</script>

<template>
    <div
        ref="container"
        id="container" 
        v-on:mouseenter="onMouseEnterHandler"
        v-on:mousemove="onMouseMoveHandler"
        v-on:mouseleave="onMouseLeaveHandler"
    >
        <div
            ref="inner"
            id="inner"
        >
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
#container {
  /* This will come into play later */
  transform: perspective(40px) rotateX(0deg) rotateY(0deg) scale(1);
  perspective: 1500px;
}

#inner {
    transition: all 500ms ease 0s;
}   
</style>