import {
	registerBlockType,
} from 'blockbook-api';

// Register BlockBook blocks.
const coreBlocks = [
	'core/audio',
	'core/buttons',
	'core/code',
	'core/columns',
	'core/cover',
	'core/embed',
	'core/file',
	'core/gallery',
	'core/group',
	'core/heading',
	'core/html',
	'core/image',
	'core/list',
	'core/media-text',
	'core/paragraph',
	'core/preformatted',
	'core/pullquote',
	'core/quote',
	'core/search',
	'core/separator',
	'core/social-links',
	'core/spacer',
	'core/table',
	'core/verse',
	'core/video',
];
coreBlocks.forEach( ( block ) => registerBlockType( block ) );
