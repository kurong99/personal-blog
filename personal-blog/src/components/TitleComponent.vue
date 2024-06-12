<template>
    <div class="title">
      <p class="typing">
        <slot></slot>
      </p>
    </div>
</template>

<script>
export default {
    name: 'TitleComponent'
}
</script>

<style scoped>
    .title {
    float: left;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    transform: perspective(1000px) rotateY(10deg);
  }
  .typing {
    width: 8rem;
    margin: 0;
    color: aliceblue;
    white-space: nowrap;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-right: 3px solid transparent;
    overflow: hidden;
    animation: typing 2.5s steps(5, end) infinite, flashes .75s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 10rem;
    }
  }
  @keyframes flashes {
    from, to { 
      box-shadow: 3px 0 0 0 transparent;
    }
    50% { 
      box-shadow: 3px 0 0 0;
    }
  }
</style>