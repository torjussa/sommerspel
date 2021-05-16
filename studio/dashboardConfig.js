export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60a121f4fedaca2911d7a501',
                  title: 'Sanity Studio',
                  name: 'sommerspel-studio',
                  apiId: 'c77953b0-730b-4822-be15-46e6085436d3'
                },
                {
                  buildHookId: '60a121f41f3479f74d266d43',
                  title: 'Landing pages Website',
                  name: 'sommerspel',
                  apiId: 'f63ee32c-7639-40b7-809b-29c258d08587'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/torjussa/sommerspel',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sommerspel.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
