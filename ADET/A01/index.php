<?php

$page = "outlet";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "tissot":
      $page = "tissot";
      break;
    case "coach":
      $page = "coach";
      break;
    case "alpina":
      $page = "alpina";
      break;
    case "outlet":
      $page = "outlet";
      break;
    default:
      header("Location: ?page=outlet");
      exit;
  }
} else {
  header("Location: ?page=outlet");
  exit;
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="assets/img/J.svg">
  <title>
    <?= $page == "tissot" ? "Tissot | JWatch Store" : ($page == "coach" ? "Coach | JWatch Store" : ($page == "alpina" ? "Alpina | JWatch Store" : "JWatch Store")) ?>
  </title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Instrument+Serif&display=swap"
    rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light site-nav sticky-top">
    <a class="navbar-brand d-flex align-items-center" href="?page=outlet">
      <img src="assets/img/J.svg" alt="Logo" class="brand-logo me-2">
      <span class="brand-name d-none d-sm-inline">JWatch Store</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ms-lg-3"><a class="nav-link <?= $page == "outlet" ? "active" : "" ?>" href="?page=outlet">Outlet</a></li>
        <li class="nav-item ms-lg-3"><a class="nav-link" href="">Our Stores</a></li>
        <li class="nav-item ms-lg-3"><a class="nav-link" href="">About Us</a></li>
        <li class="nav-item ms-lg-3"><a class="nav-link" href="">Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid page-wrap">
    <!-- Mobile brand strip -->
    <div class="d-block d-lg-none mb-3">
      <div class="brand-strip">
        <a href="?page=tissot" class="<?= $page == "tissot" ? "active" : "" ?>">Tissot</a>
        <a href="?page=coach" class="<?= $page == "coach" ? "active" : "" ?>">Coach</a>
        <a href="?page=alpina" class="<?= $page == "alpina" ? "active" : "" ?>">Alpina</a>
      </div>
    </div>

    <!-- g-0 removes the negative row margins that caused the horizontal scrollbar -->
    <div class="row g-0 page-row">
      <div class="col-lg-3 col-xl-2 d-none d-lg-block sidebar-col">
        <div class="shop-brands-card">
          <div class="shop-brands-title">Shop Brands</div>
          <a href="?page=tissot" class="shop-brand-link">
            <div class="shopBrand <?= $page == "tissot" ? "active" : "" ?>">Tissot</div>
          </a>
          <a href="?page=coach" class="shop-brand-link">
            <div class="shopBrand <?= $page == "coach" ? "active" : "" ?>">Coach</div>
          </a>
          <a href="?page=alpina" class="shop-brand-link">
            <div class="shopBrand <?= $page == "alpina" ? "active" : "" ?>">Alpina</div>
          </a>
        </div>
      </div>

      <div class="col-12 col-lg-9 col-xl-10 main-col">
        <div class="content-card">
          <div class="titles"><?= $page == "tissot" ? "TISSOT" : ($page == "coach" ? "COACH" : ($page == "alpina" ? "ALPINA" : "")) ?></div>
          <?php include("shared/" . $page . ".php"); ?>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
</body>

</html>