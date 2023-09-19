<script>
	import { page } from '$app/stores';
	import language from '$lib/images/language.svg';
	import instagram from '$lib/images/instagram.svg';
	import { t, locale, locales } from '$lib/translations';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<div class="container px-4 py-5" id="featured-3">
	<!-- <section> -->
	<h2 class="pb-2 border-bottom">Contact us</h2>
	<!-- <svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		fill="currentColor"
		class="bi bi-buildings"
		viewBox="0 0 16 16"
	>
		<path
			d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"
		/>
		<path
			d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"
		/>
	</svg> -->
	<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"
			>
				<i class="bi bi-envelope-paper-heart" />
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-envelope-paper-heart"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
					/>
				</svg> -->
				<i class="bi bi-pencil-square" />
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-pencil-square"
					viewBox="0 0 16 16"
				>
					<path
						d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
					/>
					<path
						fill-rule="evenodd"
						d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
					/>
				</svg> -->
			</div>
			<h3 class="fs-2 text-body-emphasis">Send us an email</h3>
			<form>
				<div class="pb-2">
					<label for="your-name" class="form-label">Your First Name</label>
					<input
						type="text"
						class="form-control"
						id="your-name"
						placeholder="First name"
						autocomplete="given-name"
						required
					/>
				</div>
				<div class="pb-2">
					<label for="your-surname" class="form-label">Your Surname</label>
					<input
						type="text"
						class="form-control"
						id="your-surname"
						name="your-surname"
						placeholder="surname"
						autocomplete="family-name"
						required
					/>
				</div>
				<div class="pb-2">
					<label for="email" class="form-label">Your Email</label>
					<input
						type="email"
						class="form-control"
						id="email"
						placeholder="name@example.com"
						required
					/>
				</div>
				<!-- <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" name="your-email" placeholder="name@example.com" required>
              <label for="floatingInput" class="form-label">Email address</label>
            </div> -->
				<div class="pb-2">
					<label for="subject" class="form-label">Subject</label>
					<input type="text" class="form-control" id="subject" placeholder="subject" required />
				</div>
				<div class="pb-2">
					<label for="your-message" class="form-label">Your Message</label>
					<textarea
						class="form-control message"
						placeholder="Leave a comment here"
						id="your-message"
						name="your-message"
						required
					/>
				</div>
				<button data-res="" type="submit" class="btn btn-dark w-100 fw-bold">Send</button>
			</form>

			<!-- <a href="#top" class="icon-link">
          Call to action
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg> -->
			<!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> -->
			<!-- </a> -->
		</div>
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"
			>
				<i class="bi bi-clock m-1" />
				<i class="bi bi-buildings" />

				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-clock"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
					/>
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
				</svg> -->
				<!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> -->
			</div>
			<h3 class="fs-2 text-body-emphasis">Address and open hours</h3>
			<p>🏢 CPIC Kněžskodvorská 2296/8A, České Budějovice</p>
			<p>⌚️ ср: 19-20 вс: 14-17</p>
			<p>
				💰 бесплатно<br /> Взаимная поддержка, помощь, женская сила<br /> Совместное творчество, душевное
				общение среди подруг
			</p>

			<a href="https://www.instagram.com/zenskyj_klub/" class="nav-link text-body-secondary"
				><img src={instagram} alt="Instagram" /></a
			>

			<a href="#top" class="icon-link">
				Call to action
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-chevron-right"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
				<!-- <svg class="bi"><use xlink:href="#chevron-right"></use></svg> -->
			</a>
		</div>
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"
			>
				<i class="bi bi-geo-alt" />
				<!-- <svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					class="bi bi-geo-alt"
					viewBox="0 0 16 16"
				>
					<path
						d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
					/>
					<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
				</svg> -->
				<!-- <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> -->
			</div>
			<h3 class="fs-2 text-body-emphasis">How to find us</h3>

			<iframe
				title="location"
				src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1313.639649703312!2d14.473762559430632!3d48.987948960176446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d48.988144999999996!2d14.4727505!5e0!3m2!1sen!2scz!4v1694118038466!5m2!1sen!2scz"
				height="450"
				width="100%"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
	<!-- </section> -->
</div>

<style>
	.message {
		height: 150px !important;
	}
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	} */
</style>
