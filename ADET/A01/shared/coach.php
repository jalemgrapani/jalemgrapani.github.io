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

<div class="row g-3 g-md-4">
  <?php foreach ($coachWatches as $watch) { ?>
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