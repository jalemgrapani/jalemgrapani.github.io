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
$coachWatches = [
  ["img/coach1.webp", "Coach 14504302 Women's Ionic Thin Gold Plated Steel Watch", "₱ 10,980.00"],
  ["img/coach2.webp", "Coach 14504308 Women's Ionic Thin Gold Plated Steel Watch", "₱ 13,980.00"],
  ["img/coach3.webp", "Coach 14602680 Men's Ionic Thin Gold Plated Steel Watch", "₱ 19,880.00"],
  ["img/coach4.webp", "Coach 14602682 Men's Two-Tone Steel Watch", "₱ 19,880.00"],
  ["img/coach5.webp", "Coach 14602679 Men's Steel Watch", "₱ 19,880.00"],
  ["img/coach6.webp", "Women's Ionic Black Plated Steel Mesh Watch", "₱ 9,380.00"]
];
?>

<div class="row">
  <?php foreach ($coachWatches as $watch) { ?>
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