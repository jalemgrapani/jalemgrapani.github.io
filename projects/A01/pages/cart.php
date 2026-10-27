<div class="titles">Your Cart</div>

<!-- Empty -->
<section class="mb-5 d-none" id="cartEmpty">
  <div class="cart-state">
    <div class="empty-icon"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i></div>
    <h2 class="card-heading">Your Cart Is Empty</h2>
    <p class="info-text mb-4">Browse the outlet to find your next watch.</p>
    <a href="?page=outlet" class="btn btn-cart-main">Continue Shopping</a>
  </div>
</section>

<!-- Purchase Done -->
<section class="mb-5 d-none" id="cartDone">
  <div class="cart-state">
    <div class="empty-icon cart-done-icon"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></div>
    <h2 class="card-heading">Thank You for Your Purchase</h2>
    <p class="info-text mb-4">Your order has been placed. We will contact you soon about your watches.</p>
    <a href="?page=outlet" class="btn btn-cart-main">Continue Shopping</a>
  </div>
</section>

<!-- Items -->
<section class="mb-5" id="cartContent">
  <div class="row g-4">

    <!-- List -->
    <div class="col-12 col-lg-8">
      <div class="cart-panel">
        <div class="cart-panel-head">
          <h2 class="cart-panel-title">Items in Your Cart</h2>
          <span class="cart-count" id="cartCount">0</span>
        </div>
        <div id="cartList"></div>
      </div>
    </div>

    <!-- Summary -->
    <div class="col-12 col-lg-4">
      <div class="cart-panel summary-card cart-summary">
        <h2 class="card-heading">Order Summary</h2>

        <div class="cart-summary-row">
          <span class="info-text">Total items</span>
          <span class="cart-summary-value" id="cartTotal">0</span>
        </div>
        <div class="cart-summary-row cart-summary-row-last">
          <span class="info-text">Total price</span>
          <span class="cart-summary-price" id="cartPrice">₱ 0.00</span>
        </div>

        <div class="d-grid gap-2">
          <button type="button" class="btn btn-cart-main" onclick="openConfirm()">Buy Now</button>
          <a href="?page=outlet" class="btn btn-cart-alt">Continue Shopping</a>
          <button type="button" class="btn btn-cart-danger" onclick="clearCart()">Clear Cart</button>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Confirm Modal -->
<div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="confirmTitle">Confirm Your Purchase</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <p class="info-text mb-3">Please review your order before you buy.</p>
        <div class="confirm-list" id="confirmList"></div>
        <div class="confirm-total">
          <span>Total</span>
          <strong id="confirmTotal">₱ 0.00</strong>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-cart-alt" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-cart-main" onclick="confirmPurchase()">Confirm Purchase</button>
      </div>
    </div>
  </div>
</div>