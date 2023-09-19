<script>
	// @ts-nocheck

	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import club_photo from '$lib/images/club-photo.jpg';
	import { t } from '$lib/translations';

	const link = 'https://kit.svelte.dev';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{$t('home.title')}</h1>
	<p>{@html $t('home.text', { link })}</p>
	<h1>
		<p>
			fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
			fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
		</p>
		<p>
			fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
			fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
		</p>
		<p>
			fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
			fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
		</p>
		<div class="contrainer">
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset='$lib/images/club-photo.jpg'  /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset={club_photo} type="image" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
			<picture>
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={club_photo} alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>
	<p>
		fhfhfhf vjvdjjfcdv vjdjfed vndjjcjs vlvelw flgfvjdfv d dfkjvkjv . djfjdfjdj dfcjsfjdhsj
		fsjf,hfhejf.hfhhff,hhfhhhv fhfhfhf vjvdjjfcdvv
	</p>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	/* .welcome { */
	/* display: block;
		position: relative; */
	/* width: 100%; */
	/* height: 0; */
	/* padding: 0 0 calc(100% * 495 / 2048) 0; */
	/* } */

	/* .welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
