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
$tissotWatches = [
  ["img/tissot1.webp", "Tissot Chemin Des Tourelles Powermatic 80 34MM", "₱ 58,300.00"],
  ["img/tissot2.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 49,600.00"],
  ["img/tissot3.webp", "Tissot Chemin des Tourelles Powermatic 80", "₱ 51,000.00"],
  ["img/tissot4.webp", "Tissot Chrono XL Classic T116.617.11.047.01", "₱ 26,300.00"],
  ["img/tissot5.webp", "Tissot Chrono XL Classic T116.617.11.057.01", "₱ 26,300.00"],
  ["img/tissot6.webp", "Tissot Chrono XL Classic T116.617.11.092.00", "₱ 26,300.00"]
];
?>

<div class="row">
  <?php foreach ($tissotWatches as $watch) { ?>
    <div class="col-lg-4 col-md-6 col-12 mb-4 d-flex">
      <div class="card equal-card w-100">
        <img src="assets/<?php echo $watch[0]; ?>" class="card-img-top" alt="Watch image">
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