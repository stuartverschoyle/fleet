export default {
    title: 'Fleet',
    name: 'fleet',
    type: 'document',
    fields: [
      {
        title: 'Range',
        name: 'range',
        type: 'string'
      },
      {
        title: 'Poster',
        name: 'poster',
        type: 'image'
      },
      {
        title: 'Aircraft',
        name: 'aircraft',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  }