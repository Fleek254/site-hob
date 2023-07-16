<!-- nav section @S -->
<nav class="navbar header-section navbar-expand-lg navbar-light mx-md-o mx-1">
	<div class="container custom-header">
		<a class="navbar-brand" href="<?= base_url() ?>">
			<img src="<?= base_url('assets/images/logomob.png') ?>" alt="Logo" class="img-fluid d-none d-md-block" style="max-width:40px;">
			<img src="<?= base_url('assets/images/logomob.png') ?>" alt="Logo" class="img-fluid d-block d-md-none" style="max-width: 30px;">
		</a>
		<a href="#" class="hob-primary-button d-inline-block d-md-none mr-auto"><i class="fa-brands fa-whatsapp me-2"></i>Programeaza-te</a>
		<div class="d-flex align-items-center">
			<select class="selectpicker lang-select d-md-none d-block">
				<option style="line-height: 50px;"  data-content="<img src='https://elei.b-cdn.net/HOB/MIX/ro.svg' style='width:28px;' >"></option>
				<option style="line-height: 50px;"  data-content="<img src='https://elei.b-cdn.net/HOB/MIX/it.svg' style='width:28px;' >"></option>
				<option  style="line-height: 50px;" data-content="<img src='https://elei.b-cdn.net/HOB/MIX/uk.svg' style='width:28px;' >"></option>
			</select>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
					aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars menuTogglerHob"></i>
			</button>
		</div>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav mx-auto custom_nav">
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url() ?>">AcasA</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
					   aria-haspopup="true" aria-expanded="false">
						Servicii
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="https://hob2.grandsoft.ro/">Dantura Fixa in 24 de Ore</a>
						<a class="dropdown-item" href="https://hob2.grandsoft.ro/index2.html">Fatete Dentare</a>
						<a class="dropdown-item" href="<?= base_url('servicii/estetica-dentara') ?>">Estetica dentara</a>
						<a class="dropdown-item" href="/orto.html">Ortodontie</a>
						<a class="dropdown-item" href="/radio.html">Radiologie</a>
						<a class="dropdown-item" href="/paro.html">Parodontie</a>
						<a class="dropdown-item" href="/pedo.html">Pedodontie</a>
						<a class="dropdown-item" href="/serv1.html">Chirurgie orala</a>
					</div>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url('cazuri') ?>">Cazuri</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url('testimoniale') ?>">PAreri PacienTi</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url('preturi') ?>">Preturi</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url('echipa') ?>">EchipA</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= base_url('contact') ?>">Contact</a>
				</li>
			</ul>
			<div class="d-flex">
				<a href="#" class="d-none d-md-block common-button">
					<svg xmlns="http://www.w3.org/2000/svg"  class="me-1" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
						<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
						<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
					</svg>
					PROGRAMEAZA-TE
				</a>
				<select class="selectpicker lang-select d-none d-md-block" id="langpick">
					<option style="line-height: 50px;"  data-content="<img src='https://elei.b-cdn.net/HOB/MIX/ro.svg' style='width:28px;' >" value="ro"></option>
					<option style="line-height: 50px;"  data-content="<img src='https://elei.b-cdn.net/HOB/MIX/it.svg' style='width:28px;' >" value="it"></option>
					<option  style="line-height: 50px;" data-content="<img src='https://elei.b-cdn.net/HOB/MIX/uk.svg' style='width:28px;' >" value="en"></option>
				</select>
			</div>
		</div>
	</div>
</nav>
<!-- nav section @E -->
