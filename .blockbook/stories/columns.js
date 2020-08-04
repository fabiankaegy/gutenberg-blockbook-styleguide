import {
	registerBlockStory,
} from 'blockbook-api';

const shortColumn = {
    name: 'core/column',
    innerBlocks: [
        {
            name: 'core/heading',
            attributes: {
                content: 'Etiam ultricies nisi vel'
            }
        },
        {
            name: 'core/image',
            attributes: {
                url: 'https://images.unsplash.com/photo-1593772855551-b0e77f44d60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3416&q=80'
            }
        }
    ]
}

const longColumn = {
    name: 'core/column',
    innerBlocks: [
        {
            name: 'core/heading',
            attributes: {
                content: 'Etiam ultricies nisi vel'
            }
        },
        {
            name: 'core/image',
            attributes: {
                url: 'https://images.unsplash.com/photo-1594698434812-74ec71d6b95b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80'
            }
        }
    ]
}

registerBlockStory( 'core/columns', {
	name: 'Two Columns',
	blocks: [
        {
            name: 'core/columns',
            attributes: {},
            innerBlocks: [
                shortColumn,
                longColumn
            ]
        }
	],
} );

registerBlockStory( 'core/columns', {
	name: 'Two Columns Vertical Align',
	blocks: [
        {
            name: 'core/columns',
            attributes: {
                verticalAlignment: 'center'
            },
            innerBlocks: [
                shortColumn,
                longColumn
            ]
        }
	],
} );

registerBlockStory( 'core/columns', {
	name: 'Three Columns',
	blocks: [
        {
            name: 'core/columns',
            attributes: {},
            innerBlocks: [
                shortColumn,
                shortColumn,
                longColumn
            ]
        }
	],
} );

registerBlockStory( 'core/columns', {
	name: 'Four Columns',
	blocks: [
        {
            name: 'core/columns',
            attributes: {},
            innerBlocks: [
                shortColumn,
                shortColumn,
                longColumn,
                shortColumn
            ]
        }
	],
} );

registerBlockStory( 'core/columns', {
	name: 'Five Columns',
	blocks: [
        {
            name: 'core/columns',
            attributes: {},
            innerBlocks: [
                shortColumn,
                longColumn,
                shortColumn,
                longColumn,
                shortColumn
            ]
        }
	],
} );