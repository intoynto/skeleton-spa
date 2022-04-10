const twColors=require("tailwindcss/colors");

module.exports={
    mode:'jit',
    content:[
        './app/Views/**/*.twig',
        './src/**/*.{js,ts,tsx}',
    ],
    //darkMode:false, // or 'media' or 'class'
    theme:{
        fontSize: {
            xs: ['0.65rem', { lineHeight: '0.875rem' }],
            sm: ['0.75rem', { lineHeight: '0.975rem' }],
            base: ['0.875rem', { lineHeight: '1.2rem' }],
            '12': ['12px', { lineHeight: '1.1em' }],
            lg: ['1rem', { lineHeight: '1.5rem' }],
            xl: ['1.125rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.25rem', { lineHeight: '1.75rem' }],
            '3xl': ['1.5rem', { lineHeight: '2rem' }],
            '4xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '6xl': ['3rem', { lineHeight: '1' }],
            '7xl': ['3.75rem', { lineHeight: '1' }],
            '8xl': ['4.5rem', { lineHeight: '1' }],
            '9xl': ['6rem', { lineHeight: '1' }],
            '10xl': ['8rem', { lineHeight: '1' }],
        },
        extend:
        {
            screens: {
                'screen': { 'raw': 'screen' },
                'print': { 'raw': 'print' },
            },
            lineHeight: {
                '2': '0.5rem'
            },
            width: {
                'potrait': '21cm',
                'pos': '44mm',
            },
        },
    },
    variants:{
        extend: {
            translate: ['active', 'group-hover'],
        }
    },
    plugins:[       
    ],
}