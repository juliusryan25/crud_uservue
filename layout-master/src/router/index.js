import Vue from 'vue';
import Router from 'vue-router';

//------------------------------Layout------------------------
import Navbar from '@/components/Layout/Navbar';
import LeftSidebar from '@/components/Layout/LeftSidebar.vue';
import RightSidebar from '@/components/Layout/RightSidebar.vue';
import Footer from '@/components/Layout/Footer';



//----------------------------Apps-------------
//User
import register from '@/components/apps/User/Register';
import account from '@/components/apps/User/account';
import account_edit from '@/components/apps/User/Account_edit';


//Donation
import donationbyid from '@/components/apps/Donation/donationbyid';
import donationProcess from '@/components/apps/Donation/donation-Proces';
import donationCompleted from '@/components/apps/Donation/donation-Completed';




Vue.use(Router);

export default new Router({
  routes: [

    //---------------Users---------
    {
      path: '/',
      name: 'List',
      components: {
        navbar: Navbar,
        default: register,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
   
  
    {
      path: '/Register',
      name: 'Register',
      components: {
        navbar: Navbar,
        default: register,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/account',
      name: 'account',
      components: {
        navbar: Navbar,
        default: account,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/account/edit/:id',
      name: 'account_edit',
      components: {
        navbar: Navbar,
        default: account_edit,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
   
   
   
    //-----------------Donation---------------
    {
      path: '/donationbyid',
      name: 'pagesStarter',
      components: {
        navbar: Navbar,
        default: donationbyid,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/donationProcess',
      name: 'pagesTimeline',
      components: {
        navbar: Navbar,
        default: donationProcess,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/donationCompleted',
      name: 'pagesSitemap',
      components: {
        navbar: Navbar,
        default: donationCompleted,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
     ],
});
