<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        />

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        />

        <v-spacer />
        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          />
        </v-responsive>
        <v-divider
          vertical
          class="mx-2"
        />
        <locale-switcher />
        <display-mode-switcher />
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                />

                <v-divider class="my-2" />

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                />
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-8"
            >
              <h1>{{ $t('hello') }}!</h1>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';
import DisplayModeSwitcher from '@/components/DisplayModeSwitcher.vue';

export default {
    components: {
        LocaleSwitcher,
        DisplayModeSwitcher
    },
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
    }),
};
</script>
