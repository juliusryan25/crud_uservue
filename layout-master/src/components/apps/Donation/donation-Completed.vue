<template>
    <div class="content-page">
        <div class="content">
    
            <!-- Start Content-->
            <div class="container-fluid">
    
                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <h4 class="page-title">Donation Completed</h4>
                        </div>
                    </div>
                </div>
    
                <vue-good-table :columns="columns" :rows="data" :search-options="{enabled: true}"
                
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



        
      </div>

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
                    label: 'Status',
                    field: 'disaster_status',
                },
            ]

        }
    },
    computed: {
        // ...mapState(['nama', 'data']),

        rows() {
            return this.data.length
        },


    },

    async mounted() {
        this.load()
    },
    methods: {

        async load() {
            await axios.get('https://api-galangbantuan.matamantra.com/donation/completed').then((response) => {
                   for (var i = 0; i < response.data.data.length; i += 1) {
                    response.data.data[i].disaster_notes;
                    
                    this.data.push(response.data.data[i]);
                }
            })
        },

    }
}
</script>

<style>

</style>
