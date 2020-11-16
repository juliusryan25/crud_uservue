rr<template>
<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
    <div class="h-100" data-simplebar>
        <!-- User box -->
        <div class="user-box text-center">
            <img src="../../assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle avatar-md">
            <div class="dropdown">
                <a href="javascript: void(0);" class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown">Geneva Kennedy</a>
                <div class="dropdown-menu user-pro-dropdown">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user mr-1"></i>
                        <span>My Account</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-settings mr-1"></i>
                        <span>Settings</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-lock mr-1"></i>
                        <span>Lock Screen</span>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
            <p class="text-muted">Admin Head</p>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <ul id="side-menu">                              
                <li class="menu-title mt-2">Users</li>
                <li>
                    <a href="#sidebarExpages" data-toggle="collapse">                        
                        <i class="mdi mdi-account"></i>
                        <span> Users </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarExpages">
                        <ul class="nav-second-level">
                             <li>
                                <router-link to='/register'>Register Account</router-link>
                            </li>    
                            <li>
                                <router-link to='/account'>List Account</router-link>
                            </li>                         
                        </ul>
                    </div>
                </li>
                 <li class="menu-title mt-2">Donation</li>
                <li>
                    <a href="#sidebarExpages2" data-toggle="collapse">                        
                        <i class="mdi mdi mdi-basket-unfill"></i>
                        <span> Donations </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarExpages2">
                        <ul class="nav-second-level">                           
                            <li>
                                <router-link to='/donationbyid'>Donation By User ID</router-link>
                            </li>                            
                             <li>
                                <router-link to='/donationProcess'>Donation Process</router-link>
                            </li>
                           <li>
                                <router-link to='/donationCompleted'>Donation Completed</router-link>
                            </li>
                        </ul>
                    </div>
                </li>

              

              

             

      

            

           

              
            </ul>
        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
</div>
<!-- Left Sidebar End -->
</template>

<script>
export default {}
</script>

<style>

</style>
