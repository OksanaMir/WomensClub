<script>
    import { page } from '$app/stores';
    import instagram from '$lib/images/instagram.svg';
    import language from '$lib/images/language.svg';
    import { t, locale, locales } from '$lib/translations';

  // @ts-ignore
  const handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    document.cookie = `lang=${value} ;`;
  };
</script>

<div class="container-fluid px-0">
    <footer class="py-3 border-top bg-body-tertiary ">
      <ul class="nav justify-content-center mb-3">
        <li class="nav-item"><a href="#top" class="nav-link px-4 text-body-secondary">{$t('menu.home')}</a></li>
        <li class="nav-item"><a href="#top" class="nav-link px-4 text-body-secondary">{$t('menu.contact')}</a></li>
        <li class="nav-item"><a href="https://www.instagram.com/zenskyj_klub/" class="nav-link px-4 text-body-secondary"><img src={instagram} alt="Instagram" /></a></li>
        <li class="nav-item"><a href="#top" class="nav-link px-4 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a href="#top" class="nav-link px-4 text-body-secondary">{$t('menu.about')}</a></li>
      </ul>
      <div class="d-flex justify-content-center">
        <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
        <div class="dropdown text-end mx-3" >
            <a href="#top" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={language} alt="langSwither">
            </a>
            <ul class="dropdown-menu dropdown-menu-start text-small" style="">
                <li><a class="dropdown-item" href="#top">UA</a></li>
                <li><a class="dropdown-item" href="#top">CZ</a></li>
                <li><a class="dropdown-item" href="#top">EN</a></li>
                <li><a class="dropdown-item" href="#top">RU</a></li>
            </ul>
        </div>
        <div class="d-flex justify-content-between mx-3 p-0 mb-3">
            <img src={language} alt="langSwither" class="mx-1">
            <!-- <select class="form-select form-select-md py-0" aria-label=".form-select-md">
                <option selected>UA</option>
                <option value="1">CZ</option>
                <option value="2">EN</option>
                <option value="3">RU</option>
            </select> -->
            <select class="form-select form-select-md py-0" aria-label=".form-select-md" bind:value="{$locale}" on:change={handleChange}>
                {#each $locales as value}
                  <option value="{value}">{$t(`lang.${value}`)}</option>
                {/each}
              </select>
        </div>
      </div>
    </footer>
</div>

<style>
    footer {
		font-weight: bold;
	}
    .dropdown-item {
  width: 20px !important;
}


</style>