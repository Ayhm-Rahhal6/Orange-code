<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/boosted@5.3.3/dist/css/boosted.min.css" rel="stylesheet" integrity="sha384-laZ3JUZ5Ln2YqhfBvadDpNyBo7w5qmWaRnnXuRwNhJeTEFuSdGbzl4ZGHAEnTozR" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="https://boosted.orange.com/docs/5.3/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Scroll</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-end" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll align-items-end" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex navbar-item ms-3 mt-md-4" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div class="container text-center">
  <div class="row">
  <?php foreach($products as $product){?>
  <div class="col-md-4 d-flex justify-content-center align-items-center"> 
        <div class="card" style="width: 100%;">
            <img src="<?php echo $product['img_url'];?>" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><?php echo $product['name'];?></h5>
                <p class="card-text"><?php echo $product['description'];?></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    
</div>
<?php } ?>
  </div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
</body>
</html>