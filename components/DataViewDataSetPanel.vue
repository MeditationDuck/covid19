<template>
  <div class="DataView-DataSet">
    <h3 class="DataView-DataSet-title">
      {{ title }}
    </h3>
    <div class="DataView-DataSet-DataInfo">
      <span v-if="lText !== ''" class="DataView-DataSet-DataInfo-summary">
        <strong>
          {{ lText }}
        </strong>
        <small class="DataView-DataSet-DataInfo-summary-unit">
          {{ unit }}
        </small>
      </span>
      <br v-if="lText !== ''" />
      <small v-if="sText !== ''" class="DataView-DataSet-DataInfo-date">
        {{ sText }}
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    lText: {
      type: String,
      required: false,
      default: '',
    },
    sText: {
      type: String,
      required: false,
      default: '',
    },
    unit: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.DataView {
  &-DataSet {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

    &-title {
      font-size: 2rem;
      font-weight: normal;
      color: $gray-2;
      flex: 1 1 auto;
    }

    &-DataInfo {
      text-align: right;

      &-summary {
        flex: 0 1 auto;
        display: inline-block;
        color: $gray-2;
        white-space: nowrap;
        font-style: normal;
        line-height: 30px;
        @include font-size(30);

        strong {
          font-weight: 600;
        }

        &-unit {
          width: 100%;
          @include font-size(18);
        }
      }

      &-date {
        display: inline-block;
        width: 100%;
        color: $gray-3;
        line-height: initial;
        @include font-size(12);
      }
    }
  }
}
</style>
