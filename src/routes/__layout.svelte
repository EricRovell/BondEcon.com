<script lang="ts">
  import { media } from "@stores";
  import { i18nInit } from "@core/i18n";
  import { Footer } from "@components";
  
  import "@styles/main.css";
  import "@styles/normalize.css";
  import "@styles/theme-dark.css";
  import "@styles/theme-light.css";
  import "@styles/typography.css";

  i18nInit();
</script>

<!--
  @component
  App Root Component
  
  Provides common layout for entire application.
-->
<div id="app">
  {#if !$media.mobile}
    {#await import("@components/Header.svelte") then Header}
      <svelte:component this={Header.default} />
    {/await}
  {/if}
  <div class="content">
    <slot />
  </div>
  <Footer />
  {#if $media.mobile}
    {#await import("@components/BottomNavigation.svelte") then BottomNavigation}
      <svelte:component this={BottomNavigation.default} />
    {/await}
  {/if}
</div>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    line-height: 1.0;

    position: relative;
  }
  
  #app {
    --max-width: 1440px;
    width: 100%;
    
    font-family: var(--font-main);
  }

  .content {
    display: grid;
    grid-auto-rows: min-content;
    place-items: start start;
    position: relative;
    width: 100%;
    min-height: 100vh;
    
    margin-top: 10vh;
    margin-bottom: 40vh;
  }

  /* let bottom menu be full width */
  @media screen and (max-width: 640px) {
    #app {
      padding: 0;
    }
    
    .content {
      padding: 0 1em;
    }
  }
</style>