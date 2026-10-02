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

<div class="row g-3 g-md-4">
  <?php foreach ($alpinaWatches as $watch) { ?>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card product-card h-100">
        <img src="assets/<?php echo $watch[0]; ?>" class="card-img-top" alt="<?php echo $watch[1]; ?>">
        <div class="card-body d-flex flex-column">
          <p class="product-name" title="<?php echo $watch[1]; ?>"><?php echo $watch[1]; ?></p>
          <div class="product-price"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-shop mt-auto w-100">Shop now</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>

<div class="text-center mt-4">
  <a href="#" class="viewAll btn">View All</a>
</div>