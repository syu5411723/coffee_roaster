<template>
  <section class="img-continer">
    <div class="img-inner" id="img-wrapper-trigger">
      <img src="~/static/images/info_full.jpg" alt="" id="img-wrapper-png"/>
    </div>
  </section>
</template>

<script>
export default {
    mounted() {
        const scene = this.$scrollmagic
        .scene({
            triggerElement: "#img-wrapper-trigger",
            triggerHook: 0.4,
            duration: 800,
        })
        .setTween('#img-wrapper-png', {
            css: {
                transform: 'translateY(70px)',
                transion: 'ease'
            },
        });
        this.$scrollmagic.addScene(scene);
    }
};
</script>

<style>
.img-continer {
  margin-top: 45vw;
  margin-bottom: 30vw;
}
.img-inner {
  height: 40vw;
  overflow: hidden;
}
#img-wrapper-png {
    width: 100%;
    height: 45vw;
    transform: translateY(0);
    transition: ease;
}
</style>