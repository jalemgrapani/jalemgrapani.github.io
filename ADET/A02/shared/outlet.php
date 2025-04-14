<div id="carouselExampleSlidesOnly" class="carousel slide my-3 mb-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="img/banner.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="img/banner2.svg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="img/banner3.svg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>

<div class="h3 mb-4">Featured Collection</div>
<?php
$featuredWatches = [
  ["img/tissot1.webp", "Tissot Chemin Des Tourelles Powermatic 80 34MM T139.207.22.038.00", "₱ 58,300.00"],
  ["img/tissot2.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 49,600.00"],
  ["img/alpina4.webp", "Alpina Alpiner Comtesse Quartz Blooming Purple AL-240LP2C6B", "₱ 66,000.00"],
  ["img/alpina5.webp", "Alpina Alpiner 4 Automatic AL-525N4AQ6", "₱ 102,000.00"]
];
?>

<div class="row">
  <?php foreach ($featuredWatches as $watch) { ?>
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="<?php echo $watch[0]; ?>" class="card-img-top" alt="Watch image">
        <div class="card-body d-flex flex-column">
          <p class="h6 card-text flex-grow-1"><?php echo $watch[1]; ?></p>
          <div class="h4"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-dark mt-2">SHOP NOW</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>

<div class="text-center mt-3 mb-5">
  <a href="#" class="viewAll btn text-white" style="background-color: black; padding: 10px 30px;">View All</a>
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

<div class="container my-5">
  <div class="row">
    <div class="col-12 mb-4">
      <h2>BROWSE COLLECTIONS</h2>
    </div>

    <?php foreach ($browseCollections as $collection) { ?>
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="box1 card" style="width: 100%;">
          <img src="<?php echo $collection[0]; ?>" class="card-img-top" alt="<?php echo $collection[1]; ?>">
        </div>
      </div>
    <?php } ?>
  </div>
</div>

<div class="container-fluid">
  <div class="row">
    <div class="col-12 p-3" style="background-color: black; height: 200px;">
      <div class="text-center text-white p-3">
        <p class="historyHeading h4 mb-4"><strong>Time-Tested Pioneers</strong></p>
        <p class="historyText mb-0">
          A true pioneer of the Swiss watchmaking industry, Alpina has been the source of innovative calibers. Alpina
          invented the concept of the Swiss sports watch as we know it today, with the creation of its legendary Alpina
          4
          in 1938.
        </p>
      </div>
    </div>
  </div>
</div>