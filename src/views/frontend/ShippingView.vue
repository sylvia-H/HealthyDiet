<template>
  <!-- 送貨須知 -->
  <section class="container | pt-20" style="min-height: 90vh">
    <h2 class="text-center">如何好遞</h2>
    <hr class="my-8" />
    <div class="row d-flex justify-content-center">
      <div class="col-6 col-md-5">
        <RouterLink to="/dietInfo">
          <div class="card rounded-3 p-6 text-center h-100">
            <div class="mb-5">
              <span
                class="material-icons fz-10 fz-md-15 p-4 p-md-8 rounded-circle
                 border border-5 border-gray2 fw-bold text-gray2 opacity-75"
              >
                playlist_add_check
              </span>
            </div>
            <h4 class="fz-5 fz-md-6 text-green1 fw-bold | mb-6">量身打造專屬菜單</h4>
            <p class="d-none d-md-block fw-light text-start text-gray | mb-4">
              前往「食前好思」頁面，深入了解您目前的身體狀態：BMI 指數、BMR 基礎代謝率與 TDEE
              每日總消耗熱量。
            </p>
            <p class="text-start text-gray">
              我們將依據您的 TDEE 每日總消耗熱量數值，為您量身打造均衡的一日份單人營養菜單。
            </p>
          </div>
        </RouterLink>
      </div>
      <div class="col-6 col-md-5">
        <RouterLink to="/products">
          <div class="card rounded-3 p-6 text-center h-100">
            <div class="mb-5">
              <span
                class="material-icons fz-10 fz-md-15 p-4 p-md-8 rounded-circle
                 border border-5 border-gray2 fw-bold text-gray2 opacity-75"
              >
                shopping_cart
              </span>
            </div>
            <h4 class="d-block d-lg-none fz-5 fz-md-6 text-green1 fw-bold | mb-6">
              選購您喜愛的美食
            </h4>
            <h4 class="d-none d-lg-block fz-5 fz-md-6 text-green1 fw-bold | mb-6">
              盡情選購您喜愛的美食
            </h4>
            <p class="d-none d-md-block fw-light text-start text-gray | mb-4">
              請綜合考量您的冰箱容量、食品保存期限以及大致的一週菜單安排，適量選擇產品，需要時再隨時加購。
            </p>
            <p class="text-start text-gray">
              前往「來選好食」商品賣場，我們提供九大類別豐富食材及菜品，讓您盡情選購！
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 | mb-8">
        <hr class="my-12" />
        <h4 class="text-green1 fw-bold | mb-6">
          好食遞出貨流程
        </h4>
        <div class="shippingProcess row text-center">
          <div class="col-6 col-md-3 px-5">
            <div class="my-5">
              <span class="material-icons fz-15 p-8 rounded-3
                border border-3 border-gray2 fw-bold text-gray2 opacity-75">
                credit_score
              </span>
            </div>
            <h4 class="fz-5 text-green1 mb-4">
              確認訂購單與貨款
            </h4>
          </div>
          <div class="col-6 col-md-3 px-5">
            <div class="my-5">
              <span class="material-icons fz-15 p-8 rounded-3
                border border-3 border-gray2 fw-bold text-gray2 opacity-75">
                redeem
              </span>
            </div>
            <h4 class="fz-5 text-green1 mb-4">
              嚴選食材 精緻包裝
            </h4>
          </div>
          <div class="col-6 col-md-3 px-5">
            <div class="my-5">
              <span class="material-icons fz-15 p-8 rounded-3
                border border-3 border-gray2 fw-bold text-gray2 opacity-75">
                local_shipping
              </span>
            </div>
            <h4 class="fz-5 text-green1 mb-4">
              當日烹調 迅速出貨
            </h4>
          </div>
          <div class="col-6 col-md-3 px-5">
            <div class="my-5">
              <span class="material-icons fz-15 p-8 rounded-3
                border border-3 border-gray2 fw-bold text-gray2 opacity-75">
                support_agent
              </span>
            </div>
            <h4 class="fz-5 text-green1 mb-4">
              24 小時在線客服
            </h4>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-10 offset-md-1">
        <p class="text-start text-gray | mb-4">
          好食遞嚴選優質新鮮食材，依據食材特性進行真空加壓、冷藏冷凍或高溫蒸煮後急凍處理。以維持食材最佳食用鮮度為最高準則。
        </p>
        <p class="text-start text-gray">
          除冷凍加壓等經過保鮮處理的食材之外，所有經過二次加工的料理一律當日烹調、當日出貨，務求第一時間送達貴府，讓您擁有最新鮮美好的飲食體驗。
        </p>
      </div>
    </div>
  </section>
  <section class="container | mb-20">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <hr class="my-12" />
        <h4 class="text-green1 fw-bold | mb-6">
          退換貨須知
        </h4>
        <div class="accordion" id="accordionReturn">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading_1">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_1"
                aria-expanded="false"
                aria-controls="collapse_1"
              >
                可以退換貨嗎？
              </button>
            </h2>
            <div
              id="collapse_1"
              class="accordion-collapse collapse"
              aria-labelledby="heading_1"
              data-bs-parent="#accordionReturn"
            >
              <div class="accordion-body">
                <p>
                  本店鋪商品屬於新鮮食材，一經出貨恕無法退貨。
                </p>
                <p class="mt-4">
                  商品如有缺失或宅配運送過程有毀損欲辦理退貨：
                  <ul class="mx-8">
                    <li>請於收到24小時內來電或來信</li>
                    <li>拍照註明瑕疵或毀損情況</li>
                    <li>把照片寄至客服信箱</li>
                  </ul>
                  我們將盡速為您處理。
                </p>
                <p class="mt-4">
                  <code>
                    依據「通訊交易解除權合理例外情事適用準則」第2條第一項：
                    「易於腐敗、保存期限較短或解約時即將逾期」之商品，屬於消費者保護法第19條第一項但書所稱合理例外情事。
                    自105年1月1日起，<strong>生鮮食品不適用於消費者保護法第19條，並不享有7天鑑賞期。</strong>
                  </code>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading_2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_2"
                aria-expanded="false"
                aria-controls="collapse_2"
              >
                符合哪些條件可退換貨？
              </button>
            </h2>
            <div
              id="collapse_2"
              class="accordion-collapse collapse"
              aria-labelledby="heading_2"
              data-bs-parent="#accordionReturn"
            >
              <div class="accordion-body">
                <ul class="mx-8">
                  <li>運送過程當中造成商品毀損</li>
                  <li>商品品項數量與訂購單不符合</li>
                  <li>商品本身品質不良</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading_3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_3"
                aria-expanded="false"
                aria-controls="collapse_3"
              >
                不能退換貨之情況
              </button>
            </h2>
            <div
              id="collapse_3"
              class="accordion-collapse collapse"
              aria-labelledby="heading_3"
              data-bs-parent="#accordionReturn"
            >
              <div class="accordion-body">
                <ul class="mx-8">
                  <li>無出貨明細表與發票</li>
                  <li>商品開封、包裝破損不完整等</li>
                  <li>個人口感或料理方式的問題。</li>
                  <li>消費者未按照保存方式造成品質不良</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading_4">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_4"
                aria-expanded="false"
                aria-controls="collapse_4"
              >
                多久才會收到退貨款？
              </button>
            </h2>
            <div
              id="collapse_4"
              class="accordion-collapse collapse"
              aria-labelledby="heading_4"
              data-bs-parent="#accordionReturn"
            >
              <div class="accordion-body">
                <p>
                  本站收到商品且無誤後，將於7~14個工作天內退貨款給您，款項將退回原訂購人或匯款轉帳人之銀行。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.card:hover {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 25%);
}
.card:hover .material-icons {
  color: #83b875 !important;
  border: 5px solid #83b875 !important;
}
ul {
  list-style-type: circle;
}
.shippingProcess .col-6 {

}

</style>
