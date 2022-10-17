export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    },
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
      title: 'Slug(Click on Generate and then Click on Publish)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
