<template>
  <v-switch
    v-model="isDark"
    class="displayModeSwitcher"
    inset
    false-icon="mdi-white-balance-sunny"
    true-icon="mdi-weather-night"
    flat
    hide-details
  />
</template>

<script>
export default {
    data: () => ({
        isDark: true
    }),
    watch: {
        'isDark' (newVal) {
            this.changeTheme(newVal ? 'dark' : 'light');
        }
    },
    created () {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', this.updateDisplayModeFromOsPreferences)
        ;
        this.updateDisplayModeFromOsPreferences();
    },
    beforeUnmount () {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', this.updateDisplayModeFromOsPreferences)
        ;
    },
    methods: {
        updateDisplayModeFromOsPreferences () {
            this.isDark = window.matchMedia('(prefers-color-scheme:dark)').matches ? true : false;
        },
        changeTheme (name) {
            this.$vuetify.theme.global.name = name;
        }
    }
};
</script>

<style lang="scss">
.displayModeSwitcher {
    display: contents;
}
</style>
