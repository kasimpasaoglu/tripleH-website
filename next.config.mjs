import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        silenceDeprecations: ['legacy-js-api']
    }
};

export default withNextIntl(nextConfig);