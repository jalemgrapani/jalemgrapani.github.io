<?php

// Variables
$error = "";
$success = "";

$details = [
  ["fa-envelope", "Email", "support@jwatchstore.com", "mailto:support@jwatchstore.com"],
  ["fa-phone", "Phone", "(000) 000-0000", "tel:0000000000"],
  ["fa-location-dot", "Address", "Street Address, City", ""],
  ["fa-clock", "Store Hours", "Monday to Saturday, 10:00 AM to 8:00 PM", ""]
];

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
  <div class="row g-4">

    <!-- Form -->
    <div class="col-12 col-lg-7">
      <div class="contact-form-card form-card">
        <h2 class="section-title">Send Us a Message</h2>
        <p class="info-text contact-form-intro">Have a question about a watch or an order? Fill in the form and we will get back to you.</p>

        <?php if ($success != "") { ?>
          <div class="alert alert-success d-flex align-items-center gap-2" role="alert">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            <div><?php echo $success; ?></div>
          </div>
        <?php } ?>

        <?php if ($error != "") { ?>
          <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
            <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
            <div><?php echo $error; ?></div>
          </div>
        <?php } ?>

        <form method="post" action="?page=contact">
          <div class="row g-4">
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
              <textarea class="form-control" id="message" name="message" rows="6" placeholder="How can we help?" required></textarea>
            </div>
            <div class="col-12">
              <button type="submit" name="send" class="btn btn-contact">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Details -->
    <div class="col-12 col-lg-5">
      <aside class="contact-info">
        <h2 class="contact-info-title">Get in Touch</h2>

        <div class="contact-list">
          <?php foreach ($details as $item) { ?>
            <div class="contact-item">
              <div class="icon-box"><i class="fa-solid <?php echo $item[0]; ?>" aria-hidden="true"></i></div>
              <div class="contact-item-body">
                <div class="detail-label"><?php echo $item[1]; ?></div>
                <?php if ($item[3] != "") { ?>
                  <a href="<?php echo $item[3]; ?>" class="contact-link"><?php echo $item[2]; ?></a>
                <?php } else { ?>
                  <div class="contact-value"><?php echo $item[2]; ?></div>
                <?php } ?>
              </div>
            </div>
          <?php } ?>
        </div>
      </aside>
    </div>

  </div>
</section>