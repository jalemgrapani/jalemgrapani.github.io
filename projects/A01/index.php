<?php

// Routing
if (!isset($_GET['page'])) {
  header("Location: ?page=outlet");
  exit;
}

$page = $_GET['page'];
$folder = "pages";

// Whitelist
switch ($page) {
  case "outlet":
    $title = "JWatch Store";
    break;
  case "stores":
    $title = "Our Stores | JWatch Store";
    break;
  case "about":
    $title = "About Us | JWatch Store";
    break;
  case "contact":
    $title = "Contact Us | JWatch Store";
    break;
  case "cart":
    $title = "Cart | JWatch Store";
    break;
  case "tissot":
    $title = "Tissot | JWatch Store";
    $folder = "shared";
    break;
  case "coach":
    $title = "Coach | JWatch Store";
    $folder = "shared";
    break;
  case "alpina":
    $title = "Alpina | JWatch Store";
    $folder = "shared";
    break;
  default:
    header("Location: ?page=outlet");
    exit;
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/svg+xml" href="assets/img/J.svg">
  <title><?php echo $title; ?></title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

  <!-- Styles -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/products.css">
  <link rel="stylesheet" href="assets/css/footer.css">
  <?php if ($page == "outlet") { ?>
    <link rel="stylesheet" href="assets/css/outlet.css">
  <?php } ?>
</head>

<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg site-nav sticky-top" aria-label="Main navigation">
    <a class="navbar-brand d-flex align-items-center" href="?page=outlet">
      <img src="assets/img/J.svg" alt="JWatch Store logo" class="brand-logo me-2">
      <div class="brand-name d-none d-sm-block">JWatch Store</div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <div class="navbar-toggler-icon"></div>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav ms-auto">
        <div class="nav-item ms-lg-1">
          <a class="nav-link <?php if ($page == "outlet") { echo "active"; } ?>" href="?page=outlet">Outlet</a>
        </div>
        <div class="nav-item ms-lg-1">
          <a class="nav-link <?php if ($page == "stores") { echo "active"; } ?>" href="?page=stores">Our Stores</a>
        </div>
        <div class="nav-item ms-lg-1">
          <a class="nav-link <?php if ($page == "about") { echo "active"; } ?>" href="?page=about">About Us</a>
        </div>
        <div class="nav-item ms-lg-1">
          <a class="nav-link <?php if ($page == "contact") { echo "active"; } ?>" href="?page=contact">Contact Us</a>
        </div>
        <div class="nav-item ms-lg-1">
          <a class="nav-link <?php if ($page == "cart") { echo "active"; } ?>" href="?page=cart">
            <i class="fa-solid fa-cart-shopping"></i> Cart
            <div id="cartCount" class="badge cart-badge">0</div>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <div class="container-fluid page-wrap">
    <nav class="brand-strip d-lg-none" aria-label="Shop by brand">
      <a href="?page=tissot" class="brand-link <?php if ($page == "tissot") { echo "active"; } ?>">Tissot</a>
      <a href="?page=coach" class="brand-link <?php if ($page == "coach") { echo "active"; } ?>">Coach</a>
      <a href="?page=alpina" class="brand-link <?php if ($page == "alpina") { echo "active"; } ?>">Alpina</a>
    </nav>

    <div class="row g-0 page-row">
      <!-- Sidebar -->
      <aside class="col-lg-3 col-xl-2 d-none d-lg-block sidebar-col">
        <div class="shop-brands-card">
          <div class="shop-brands-title">Shop by Brand</div>
          <a href="?page=tissot" class="shop-brand-link">
            <div class="shopBrand <?php if ($page == "tissot") { echo "active"; } ?>">Tissot</div>
          </a>
          <a href="?page=coach" class="shop-brand-link">
            <div class="shopBrand <?php if ($page == "coach") { echo "active"; } ?>">Coach</div>
          </a>
          <a href="?page=alpina" class="shop-brand-link">
            <div class="shopBrand <?php if ($page == "alpina") { echo "active"; } ?>">Alpina</div>
          </a>
        </div>
      </aside>

      <!-- Main -->
      <main class="col-12 col-lg-9 col-xl-10 main-col">
        <div class="content-card">
          <?php if ($folder == "shared") { ?>
            <h1 class="titles"><?php echo strtoupper($page); ?></h1>
          <?php } ?>

          <?php include($folder . "/" . $page . ".php"); ?>
        </div>
      </main>
    </div>
  </div>

  <!-- Footer -->
  <?php include("shared/footer.php"); ?>

  <!-- Modal -->
  <div class="modal fade" id="addedModal" tabindex="-1" aria-labelledby="addedModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title h5" id="addedModalLabel">Added to Cart</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="addedModalText"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-modal" data-bs-dismiss="modal">Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
  <script src="assets/js/modal.js"></script>
  <?php if ($page == "cart") { ?>
    <script src="assets/js/cart.js"></script>
  <?php } ?>
</body>

</html>