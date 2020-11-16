<template>
  <div class="content-page">
    <div class="content">

      <!-- Start Content-->
      <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Users Donation by Donation ID</h4>
            </div>
          </div>
        </div>


        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-sm-4">

             <form @submit.prevent="cari">
                <div class="input-group mb-2 ">
                    <div class="custom-file">
                        <input type="number" v-model="id" class="form-control" placeholder="id" id="newTodo" required>                    
                       
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="sumbit">Search</button>
                    </div>
                </div>
            </form>
                    
                    <!-- <form @submit-prevent="search">
                        <input type="number" v-model="id" placeholder="Search By ID" >
                        <button type="submit" class="btn btn-primary">Find</button>
                    </form> -->
                  <!-- <button type="button" class="btn btn-danger waves-effect waves-light" data-toggle="modal"
                    data-target="#custom-modal">
                    <i class="mdi mdi-plus-circle mr-1"></i> Tambah Bencana </button> -->
                </div>
              </div>

              <vue-good-table :columns="columns" :rows="data" 
                
                 :pagination-options="{
                        enabled: true,
                        mode: 'records',
                        perPage: 5,
                        position: 'top',
                        perPageDropdown: [5, 10, 20],
                        dropdownAllowAll: false,
                        setCurrentPage: 2,
                        nextLabel: 'next',
                        prevLabel: 'prev',
                        rowsPerPageLabel: 'Rows per page',
                        ofLabel: 'of',
                        pageLabel: 'page', // for 'pages' mode
                        allLabel: 'All',
                    }">
                    <template slot="table-row" slot-scope="props">
                      
                        <span v-if="props.column.field == 'disaster_image'">
                            <img :src="props.row.disaster_image" alt="" height="50px">
                        </span>
                    </template>                                                
                </vue-good-table>
            </div> <!-- end card-body-->
          </div> <!-- end card-->
        </div> <!-- end col -->
      </div>

      <!-- end page title -->
      <!-- <div class="overflow-auto">
      
    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table     
      id="my-table"
      :items="data"
      :per-page="perPage"
      :current-page="currentPage"
      
    > </b-table>

     <b-pagination pills style="float:right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div> -->

    </div>
    <!-- container -->

  </div>
  <!-- content -->
</template>

<script>
  import axios from 'axios'

  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    data() {
      return {
       
        data: [],
        columns: [
                {
                    label: 'Id',
                    field: 'id',
                },
                {
                    label: 'Id User',
                    field: 'user_id',
                },
                {
                    label: 'Id Product',
                    field: 'product_id',
                },
                {
                    label: 'Type',
                    field: 'type',
                },
                {
                    label: 'Nominal',
                    field: 'nominal',
                },
                {
                    label: 'Donation Income',
                    field: 'donation_income' 
                },
                {
                    label: 'Donation Target',
                    field: 'donation_target',
                },
                {
                    label: 'Date',
                    field: 'donation_date'
                },
                {
                    label: 'Disaster Name',
                    field: 'disaster_name',
                },
                {
                    label: 'Description',
                    field: 'disaster_desc',
                },
                {
                    label: 'Story',
                    field: 'disaster_story',
                },
                {
                    label: 'Image',
                    field: 'disaster_image',
                },
                {
                    label: 'Latitude',
                    field: 'disaster_lat',
                },
                {
                    label: 'Longtitude',
                    field: 'disaster_lng',
                },
                {
                    label: 'Province',
                    field: 'disaster_province',
                },
                {
                    label: 'Notes',
                    field: 'disaster_notes',
                },
                {
                    label: 'Address',
                    field: 'disaster_address',
                },
                {
                    label: 'Mobile Number',
                    field: 'disaster_mobile_no',
                },
                {
                    label: 'Injured',
                    field: 'disaster_injured',
                },
                {
                    label: 'Died',
                    field: 'disaster_died',
                },
                {
                    label: 'Time',
                    field: 'disaster_time',
                },
                {
                    label: 'Status',
                    field: 'disaster_status',
                },
            ],
        id:''

      }
    },
    computed: {
      // ...mapState(['nama', 'data']),

      rows() {
        return this.data.length
      },

      
    },

    // async mounted() {
    //   this.cari()
    // },
    methods: {     

      async cari() {
        await axios.get('https://api-galangbantuan.matamantra.com/userdonation/user/'+this.id).then((response) => {
                   for (var i = 0; i < response.data.data.length; i += 1) {
                    response.data.data[i].disaster_notes = JSON.parse(response.data.data[i].disaster_notes)             
                    this.data.push(response.data.data[i]);
                }
            })
      },

    }
  }

</script>

<style>

</style>
