//logos
import css_logo from './css_logo.png';
import html_logo from './html_logo.png';

import react_logo from './react_logo.png';
import material_ui_logo from './material_ui_logo.png';
import node_icon from './node_logo.png';
import express_icon from './express_logo.svg';
import flask_logo from './flask_logo.png';
import angular_logo from './angular_logo.svg';
import vue_logo from './vue_logo.svg';

import dota_stats from './dota_stats.png';
import aluminus from './aluminus.png';
import daya_chess from './daya_chess.png';

export default [
    {
        name: 'Match Three',
        img: dota_stats,
        site: 'http://burself21.github.io/match-three',
        source: 'https://github.com/burself21/match-three',
        desc: 'This project is a fun matching game I created based on 羊了个羊',
        techs: [
            {
                name: "HTML",
                icon: html_logo
            },
            {
                name: "CSS",
                icon: html_logo
            },
            {
                name: "Vue",
                icon: vue_logo
            },

        ]
    },

    {
        name: 'OpenDota API Stats',
        img: dota_stats,
        site: 'https://burself21.github.io/dota-stats',
        source: 'https://github.com/burself21/dota-stats',
        desc: 'The website displays organized and detailed information about all of the various heroes and items in the game Dota 2 by accessing the Opendota API',
        techs: [
            {
                name: "HTML",
                icon: html_logo
            },

            {
                name: "CSS",
                icon: css_logo
            },

            {
                name: "React",
                icon: react_logo
            },
            {
                name: "Material UI",
                icon: material_ui_logo
            }
        ]
    },

    {
        name: 'Aluminus',
        img: aluminus,
        site: 'https://aluminus-app.herokuapp.com',
        source: 'https://github.com/burself21/aluminus',
        desc: 'The website was going to be for an upcoming startup that would allow alumni to make more personal donations to students at their alma mater.',
        techs: [
            {
                name: "HTML",
                icon: html_logo
            },

            {
                name: "CSS",
                icon: css_logo
            },

            {
                name: "React",
                icon: react_logo
            },
            {
                name: "Material UI",
                icon: material_ui_logo
            },
            {
                name: "Node.js",
                icon: node_icon
            },
            {
                name: "Express.js",
                icon: express_icon
            }
        ]
    },

    {
        name: 'Daya Chess AI',
        img: daya_chess,
        site: "https://daya-chess.wl.r.appspot.com",
        source: "https://github.com/burself21/daya-chess",
        desc: "The website is a chess app that allows you to play against a currently very poor AI.",
        techs: [
            {
                name: "HTML",
                icon: html_logo
            },

            {
                name: "CSS",
                icon: css_logo
            },

            {
                name: "Flask",
                icon: flask_logo
            },
                
            {
                name: "Angular",
                icon: angular_logo
            }

        ]

    }
]