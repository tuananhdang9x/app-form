<template>
  <div class="toast-msg" :class="[toast.type, position]" @click="handleDetele">
    <div class="noti-msg">
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: null,
    };
  },
  props: {
    toast: {
      type: Object,
      default: () => {},
    },
    position: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    ...mapActions("toast", ["removeToast"]),
    handleDetele() {
      this.$emit("handleDetele");
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeToast(this.toast);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.toast-msg {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
  z-index: 99;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  min-width: 250px;
  max-width: 350px;
  height: 48px;
  padding: 8px 10px;
  animation: fadein 0.9s, shrink 0.5s 4s, fadeout 0.9s 4s;
  &.success {
    background-color: #27ae60;
  }
  &.error {
    background-color: #e74c3c;
  }
  .noti-msg {
    color: #fff;
  }
  .delete-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  @keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 60px;
      opacity: 0;
    }
  }
}
.top-right {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
  z-index: 99;
}
.top-left {
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-top: 10px;
  z-index: 99;
}
.bottom-right {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 10px;
  z-index: 99;
}
.bottom-left {
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  margin-bottom: 10px;
  z-index: 99;
}
.top-center {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, 0);
  margin-top: 10px;
}
.bottom-center {
  position: fixed;
  top: 92%;
  left: 50%;
  margin-bottom: 10px;
  transform: translate(-50%, 0);
  z-index: 99;
}
.left-center {
  position: fixed;
  left: 0;
  top: 50%;
  margin-left: 20px;
  z-index: 99;
  transform: translate(0, -50%);
}
.right-center {
  position: fixed;
  top: 50%;
  right: 0;
  margin-right: 20px;
  z-index: 99;
  transform: translate(0, -50%);
}
</style>