<footer class="site-footer">
  <div class="container-fluid px-4 px-lg-5">
    <div class="row g-4 py-5">

      <!-- Brand -->
      <div class="col-12 col-md-4">
        <a href="?page=outlet" class="footer-brand">JWatch Store</a>
        <p class="footer-description">
          Discover watches for every style and occasion.
        </p>
        <div class="footer-social">
          <a href="#" class="social-link" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-link" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-link" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      <!-- Explore -->
      <div class="col-6 col-md-4">
        <h2 class="footer-title">Explore</h2>
        <ul class="list-unstyled footer-links">
          <li class="footer-item">
            <a href="?page=outlet" class="footer-link <?php if ($page == "outlet") { echo "active"; } ?>">Outlet</a>
          </li>
          <li class="footer-item">
            <a href="?page=tissot" class="footer-link <?php if ($page == "tissot") { echo "active"; } ?>">Tissot</a>
          </li>
          <li class="footer-item">
            <a href="?page=coach" class="footer-link <?php if ($page == "coach") { echo "active"; } ?>">Coach</a>
          </li>
          <li class="footer-item">
            <a href="?page=alpina" class="footer-link <?php if ($page == "alpina") { echo "active"; } ?>">Alpina</a>
          </li>
        </ul>
      </div>

      <!-- Information -->
      <div class="col-6 col-md-4">
        <h2 class="footer-title">Information</h2>
        <ul class="list-unstyled footer-links">
          <li class="footer-item">
            <a href="?page=outlet" class="footer-link <?php if ($page == "outlet") { echo "active"; } ?>">Outlet</a>
          </li>
          <li class="footer-item">
            <a href="?page=stores" class="footer-link <?php if ($page == "stores") { echo "active"; } ?>">Our Stores</a>
          </li>
          <li class="footer-item">
            <a href="?page=about" class="footer-link <?php if ($page == "about") { echo "active"; } ?>">About Us</a>
          </li>
          <li class="footer-item">
            <a href="?page=contact" class="footer-link <?php if ($page == "contact") { echo "active"; } ?>">Contact Us</a>
          </li>
          <li class="footer-item">
            <a href="?page=cart" class="footer-link <?php if ($page == "cart") { echo "active"; } ?>">Shopping Cart</a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Copyright -->
    <div class="footer-bottom text-center">
      <div>&copy; <?php echo date("Y"); ?> JWatch Store. All rights reserved.</div>
    </div>
  </div>
</footer>