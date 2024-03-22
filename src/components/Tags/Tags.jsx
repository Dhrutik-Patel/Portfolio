import React from 'react';

const darkColors = [
    '#000000', // Black
    '#36454F', // Charcoal
    '#191970', // Midnight Blue
    '#654321', // Dark Brown
    '#2E0854', // Deep Purple
    '#800000', // Maroon
    '#000080', // Navy Blue
    '#228B22', // Forest Green
    '#800020', // Burgundy
    '#420606', // Mahogany
    '#311432', // Eggplant
    '#D2691E', // Chocolate Brown
    '#3B0B30', // Aubergine
    '#000000', // Jet Black
    '#556B2F', // Olive Green
    '#4B0082', // Plum
    '#2a3439', // Gunmetal
    '#4B0082', // Indigo
    '#9B111E', // Ruby Red
    '#8B008B' // Deep Magenta
];

const Tag = ({ tag }) => {
    // Select a random index from the darkColors array
    const randomIndex = Math.floor(Math.random() * darkColors.length);
    const randomColor = darkColors[randomIndex];

    const tagStyle = {
        backgroundColor: randomColor,
        color: '#fff',
        padding: '0.2em 0.4em',
        borderRadius: '0.2em',
        marginRight: '0.5em',
        fontSize: '0.8em',
        fontWeight: 500
    };

    return <span style={tagStyle}>{tag}</span>;
};

export default Tag;
