<?php

// Variables
$error = "";
$success = "";

// Validation
if (isset($_POST["send"])) {
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $message = trim($_POST["message"]);

  if ($name == "" || $email == "" || $message == "") {
    $error = "Please fill in all fields.";
  } else {
    // Send the email or save to the database here
    $success = "Thank you! Your message has been sent.";
  }
}

?>

<div class="titles">Contact Us</div>

<section class="mb-5">
  <div class="row g-3 g-md-4">
    <!-- Form -->
    <div class="col-12 col-lg-7">
      <div class="collection-card form-card h-100 p-4 p-md-5">
        <h2 class="section-title">Send Us a Message</h2>

        <?php if ($success != "") { ?>
          <div class="alert alert-success d-flex align-items-center gap-2" role="alert">
            <i class="fa-solid fa-circle-check"></i>
            <div><?php echo $success; ?></div>
          </div>
        <?php } ?>

        <?php if ($error != "") { ?>
          <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
            <i class="fa-solid fa-circle-exclamation"></i>
            <div><?php echo $error; ?></div>
          </div>
        <?php } ?>

        <form method="post" action="?page=contact">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="Your full name" required>
            </div>
            <div class="col-12 col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="col-12">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
            </div>
            <div class="col-12">
              <button type="submit" name="send" class="btn btn-shop px-4">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Details -->
    <div class="col-12 col-lg-5">
      <div class="history-banner h-100 mt-0">
        <h2 class="historyHeading">Get in Touch</h2>

        <div class="d-flex gap-3 mb-4 text-start">
          <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
          <div>
            <div class="detail-label">Email</div>
            <a href="mailto:support@jwatchstore.com" class="detail-link">support@jwatchstore.com</a>
          </div>
        </div>

        <div class="d-flex gap-3 mb-4 text-start">
          <div class="icon-box"><i class="fa-solid fa-phone"></i></div>
          <div>
            <div class="detail-label">Phone</div>
            <div>(000) 000-0000</div>
          </div>
        </div>

        <div class="d-flex gap-3 mb-4 text-start">
          <div class="icon-box"><i class="fa-solid fa-location-dot"></i></div>
          <div>
            <div class="detail-label">Address</div>
            <div>Street Address, City</div>
          </div>
        </div>

        <div class="d-flex gap-3 text-start">
          <div class="icon-box"><i class="fa-solid fa-clock"></i></div>
          <div>
            <div class="detail-label">Store Hours</div>
            <div>Monday to Saturday, 10:00 AM to 8:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>