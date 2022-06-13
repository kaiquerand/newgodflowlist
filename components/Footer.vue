<template lang='pug'>
footer
  ul
    li Latest projects / experiments

    li(v-for='project in projects')
      a(:href='project.fields.link' target='_blank') {{project.fields.title}} — {{project.fields.stack}}

    li All rights reserved — Newgodflow©
</template>

<script>
  import cms from '~/plugins/contentful'

  export default {
    data () {
      return {
        projects: null
      }
    },
    async fetch() {
      const response = await cms.getEntries({ content_type: 'cases' })
      if (response.items.length > 0) this.projects = response.items
    }
  }
</script>
