<style>
  .equal-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .equal-card img {
    object-fit: cover;
    height: 280px;
    width: 100%;
  }

  .equal-card .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .equal-card .card-text {
    flex-grow: 1;
  }
</style>


<?php
$alpinaWatches = [
  ["img/alpina1.webp", "Alpina Alpiner 4 Automatic AL-525NS4AQ6B", "₱ 106,000.00"],
  ["img/alpina2.webp", "Alpina Alpiner Extreme Regulator Automatic AL-650DGN4AE6", "₱ 166,000.00"],
  ["img/alpina3.webp", "Alpina Alpiner Comtesse Quartz Light Brown AL-240LBR2C6B", "₱ 66,000.00"],
  ["img/alpina4.webp", "Alpina Alpiner Comtesse Quartz Blooming Purple AL-240LP2C6B", "₱ 66,000.00"],
  ["img/alpina5.webp", "Alpina Alpiner 4 Automatic AL-525N4AQ6", "₱ 102,000.00"],
  ["img/alpina6.webp", "Alpina Alpiner 4 Automatic AL-525GS4AQ6B", "₱ 106,000.00"]
];
?>

<div class="row">
  <?php foreach ($alpinaWatches as $watch) { ?>
    <div class="col-lg-4 col-md-6 col-12 mb-4 d-flex">
      <div class="card equal-card w-100">
        <img src="<?php echo $watch[0]; ?>" class="card-img-top" alt="Watch image">
        <div class="card-body">
          <p class="h6 card-text"><?php echo $watch[1]; ?></p>
          <div class="h4"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-dark mt-2">SHOP NOW</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>


<div class="text-center mt-3">
  <a href="#" class="viewAll btn text-white" style="background-color: black; padding: 10px 30px;">View All</a>
</div>