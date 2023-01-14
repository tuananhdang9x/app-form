<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <img :src="imgAddress" alt="avatar" v-if="isAdminPage" />
    <DropZoneHome
      v-if="!isAdminPage"
      :placeholder="placeholder"
      :triggerText="triggerText"
      @onAddItem="onChange"
    />
  </div>
</template>

<script>
import DropZoneHome from "@/components/share/dropZone/DropZoneHome.vue";
export default {
  components: {
    DropZoneHome,
  },
  props: {
    requireItem: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    triggerText: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "",
    },
    isAdminPage: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    onChange() {
      this.$emit("onChange");
    },
  },
  computed: {
    imgAddress() {
      return `http://localhost:8081/uploads/${this.value}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-item {
  margin-bottom: 16px;
  img {
    width: 200px;
    height: 200px;
  }
  .input-title {
    display: flex;
    margin-bottom: 6px;
    .input-name {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #333;
    }
  }
  ::v-deep .container-dropzone {
    width: 844px;
    .drop-zone {
      margin: 0 0 20px 0;
      padding: 0;
      width: 495px;
      height: 192px;
      background-color: #f8f8f8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
    }
    .drop-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      width: 364px;
      height: 48px;

      input {
        display: none;
      }
      .text-lable {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  ::v-deep .file-container {
    .list-file {
      margin-left: 0;
    }
  }
  ::v-deep .file-container {
    button {
      display: none;
    }
  }
}
</style>