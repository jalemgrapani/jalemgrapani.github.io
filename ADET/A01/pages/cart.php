<div class="titles">Your Cart</div>

<!-- Empty -->
<section class="mb-5 d-none" id="cartEmpty">
  <div class="collection-card p-4 p-md-5 text-center">
    <div class="empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
    <h2 class="card-heading">Your Cart Is Empty</h2>
    <p class="info-text mb-4">Browse the outlet to find your next watch.</p>
    <a href="?page=outlet" class="btn btn-shop px-4">Continue Shopping</a>
  </div>
</section>

<!-- Items -->
<section class="mb-5" id="cartContent">
  <div class="row g-3 g-md-4">
    <div class="col-12 col-lg-8">
      <div class="collection-card px-3 px-md-4">
        <div class="row cart-header">
          <div class="col-8">Product</div>
          <div class="col-4 text-end">Action</div>
        </div>
        <div id="cartList"></div>
      </div>
    </div>

    <!-- Summary -->
    <div class="col-12 col-lg-4">
      <div class="collection-card summary-card p-4">
        <h2 class="card-heading">Order Summary</h2>
        <div class="d-flex justify-content-between align-items-center summary-row">
          <span class="info-text">Total items</span>
          <span id="cartTotal" class="product-price mb-0">0</span>
        </div>
        <div class="d-grid gap-2">
          <a href="?page=outlet" class="btn btn-shop">Continue Shopping</a>
          <button type="button" class="btn btn-outline-danger fw-semibold" onclick="clearCart()">Clear Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>