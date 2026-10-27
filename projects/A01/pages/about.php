<?php
$highlights = [
  ["fa-certificate", "Trusted Brands", "Every watch comes from brands we stand behind."],
  ["fa-magnifying-glass", "Checked Before Sale", "We check each watch before it is sold."],
  ["fa-user-tie", "Personal Help", "We help you find the right one."]
];

$brands = [
  ["Tissot", "Swiss", "Swiss watchmaking with classic and modern designs."],
  ["Coach", "Fashion", "Stylish fashion watches for everyday wear."],
  ["Alpina", "Sports", "Swiss sports watches built for an active life."]
];

$values = [
  ["fa-certificate", "Authentic Watches", "Every watch comes from trusted brands."],
  ["fa-tags", "Fair Prices", "Great deals in our outlet all year."],
  ["fa-headset", "Friendly Service", "Our team is ready to help before and after you buy."]
];
?>

<div class="titles">About Us</div>

<!-- Story -->
<section class="mb-5">
  <h2 class="section-title">Our Story</h2>
  <div class="row g-4">
    <div class="col-12 col-lg-7">
      <div class="about-story">
        <p class="about-story-text">
          JWatch Store is a watch shop for people who want quality timepieces at fair prices. We carry trusted brands,
          check every watch before it is sold, and help each customer find the right one.
        </p>
      </div>
    </div>

    <div class="col-12 col-lg-5">
      <div class="about-highlights">
        <?php foreach ($highlights as $item) { ?>
          <div class="about-highlight">
            <div class="icon-box"><i class="fa-solid <?php echo $item[0]; ?>" aria-hidden="true"></i></div>
            <div>
              <h3 class="about-highlight-title"><?php echo $item[1]; ?></h3>
              <p class="about-highlight-text"><?php echo $item[2]; ?></p>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
</section>

<!-- Brands -->
<section class="mb-5">
  <h2 class="section-title">Our Brands</h2>
  <div class="row g-4">
    <?php foreach ($brands as $brand) { ?>
      <div class="col-12 col-md-4">
        <article class="about-card">
          <span class="about-tag"><?php echo $brand[1]; ?></span>
          <h3 class="card-heading"><?php echo $brand[0]; ?></h3>
          <p class="info-text"><?php echo $brand[2]; ?></p>
        </article>
      </div>
    <?php } ?>
  </div>
</section>

<!-- Values -->
<section class="mb-5">
  <h2 class="section-title">Why Shop With Us</h2>
  <div class="row g-4">
    <?php foreach ($values as $value) { ?>
      <div class="col-12 col-md-4">
        <article class="about-card">
          <div class="icon-box about-icon"><i class="fa-solid <?php echo $value[0]; ?>" aria-hidden="true"></i></div>
          <h3 class="card-heading"><?php echo $value[1]; ?></h3>
          <p class="info-text"><?php echo $value[2]; ?></p>
        </article>
      </div>
    <?php } ?>
  </div>
</section>

<!-- Action -->
<section class="about-banner">
  <h2 class="about-banner-title">Find Your Next Watch</h2>
  <p class="about-banner-text">Browse our outlet for trusted brands at fair prices.</p>
  <a href="?page=outlet" class="btn btn-about">Shop the Outlet</a>
</section>