<?php
$tissotWatches = [
  ["img/tissot1.webp", "Tissot Chemin Des Tourelles Powermatic 80 34MM", "₱ 58,300.00"],
  ["img/tissot2.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 49,600.00"],
  ["img/tissot3.webp", "Tissot Chemin des Tourelles Powermatic 80", "₱ 51,000.00"],
  ["img/tissot4.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 26,300.00"],
  ["img/tissot5.webp", "Tissot Chrono XL Classic T116.617.11.057.01", "₱ 26,300.00"],
  ["img/tissot6.webp", "Tissot Chrono XL Classic T116.617.11.092.00", "₱ 26,300.00"]
];
?>

<div class="row g-3 g-md-4">
  <?php foreach ($tissotWatches as $watch) { ?>
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card product-card h-100">
        <img src="assets/<?php echo $watch[0]; ?>" class="card-img-top" alt="<?php echo $watch[1]; ?>">
        <div class="card-body d-flex flex-column">
          <p class="product-name" title="<?php echo $watch[1]; ?>"><?php echo $watch[1]; ?></p>
          <div class="product-price"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-shop mt-auto align-self-start">Shop now</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>

<div class="text-center mt-4">
  <a href="#" class="viewAll btn">View All</a>
</div>