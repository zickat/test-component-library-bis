<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="stylus" scoped>
.button {
  padding: $spacingXXS $spacingS;
  color: blue;
  background-color: white;
  cursor: pointer;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: $boldWeight;
  line-height: 1;
  border: 1px solid black;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  opacity: 0.9;
  transition: all 0.15s ease-in-out;
  outline: 0;
  font-size: $fontS;

  &:hover, &:focus {
    opacity: 1;
    transform: scale(1.02);
  }
}
</style>
