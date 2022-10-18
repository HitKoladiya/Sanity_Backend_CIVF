export default {
    name: 'activestartups',
    title: 'Active Start-ups',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'body',
            title: 'Description',
            type: 'blockContent',
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
