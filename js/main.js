var routeTest = new Vue({
    el: '#app'
})

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/faq',
      component: faq
    }
    {
      path: '/contact',
      component: contact
    }
    }
  ]
})
