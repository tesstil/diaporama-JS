<!DOCTYPE html>
<html>

<head>
	<title>Webcams Chamrousse</title>
	<meta charset="utf-8"/>

	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="shortcut icon" href="images/cable-car-cabin.png" type="image/x-icon" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" >
</head>

	<body>

		<main id="main">
			<h1>Webcams sur la station Chamrousse</h1>
			<div id="slideshow">
				<div id="cadre">
					<div id="slider">
						<div id="slider_barre">
							<ul id="barre">
								<li>
									<img src="https://www.chamrousse.com/templates/SITE2016/cache/min-PRESTATAIRE-WEBCAMS-TELESIEGEBACHATBOULOUD-Sommet_Bachat000.jpg" alt="">
									<div class="title_cam">Chamrousse 2030 - Sommet télésiège Bachat-Bouloud</div>
								</li>
								<li>
									<img src="https://www.chamrousse.com/templates/SITE2016/cache/min-PRESTATAIRE-WEBCAMS-VUGRENOBLEVERCORS-webcam-chamrousse.jpg" alt="" />
									<div class="title_cam">Chamrousse 1800 - Vue vers Grenoble et le Vercors</div>
								</li>
								<li>
									<img src="https://www.chamrousse.com/templates/SITE2016/cache/min-PRESTATAIRE-WEBCAMS-PLACEBELLEDONNE-Front_neige_1650000M.jpg" alt="" />
									<div class="title_cam">Chamrousse 1650 - Place de Belledonne - Recoin</div>
								</li>
								<li>
									<img src="https://www.chamrousse.com/templates/SITE2016/cache/min-PRESTATAIRE-WEBCAMS-PLATEAUARSELLENORDIQUE-Plateau_Arselle_000.jpg" alt="" />
									<div class="title_cam">Chamrousse 1600 - Plateau de l'Arselle - Domaine Nordique</div>
								</li>
							</ul>
						</div>

						<ul id="div_btn_imgs"><!--Boutons images--></ul>
					</div>

					<div id="div_btn_puces"><!--Boutons puces--></div>
				</div>

				<div id="action_diapo">
					<button id="precedent">
						<i class="material-icons" >skip_previous</i>
					</button>
					<button id="suivant">
						<i class="material-icons">skip_next</i>
					</button>
					<button id="start">
						<i class="material-icons">play_arrow</i>
					</button>
					<button id="stop">
						<i class="material-icons">pause</i>
					</button>
					<button id="reload">
						<i class="material-icons">autorenew</i>
					</button>
				</div>

			</div>
		</main>

		<script type="text/javascript" src="slider.js"></script>
		<script type="text/javascript">
			// initialisation(500, 4000, 50);
		</script>

	</body>
</html>
