export const myMixin = {
    data() {
        return {
            mixinData: 'This is from the mixin',
        };
    },
    methods: {
        setSnackbar(text, color) {
            this.$store.dispatch('setSnackbar', {
                text: text,
                color: color,
                timeout: 3000
            })
        },
    },
};