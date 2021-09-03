<template>
  <div>
    <div class="sec04-button-wrapper">
      <p class="sec04-button-text">Online Shop</p>
    </div>
  </div>
</template>

<style>
.sec04-button-wrapper {
  background-color: #b98a67;
  width: 40vw;
  margin: 0 auto;
  height: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 3vw;
  transition:all 0.6s;
}
.sec04-button-wrapper:hover {
  background-color:#fff;
  transition:all 0.35s;
}

.sec04-button-text {
  font-size: 14px;
  color: #fff;
  transition:all 0.6s;
}
.sec04-button-wrapper:hover .sec04-button-text {
  color: #b98a67;
  transition:all 0.35s;
}
</style>