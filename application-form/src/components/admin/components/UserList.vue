<template>
  <tr class="table-data" @click="onDetailUser">
    <td class="personal_info">
      <div class="avatar-item">
        <img :src="imgUrl" alt="avatar" />
      </div>
      <div class="info">
        <div class="name">
          <p>{{ form.fullname }}</p>
        </div>
        <div class="description">
          <p>{{ form.position }}</p>
        </div>
      </div>
    </td>
    <td class="city">
      <p>{{ form.address }}</p>
    </td>
    <td class="salary">
      <p>{{ salary }} đ</p>
    </td>
    <td class="date-time">
      <p>{{ date}}</p>
      <p>{{ time}}</p>
    </td>
    <td
      class="status-pending"
      :class="{
        'status-pending': form.status === STATUS.PENDING,
        'status-approved': form.status === STATUS.APPROVED,
        'status-rejected': form.status === STATUS.REJECTED,
      }"
    >
      <p v-if="form.status === STATUS.PENDING">Pending</p>
      <p v-if="form.status === STATUS.APPROVED">Approved</p>
      <p v-if="form.status === STATUS.REJECTED">Rejected</p>
    </td>
  </tr>
</template>

<script>
import { formatSalary, formatDate,formatTime} from "@/utils/index.js";
import { STATUS } from "@/const/multiForm.js";
export default {
  data() {
    return {
      STATUS,
    };
  },
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onDetailUser() {
      this.$emit("onDetailUser");
    },
  },
  computed: {
    salary() {
      return formatSalary(this.form.salary);
    },
    imgUrl() {
      return this.form.avatar
        ? `http://localhost:8081/uploads/${this.form.avatar}`
        : "";
    },
    date(){
      return formatDate(this.form.created_at)
    },
    time(){
      return formatTime(this.form.created_at)
    }
  },
};
</script>

<style lang="scss" scoped>
.table-data {
  cursor: pointer;
  width: 998px;
  height: 64px;
  .status-pending {
    p {
      display: flex;
      align-items: center;
      width: 70px;
      height: 24px;
      padding: 0px 8px;
      background: #fffbeb;
      border-radius: 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #dd901d;
    }
  }
  .status-approved {
    p {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #627d98;
      width: 80px;
      height: 24px;
      background: #f0f4f8;
      border-radius: 4px;
      padding: 0px 8px;
    }
  }
  .status-rejected {
    p {
      font-style: normal;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #f86a6a;
      width: 73px;
      height: 24px;
      background: #ffe3e3;
      border-radius: 4px;
      padding: 0px 8px;
    }
  }
  .city {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .salary {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .date-time {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .personal_info {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 8px 10px 8px 0;
    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #555555;
    }
    .name {
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #333333;
      }
    }
    .avatar-item {
      margin-right: 10px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 5px;
      }
    }
  }
}
</style>