export default {
    name: 'home',
    title: 'Home',
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
        name: 'Startups',
        title: 'Startups',
        type: 'string',
        },
        {
        name: 'StudentsEducatedAboutStartups',
        title: 'Students educated about startups',
        type: 'string',
        },
        {
            name: 'JobsCreated',
            title: 'Jobs created',
            type: 'string',
            },
        {
            name: 'RevenueGeneratedByStartups',
            title: 'Revenue generated by startups',
            type: 'string',
            },
        {
            name: 'CoWorkingSeats',
            title: 'Co-working seats',
            type: 'string',
        },
        {
            name: 'ProductStartup',
            title: 'Product startup',
            type: 'string',
            },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    
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
  