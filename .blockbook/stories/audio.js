import {
	registerBlockStory,
} from 'blockbook-api';

registerBlockStory( 'core/audio', {
	name: 'Audio with Caption',
	blocks: [
		{
			name: 'core/audio',
			attributes: {
				src: 'https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/',
				caption: 'This is my short caption',
			},
			innerBlocks: []
		},
	],
} );