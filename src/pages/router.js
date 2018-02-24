import Index from '@/pages/index'
import LoggedIn from '@/pages/access/loggedIn'
import NewSteemGig from '@/pages/platform/newSteemgig'
import NewGigRequest from '@/pages/platform/newGigRequest'
import NewTestimonial from '@/pages/platform/testimonial'
import Steemgigs from '@/pages/platform/steemgigs'
import Testimonials from '@/pages/platform/testimonials'
import GigRequests from '@/pages/platform/gigRequests'
import featured from '@/pages/platform/featured'
import UntalentedEditor from '@/pages/platform/untalentedEditor'
import Profile from '@/pages/platform/profile'
import GigDetail from '@/pages/platform/gigDetail'
import Categories from '@/pages/platform/category'
import SubCategories from '@/pages/platform/subcategory'

export default [
  {
    path: '/',
    name: 'STEEMGIGS | Home',
    component: Index
  },
  {
    path: '/categories/:category',
    name: 'STEEMGIGS | Categories',
    component: Categories
  },
  {
    path: '/categories/:category/:subcategory',
    name: 'STEEMGIGS | Subcategories',
    component: SubCategories
  },
  // TODO: Finish this
  {
    path: '/complete',
    name: 'STEEMGIGS | Logged in',
    component: LoggedIn
  },
  {
    path: '/testimonials',
    name: 'STEEMGIGS | Testimonials',
    component: Testimonials
  },
  {
    path: '/steemgigs',
    name: 'STEEMGIGS | gigs',
    component: Steemgigs
  },
  {
    path: '/requested_gigs',
    name: 'STEEMGIGS | Requested Gigs',
    component: GigRequests
  },
  {
    path: '/featured',
    name: 'STEEMGIGS | Featured',
    component: featured
  },
  {
    path: '/create_gig',
    name: 'STEEMGIGS | New Steemgig',
    component: NewSteemGig
  },
  {
    path: '/steemgigs_request',
    name: 'STEEMGIGS | Post Gig Request',
    component: NewGigRequest
  },
  {
    path: '/create_testimonial',
    name: 'STEEMGIGS | Post A Testimonial',
    component: NewTestimonial
  },
  {
    path: '/untalented_editor',
    name: 'STEEMGIGS | Untalented Editor',
    component: UntalentedEditor
  },
  {
    path: '/@:username',
    name: 'STEEMGIGS | Profile',
    component: Profile
  },
  {
    path: '/@:username/:task',
    name: 'STEEMGIGS | Task Detail',
    component: GigDetail
  },
  {
    path: '*',
    name: 'Not Found | bad Link',
    component: Index
  }
]
