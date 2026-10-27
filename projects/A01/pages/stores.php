<?php
$stores = [
  ["Main Store", "Flagship", "Street Address, City", "Monday to Saturday, 10:00 AM to 8:00 PM", "(000) 000-0000"],
  ["City Branch", "Downtown", "Street Address, City", "Monday to Saturday, 10:00 AM to 8:00 PM", "(000) 000-0000"],
  ["Mall Branch", "In the Mall", "Mall Name, City", "Daily, 10:00 AM to 9:00 PM", "(000) 000-0000"]
];

$perks = [
  ["fa-eye", "Try Before You Buy", "See and wear the watches in person."],
  ["fa-user-tie", "Friendly Staff", "Get help choosing the right watch."],
  ["fa-screwdriver-wrench", "Watch Care", "Ask about strap fitting and servicing."]
];
?>

<div class="titles">Our Stores</div>

<!-- Intro -->
<section class="mb-5">
  <h2 class="section-title">Visit Us In Person</h2>
  <p class="info-text store-intro">Visit any of our stores to see our watches in person and get help from our friendly staff.</p>

  <!-- Perks -->
  <div class="row g-3 g-md-4">
    <?php foreach ($perks as $perk) { ?>
      <div class="col-12 col-md-4">
        <div class="perk-card">
          <div class="icon-box"><i class="fa-solid <?php echo $perk[0]; ?>" aria-hidden="true"></i></div>
          <div>
            <h3 class="perk-title"><?php echo $perk[1]; ?></h3>
            <p class="perk-text"><?php echo $perk[2]; ?></p>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>
</section>

<!-- Stores -->
<section class="mb-5">
  <div class="row g-4">
    <?php foreach ($stores as $store) { ?>
      <div class="col-12 col-lg-6 col-xxl-4">
        <article class="store-card">

          <!-- Head -->
          <div class="store-head">
            <div class="icon-box"><i class="fa-solid fa-store" aria-hidden="true"></i></div>
            <div>
              <h3 class="card-heading mb-0"><?php echo $store[0]; ?></h3>
              <span class="store-tag"><?php echo $store[1]; ?></span>
            </div>
          </div>

          <!-- Details -->
          <div class="store-details">
            <div class="store-detail">
              <div class="store-detail-icon"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></div>
              <div>
                <div class="detail-label">Address</div>
                <div class="store-detail-value"><?php echo $store[2]; ?></div>
              </div>
            </div>

            <div class="store-detail">
              <div class="store-detail-icon"><i class="fa-solid fa-clock" aria-hidden="true"></i></div>
              <div>
                <div class="detail-label">Opening Hours</div>
                <div class="store-detail-value"><?php echo $store[3]; ?></div>
              </div>
            </div>

            <div class="store-detail">
              <div class="store-detail-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></div>
              <div>
                <div class="detail-label">Phone</div>
                <div class="store-detail-value"><?php echo $store[4]; ?></div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="store-actions">
            <a href="#" class="btn btn-store-main">Get Directions</a>
            <a href="tel:<?php echo preg_replace('/\D/', '', $store[4]); ?>" class="btn btn-store-alt">Call</a>
          </div>

        </article>
      </div>
    <?php } ?>
  </div>
</section>

<!-- Action -->
<section class="store-banner">
  <h2 class="store-banner-title">Not Sure Which Store to Visit?</h2>
  <p class="store-banner-text">Send us a message and we will help you find the closest store and the watch you want.</p>
  <a href="?page=contact" class="btn btn-store">Contact Us</a>
</section>