<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div>
    <button v-for="(locale, index) in locales" :key="index" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
</template>
