<template>
  <VLoading :active="isLoading" :z-index="1000">
    <VueLoader></VueLoader>
  </VLoading>
  <div class="container py-20">
    <div class="row mb-6">
      <div class="col-12 col-lg-7">
        <div class="row g-0 | timeline">
          <div class="col-3">
            <div class="timeline-pointer">
              <h6 class="fw-light mt-5">確認訂單</h6>
            </div>
          </div>
          <div class="col-3">
            <div class="timeline-pointer">
              <h6 class="fw-light mt-5">填寫訂購資訊</h6>
            </div>
          </div>
          <div class="col-3">
            <div class="timeline-pointer">
              <h6 class="fw-bold mt-5">填寫付款資訊</h6>
            </div>
          </div>
          <div class="col-3">
            <div class="timeline-pointer-undone">
              <h6 class="fw-light mt-5">完成訂購</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-column flex-md-row">
      <!-- 訂單內容 -->
      <div class="col-12 col-lg-7 | mb-6">
        <table class="table table-hover">
          <thead>
            <tr>
              <th colspan="2" scope="col" class="fz-5">訂單資訊</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-middle table-secondary">
              <td>
                <p>訂單總金額</p>
              </td>
              <td class="d-flex justify-content-between">
                <p class="fw-bold">{{ order.total }} 元</p>
                <p v-if="order.is_paid" class="text-success fw-bold">
                  已付款
                </p>
                <p v-else class="text-danger fw-bold">
                  未付款
                </p>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <p>訂單編號</p>
              </td>
              <td>
                <p>{{ order.id }}</p>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <p>訂單成立日期</p>
              </td>
              <td>
                <p>{{ $filters.transferTime(order.create_at) }}</p>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <p>訂購品項</p>
              </td>
              <td>
                <!-- 品項列表 -->
                <table class="table table-hover table-borderless">
                  <thead>
                    <th>品名</th>
                    <th>數量</th>
                    <th class="text-center">品項小計</th>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, i) in products"
                      :key="i"
                      class="align-middle"
                    >
                      <td>
                        <p>{{ item.product.title }}</p>
                      </td>
                      <td>
                        <p>{{ item.qty }}</p>
                      </td>
                      <td class="text-center">
                        <p>{{ item.final_total }}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr class="align-middle">
              <td>
                <p>訂購人資訊</p>
              </td>
              <td>
                <!-- 訂購人資訊 -->
                <table class="table table-hover table-borderless">
                  <tbody>
                    <tr class="align-middle">
                      <td>訂購人</td>
                      <td>
                        <p>{{ user.name }}</p>
                      </td>
                    </tr>
                    <tr class="align-middle">
                      <td>E-mail</td>
                      <td>
                        <p>{{ user.email }}</p>
                      </td>
                    </tr>
                    <tr class="align-middle">
                      <td>電話</td>
                      <td>
                        <p>{{ user.tel }}</p>
                      </td>
                    </tr>
                    <tr class="align-middle">
                      <td>地址</td>
                      <td>
                        <p>{{ user.address }}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Info -->
      <div class="col-12 offset-lg-1 col-lg-4">
        <h5>付款資訊</h5>
        <div class="row">
          <div class="col-4">
            <hr />
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center">
            <div class="fz-3">
              <span class="text-danger mx-1">*</span>
              為必填欄位
            </div>
          </div>
          <div class="col-4">
            <hr />
          </div>
        </div>
        <div class="mb-10">
          <VForm ref="form" v-slot="{ errors }" @submit="submitPayment">
            <div class="mb-5">
              <span class="mb-2">
                信用卡帳號
                <span class="text-danger ms-1">*</span>
              </span>
              <VField
                rules="required|min:16|max:19"
                class="form-control"
                v-model="formData.credit"
                id="credit"
                name="信用卡帳號"
                min="16"
                max="19"
                type="text"
                placeholder="Xxxx-xxxx-xxxx-xxxx"/>
              <ErrorMessage
                name="信用卡帳號"
                class="d-block text-end invalid-feedback"/>
            </div>
            <div class="mb-5">
              <span class="mb-2">
                有效日期
                <span class="text-danger ms-1">*</span>
              </span>
              <VField
                rules="required"
                class="form-control"
                v-model="formData.validate"
                type="month"
                id="fvalidate"
                name="有效日期"
                placeholder="(MM/YY)"/>
              <ErrorMessage
                name="有效日期"
                class="d-block text-end invalid-feedback"/>
            </div>
            <div class="mb-5">
              <span class="mb-2">
                安全碼
                <span class="text-danger ms-1">*</span>
              </span>
              <VField
                rules="required|min:3|max:4"
                class="form-control"
                v-model="formData.fCSC"
                type="text"
                id="fCSC"
                min="3"
                max="4"
                name="安全碼"
                placeholder="***"/>
              <ErrorMessage
                name="安全碼"
                class="d-block text-end invalid-feedback"/>
            </div>
            <!-- subtotal -->
            <div class="bg-light p-5 mb-5">
              <div class="d-flex align-items-center justify-content-between | mb-6">
                <p>優惠碼</p>
                <div class="d-flex flex-column">
                  <label for="couponData">
                    <input id="couponData" name="couponData" class="form-control" type="text"
                    @change="checkCoupon"
                    placeholder="請輸入折扣優惠碼">
                  </label>
                  <span v-if="is_couponOK" class="text-end text-success mt-2">
                    已套用折扣優惠碼
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-between | mb-6">
                <p>折扣</p>
                <p class="fw-light">
                  NT$ {{ order.total }} 元
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="fz-5">總金額</p>
                <p class="fz-5 fw-bold">NT$ {{ order.total }} 元</p>
              </div>
            </div>
            <div class="row d-flex justify-content-end | my-8 my-md-4">
              <!-- 返回 & 下一步 -->
              <div class="col-6">
                <RouterLink :to="{ name : 'checkoutOrder' }">
                  <button type="button" class="btn btn-outline-dark w-100">
                    返回
                  </button>
                </RouterLink>
              </div>
              <div class="col-6">
                <button
                  type="submit"
                  :disabled="
                    Object.keys(errors).length > 0 ||
                    !formData.credit || !formData.validate || !formData.fCSC
                  "
                  class="btn btn-danger w-100"
                >
                  送出訂單
                </button>
              </div>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLoader from '@/components/LoadingOverlay2.vue';

export default {
  components: {
    VueLoader,
  },
  data() {
    return {
      isLoading: false,
      order: [],
      products: [],
      user: [],
      formData: {},
      is_couponOK: 0,
    };
  },
  inject: ['emitter'],
  methods: {
    getOrder(id) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/order/${id}`,
        )
        .then((res) => {
          this.order = res.data.order;
          Object.keys(this.order.products).forEach((item) => {
            this.products.push(this.order.products[`${item}`]);
          });
          this.user = this.order.user;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    checkCoupon() {
      this.isLoading = true;
      const coupon = document.getElementById('couponData').value;
      const data = {
        code: coupon,
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/coupon`,
          { data },
        )
        .then(() => {
          this.is_couponOK = 1;
          this.isLoading = false;
        })
        .catch(() => {
          this.is_couponOK = 0;
          this.isLoading = false;
        });
    },
    submitPayment() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/pay/${id}`,
        )
        .then(() => {
          this.$refs.form.resetForm();
          this.isLoading = false;
          this.emitter.emit('toast-msg', {
            style: 'success',
            content: '已完成付款流程！',
          });
          this.emitter.emit('get-cart');
          this.$router.push({ name: 'checkoutComplete' });
        })
        .catch(() => {
          this.isLoading = false;
          this.emitter.emit('toast-msg', {
            style: 'error',
            content: '付款失敗，請再試一次！',
          });
        });
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getOrder(id);
  },
};
</script>
