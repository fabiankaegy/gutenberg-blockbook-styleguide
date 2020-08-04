import {
	registerBlockStory,
} from 'blockbook-api';

registerBlockStory( 'core/code', {
	name: 'Code Block',
	blocks: [
        {
            name: 'core/code',
            attributes: {
                content: `
// A "block" is the abstract term used
// to describe units of markup that
// when composed together, form the
// content or layout of a page.
registerBlockType( name, settings );
`
            }
        }
	],
} );