import { useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import styles from 'https://cdn.jsdelivr.net/gh/lessboringifytrees/backgroundanimation/BackgroundFixed.module.css';

export const FixedBG = () => {

    useEffect(() => {
        document.querySelectorAll('.leaf-div > div > img').forEach(el => {
            el.addEventListener('load', () => {
                el.style.display = 'block';
            });
        });
    });

    return React.createElement(
        Box,
        {
            w: '100%',
            h: 'var(--height)',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: -5,
            className: 'Animated-BG' },
        React.createElement(
            Box,
            { className: styles.leaf + ' leaf-div' },
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png', height: '75px', width: '75px' })
            ),
            React.createElement(
                Box,
                null,
                React.createElement(Image, { src: 'http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png', height: '75px', width: '75px' })
            )
        )
    );
};

