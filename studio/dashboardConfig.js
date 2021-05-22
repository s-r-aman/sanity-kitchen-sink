export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a967761fec17c979f0b36d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pvbehbep',
                  apiId: '7effab2c-86a1-4358-9b92-a3a12cf62696'
                },
                {
                  buildHookId: '60a967769972afaaf3367abc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-78r5q81q',
                  apiId: 'a1589cc9-6e79-4110-89f4-5b7fb79b3736'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/s-r-aman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-78r5q81q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
