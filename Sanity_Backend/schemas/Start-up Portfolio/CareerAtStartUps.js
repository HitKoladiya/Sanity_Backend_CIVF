export default {
    name: 'careeratstartups',
    title: 'Career at Start-ups',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'mainImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'slug',
            title: 'Slug(Click on Generate and then Click on Publish.Make sure Slug was Unique for eachItem)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }
    ],
}
