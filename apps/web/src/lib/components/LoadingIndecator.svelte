<script lang="ts">
  import { navigating } from '$app/state';
  import { onDestroy } from 'svelte';

  const links = [
    { href: '/ar7al', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/career', label: 'Career' },
    { href: '/blog', label: 'Blog' }
  ];

  function isTopLevel(pathname: string | null | undefined): boolean {
    return !!pathname && links.some(link => link.href === pathname);
  }

  let progress = $state(0);
  let rafId: number | null = null;
  let finishing = $state(false);

  function tick() {
    if (!finishing) {

      progress = Math.min(90, progress + Math.max(0.4, (90 - progress) * 0.035));
    } else {

      progress = Math.min(100, progress + Math.max(1.2, (100 - progress) * 0.25));
    }

    if (finishing && progress >= 99.5) {

      progress = 100;
      setTimeout(() => {
        progress = 0;
        finishing = false;
      }, 180);
      rafId = null;
      return;
    }

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId !== null) return;
    if (progress === 0) progress = 4;
    rafId = requestAnimationFrame(tick);
  }

  function finish() {
    finishing = true;
    if (rafId === null) start();
  }


  $effect(() => {

    const nav = navigating;

    if (nav?.from && nav?.to) {
      const fromTop = isTopLevel(nav.from.url.pathname);
      const toTop   = isTopLevel(nav.to.url.pathname);

      if (fromTop && toTop) {

        finishing = false;
        start();
        return;
      }
    }


    finish();
  });

  onDestroy(() => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
</script>

<div class="pointer-events-none fixed left-0 top-0 z-[100] h-[2px] w-full">
  <div class="mx-auto h-full max-w-3xl overflow-hidden">
    <div
      class="h-full origin-left bg-white/90 transition-[width] duration-100 ease-out"
      style="width: {progress}%"
    ></div>
  </div>
</div>
