<template>
    <div class="content-page">
    
        <div class="content">
    
    
    
            <!-- Start Content-->
    
            <div class="container-fluid">
    
    
    
                <!-- start page title -->
    
                <div class="row">
    
                    <div class="col-12">
    
                        <div class="page-title-box">
    
                            <h4 class="page-title">List Account</h4>
    
                        </div>
    
                    </div>
    
                </div>
    
    
    
                <vue-good-table :columns="columns" :rows="data" :search-options="{enabled: true}" :pagination-options="{
    
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
    
                            <span v-if="props.column.field == 'image_perofile'">
    
                                <img :src="props.row.image_perofile" alt="" width="100px">
    
                            </span>
    
    
    
                             <span v-else-if="props.column.field == 'image_cover'">
    
                                <img :src="props.row.image_cover" alt="" width="100px">
    
                            </span>
    
    
    
                             <span v-else-if="props.column.field == 'action'">
    
                                 <router-link :to="{ name: 'account_edit', params: { id: props.row.id } }"><button class="btn btn-warning"><i class="mdi mdi-pencil"></i></button></router-link>
    
                                 <button class="btn btn-danger" @click="deleteProduct(props.row)"><i class="mdi mdi-delete"></i></button>
    
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

            // data: [],
            columns: [{
                    label: 'Id',
                    field: 'id',
                },
                {
                    label: 'Role_Id',
                    field: 'role_id',
                },
                {
                    label: 'Username',
                    field: 'username'
                },
                {
                    label: 'Image_Profile',
                    field: 'image_perofile',
                },
                {
                    label: 'Image_Cover',
                    field: 'image_cover'
                },
                {
                    label: 'Mobile_No',
                    field: 'mobile_no',
                },
                {
                    label: 'No_KTP',
                    field: 'no_ktp',
                },
                {
                    label: 'Address',
                    field: 'address',
                },
                {
                    label: 'Gender',
                    field: 'gender',
                },
                {
                    label: 'Birth_Date',
                    field: 'birth_date',
                },
                {
                    label: 'Birth_Place',
                    field: 'birth_place',
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: '120px'
                }

            ],           

        }
    },
    computed: {
        // rows() {
        //     return this.data.length
        // },
        data(){
            return this.$store.state.list;
        }


    },

    async mounted() {
        // this.load()
        this.$store.dispatch("listAccount");
    },
    methods: {

    

        deleteProduct(row) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    this.$swal('Deleted', 'You successfully deleted this file', 'success')
                    axios.delete('https://c2fc1e3ef947.ngrok.io/user/' + row.id + '/action/delete').then(res => {
                        // this.load()
                        let index = this.data.indexOf(row.name)
                        this.data.splice(index, 1)
                    })
                } else {
                    this.$swal('Cancelled', 'Your file is still intact', 'info')
                }
            })


        }

    }
}
</script>

<style>

</style>
