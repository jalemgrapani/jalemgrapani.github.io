<div id="carouselExampleSlidesOnly" class="carousel slide hero-carousel" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/img/banner.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="assets/img/banner2.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="assets/img/banner3.svg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>

<div class="section-title">Featured Collection</div>
<?php
$featuredWatches = [
  ["img/tissot1.webp", "Tissot Chemin Des Tourelles Powermatic 80 34MM T139.207.22.038.00", "₱ 58,300.00"],
  ["img/tissot2.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 49,600.00"],
  ["img/alpina4.webp", "Alpina Alpiner Comtesse Quartz Blooming Purple AL-240LP2C6B", "₱ 66,000.00"],
  ["img/alpina5.webp", "Alpina Alpiner 4 Automatic AL-525N4AQ6", "₱ 102,000.00"]
];
?>

<div class="row g-3 g-md-4">
  <?php foreach ($featuredWatches as $watch) { ?>
    <div class="col-12 col-sm-6 col-xl-3">
      <div class="card product-card h-100">
        <img src="assets/<?php echo $watch[0]; ?>" class="card-img-top" alt="<?php echo $watch[1]; ?>" loading="lazy">
        <div class="card-body d-flex flex-column">
          <p class="product-name" title="<?php echo $watch[1]; ?>"><?php echo $watch[1]; ?></p>
          <div class="product-price mt-auto"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-shop align-self-start">Shop now</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>

<div class="text-center mt-4 mb-5">
  <a href="#" class="viewAll btn">View All</a>
</div>

<?php
$browseCollections = [
  ["img/box1.jpg", "Box 1"],
  ["img/box2.webp", "Box 2"],
  ["img/box3.webp", "Box 3"],
  ["img/box4.webp", "Box 4"],
  ["img/box5.jpg", "Box 5"],
  ["img/box6.webp", "Box 6"],
  ["img/box7.webp", "Box 7"],
  ["img/box8.webp", "Box 8"]
];
?>

<div class="mb-2">
  <h2 class="section-title">Browse Collections</h2>

  <div class="row g-3 g-md-4">
    <?php foreach ($browseCollections as $collection) { ?>
      <div class="col-12 col-sm-6 col-md-4 col-xl-3">
        <div class="collection-card">
          <img src="assets/<?php echo $collection[0]; ?>" alt="<?php echo $collection[1]; ?>" loading="lazy">
        </div>
      </div>
    <?php } ?>
  </div>
</div>

<div class="history-banner">
  <p class="historyHeading h4"><strong>Time-Tested Pioneers</strong></p>
  <p class="historyText mb-0">
    A true pioneer of the Swiss watchmaking industry, Alpina has been the source of innovative calibers. Alpina
    invented the concept of the Swiss sports watch as we know it today, with the creation of its legendary Alpina
    4
    in 1938.
  </p>
</div>