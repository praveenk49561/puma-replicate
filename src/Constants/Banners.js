import Banner1 from '../Assets/images/PUMA-BANNER-1.jpg';
import Banner2 from '../Assets/images/PUMA-BANNER-2.jpg';
import Banner3 from '../Assets/images/PUMA-BANNER-3.jpg';
import Banner4 from '../Assets/videos/22SS_Ecom_RT_RUN-PUMA_Velocity-Nitro-2_Q1_1_1440x500_15s.mp4';
import Banner5 from '../Assets/images/PUMA-BANNER-5.jpg';
import Banner6 from '../Assets/images/PUMA-BANNER-6.jpg';
import Banner7 from '../Assets/images/PUMA-BANNER-7.jpg';
import Banner8 from '../Assets/images/PUMA-BANNER-8.jpg';
import Banner9 from '../Assets/images/PUMA-BANNER-9.jpg';

const Banners = [{
    id: 0,
    heading: '',
    description: 'DOWNLOAD THE PUMA APP-s-SPECIAL LAUNCH OFFER-s-FROM VIRAT INSIDE',
    subHeading: '',
    buttons: ['DOWNLOAD NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~June2022~App-Launch-static-Banner-Desktop.jpg/fmt/jpg/fmt/png',
        alt: Banner1,
        type: 'image',
    },
    contrast: { button: false, header: true },
    align: { container: 'right', element: 'center' },
}, {
    id: 1,
    heading: 'WALK IT OFF',
    description: '',
    subHeading: 'SOFTRIDE COLLECTION',
    buttons: ['SHOP MEN', 'SHOP WOMEN', 'SHOP KIDS'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~DESKTOP+Bleed.jpg/fmt/jpg/fmt/png',
        alt: Banner2,
        type: 'image',
    },
    contrast: { button: false, header: false },
    align: { container: 'right', element: 'center' },
}, {
    id: 2,
    heading: 'NIGHT RIDE',
    description: '',
    subHeading: 'PUMA X MERCEDES-AMG PATRONAS',
    buttons: ['SHOP NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~June2022~Mercedes-AMG_Desktop_1440x500.jpg/fmt/jpg/fmt/png',
        alt: Banner3,
        type: 'image',
    },
    contrast: { button: true, header: true },
    align: { container: 'left', element: 'left' },
}, {
    id: 6,
    heading: 'RUN PUMA',
    description: '',
    subHeading: '',
    buttons: ['NITRO COLLECTION'],
    background: {
        src: 'https://videos.puma.net/videos/fn/~regional~IND~others~Nitro+Video~22SS_Ecom_RT_RUN-PUMA_Velocity-Nitro-2_Q1_1_1440x500_15s.mp4',
        alt: Banner4,
        type: 'video',
    },
    contrast: { button: true, header: true },
    align: { container: 'left', element: 'left' },
}, {
    id: 3,
    heading: 'ENHANCE-s-YOUR-s-TRAINING',
    description: '',
    subHeading: 'PWRFRAME TR',
    buttons: ['SHOP NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~PWRFrame-TR-Desktop-Banner.jpg/fmt/jpg/fmt/png',
        alt: Banner5,
        type: 'image',
    },
    contrast: { button: true, header: true },
    align: { container: 'left', element: 'left' },
}, {
    id: 4,
    heading: 'ALWAYS-s-UNEXPECTED',
    description: '',
    subHeading: 'PUMA FOR SCUDERIA FERRARI',
    buttons: ['SHOP NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~Ferrari-Desktop-Banner_31stMay.jpg/fmt/jpg/fmt/png',
        alt: Banner6,
        type: 'image',
    },
    contrast: { button: false, header: false },
    align: { container: 'left', element: 'left' },
}, {
    id: 5,
    heading: 'TRINOMIC-s-TRIUMPH',
    description: '',
    subHeading: 'TRC BLAZE COURT',
    buttons: ['SHOP NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~TRC-Blaze-Court-Desktop.jpg/fmt/jpg/fmt/png',
        alt: Banner7,
        type: 'image',
    },
    contrast: { button: false, header: false },
    align: { container: 'left', element: 'left' },
}, {
    id: 8,
    heading: 'ELEVATE YOUR STYLE',
    description: '',
    subHeading: 'Virat In The New One8 Collection',
    buttons: ['SHOP NOW'],
    background: {
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~One8_desktop_SS22Banner.jpg/fmt/jpg/fmt/png',
        alt: Banner8,
        type: 'image',
    },
    contrast: { button: true, header: true },
    align: { container: 'right', element: 'center' },
}, {
    id: 7,
    heading: 'PUMA X FRIDA KHALO',
    description: '',
    subHeading: 'FLOWER POWER',
    buttons: ['SHOP NOW'],
    background: { 
        src: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~May+2022~Frida-Collection_RUN-XX_FullBleedHero_Desktop_1440x500.jpg/fmt/jpg/fmt/png',
        alt: Banner9,
        type: 'image'
    },
    contrast: { button: true, header: true },
    align: { container: 'right', element: 'center' },
}];

export default Banners;