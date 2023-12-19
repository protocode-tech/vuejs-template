<template>
  <v-menu
    open-on-hover
    :width="200"
    location="bottom end"
    origin="auto"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list density="compact">
        <v-list-subheader>TRANSLATIONS</v-list-subheader>
        <template
          v-for="locale in availableLocales"
          :key="`locale-${locale.value}`"
        >
          <v-list-item @click="$i18n.locale = locale.value">
            <v-list-item-title>
              <v-icon
                small
                :icon="$i18n.locale === locale.value ? 'mdi-check' : ''"
              /> {{ locale.name }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { availableLocales } from '@/plugins/vuetify';

export default {
    data: () => ({
        availableLocales
    })
};
</script>
