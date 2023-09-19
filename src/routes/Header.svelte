<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import club from '$lib/images/club-logo.jpg';
	import github from '$lib/images/github.svg';
	import { t} from '$lib/translations';

</script>

<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->

<header class="p-3 mb-3 border-bottom">
    <div class="container">
		<nav class="navbar navbar-expand-lg bg-body-tertiary rounded fixed-top" aria-label="Navigation">
			<div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start container-fluid">
				<a href="https://kit.svelte.dev" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none navbar-brand">
					<img class="bi me-2" width="40" height="32" aria-label="ClubLogo" src={club} alt="ClubLogo"/>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsInside" aria-controls="navbarsInside" aria-expanded="true" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="navbar-collapse collapse" id="navbarsInside">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}><a href="/" class="nav-link nav-item px-2 link-secondary">{$t('menu.home')}</a></li>
						<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}><a href="/about" class="nav-link nav-item px-2 link-body-emphasis">{$t('menu.about')}</a></li>
						<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}><a href="/sverdle" class="nav-link nav-item px-2 link-body-emphasis">{$t('menu.events')}</a></li>
						<li><a href="/" class="nav-link nav-item px-2 link-body-emphasis">{$t('menu.reviews')}</a></li>
						<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}><a href="/contact" class="nav-link nav-item px-2 link-body-emphasis">{$t('menu.contact')}</a></li>
					</ul>
					
					<div class="dropdown text-end mx-3" >
						<a href="#top" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
						</a>
						<ul class="dropdown-menu  text-small" style="">
							<li><a class="dropdown-item" href="#top">New project...</a></li>
							<li><a class="dropdown-item" href="#top">Settings</a></li>
							<li><a class="dropdown-item" href="#top">Profile</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#top">Sign out</a></li>
						</ul>
					</div>
					<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
						<input type="search" class="form-control" placeholder={$t('menu.search')} aria-label="Search">
					</form>
				</div>
			</div>
		</nav>
    </div>
</header>



<style>
	

.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}

.bi {
vertical-align: -.125em;
fill: currentColor;
}

     

      

      
      
	/* header {
		display: flex;
		justify-content: space-between;
	} */

	/* .corner {
		width: 3em;
		height: 3em;
	} */

	/* .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	} */

	 img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	} 

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	} */

	/* li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
