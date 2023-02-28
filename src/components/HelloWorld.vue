<template>
  <div>
    <p>{{ t('greeting') }}</p>
    <p>{{ t('farewell') }}</p>

  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option value="">Select One</option>
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue'
import { useI18n, VueI18n } from 'vue-i18n';
import i18n from '@/i18n'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(){
    const { t, locale, } = useI18n()
 

    const setLocale = (locale: string) => {
     
    }

    return {
      t,
      setLocale
    }
  }
});
</script>

