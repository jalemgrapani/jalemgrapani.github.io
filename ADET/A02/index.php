<?php

$page = "index";

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
      break;
  }
} else {
  header("Location: ?page=outlet");
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="img/J.svg">
  <title>
    <?= $page == "tissot" ? "Tissot | JWatch Store" : ($page == "coach" ? "Coach | JWatch Store" : ($page == "alpina" ? "Alpina | JWatch Store" : "JWatch Store")) ?>
  </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light p-0 shadow">
    <a class="navbar-brand d-flex align-items-center ms-3" href="#">
      <img src="img/J.svg" alt="Logo" style="height: 50px; width: 50px;" class="me-2 ms-3">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ms-3"><a class="nav-link" href="?page=outlet">Outlet</a></li>
        <li class="nav-item ms-3"><a class="nav-link" href="">Our Stores</a></li>
        <li class="nav-item ms-3"><a class="nav-link" href="">About Us</a></li>
        <li class="nav-item ms-3"><a class="nav-link" href="">Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid d-block d-md-none mt-2">
    <div class="d-flex justify-content-around bg-dark text-white py-2 rounded">
      <a href="?page=tissot" class="text-white text-decoration-none">Tissot</a>
      <a href="?page=coach" class="text-white text-decoration-none">Coach</a>
      <a href="?page=alpina" class="text-white text-decoration-none">Alpina</a>
    </div>
  </div>

  <div class="container-fluid mt-3" style="background-color:rgb(255, 255, 255);">
    <div class="row">
      <div class="col-1 col-sm-1 col-md-2 col-lg-3 d-none d-md-block">
        <div class="card shadow p-3 shop-brands-card border-0 rounded-3">
          <div class="h2 text-center shop-brands-title">Shop Brands</div>
          <a href="?page=tissot" class="text-decoration-none text-white">
            <div class="shopBrand text-center">Tissot</div>
          </a>
          <a href="?page=coach" class="text-decoration-none text-white">
            <div class="shopBrand text-center">Coach</div>
          </a>
          <a href="?page=alpina" class="text-decoration-none text-white">
            <div class="shopBrand text-center">Alpina</div>
          </a>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-10 col-lg-9">
        <div class="card shadow p-4 border-0 rounded-3"
          style="height: 85vh; max-height: 85vh; overflow: scroll; background-color:rgb(255, 255, 255);">
          <div class="titles h1 text-center">
            <?= $page == "tissot" ? "TISSOT" : ($page == "coach" ? "COACH" : ($page == "alpina" ? "ALPINA" : "")) ?>
          </div>
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