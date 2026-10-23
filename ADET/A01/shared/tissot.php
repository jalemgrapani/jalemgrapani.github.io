<?php
// Data
$tissotWatches = [
  ["img/tissot1.webp", "Tissot Chemin Des Tourelles Powermatic 80 34MM", "₱ 58,300.00"],
  ["img/tissot2.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 49,600.00"],
  ["img/tissot3.webp", "Tissot Chemin des Tourelles Powermatic 80", "₱ 51,000.00"],
  ["img/tissot4.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 26,300.00"],
  ["img/tissot5.webp", "Tissot Chrono XL Classic T116.617.11.057.01", "₱ 26,300.00"],
  ["img/tissot6.webp", "Tissot Chrono XL Classic T116.617.11.092.00", "₱ 26,300.00"]
];
?>

<!-- Products -->
<div class="row g-3 g-md-4">
  <?php foreach ($tissotWatches as $watch) { ?>
    <div class="col-6 col-md-4">
      <div class="card product-card h-100">
        <div class="product-image">
          <img src="assets/<?php echo $watch[0]; ?>" class="product-img" alt="<?php echo $watch[1]; ?>" loading="lazy">
        </div>
        <div class="card-body product-body d-flex flex-column">
          <h2 class="product-name" title="<?php echo $watch[1]; ?>"><?php echo $watch[1]; ?></h2>
          <div class="product-price"><?php echo $watch[2]; ?></div>
          <a href="#" class="btn btn-shop w-100 mt-auto" aria-label="Shop <?php echo $watch[1]; ?>">Shop Now</a>
        </div>
      </div>
    </div>
  <?php } ?>
</div>

<!-- Action -->
<div class="text-center mt-5">
  <a href="#" class="btn viewAll">View All Tissot Watches</a>
</div>