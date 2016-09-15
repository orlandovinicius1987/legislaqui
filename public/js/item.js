/**
 * Created by falbernaz on 13/09/2016.
 */

Vue.http.headers.common['X-CSRF-TOKEN'] = $("#token").attr("value");

new Vue({

    el: '#manage-vue',

    data: {
        items: [],
        pagination: {
            total: 0,
            per_page: 2,
            from: 1,
            to: 0,
            current_page: 1
        },
        offset: 4,
        formErrors:{},
        formErrorsUpdate:{},
        newItem : {'name':'','email':'', 'password':'', 'uf':'', 'role_id':'', 'cpf':'', 'uuid':''},
        fillItem : {'name':'','email':'','id':''}
    },

    computed: {
        isActived: function () {
            return this.pagination.current_page;
        },
        pagesNumber: function () {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

    ready : function(){
        this.getVueItems(this.pagination.current_page);
    },

    methods : {

        getVueItems: function(page){
            this.$http.get('/vueitems?page='+page).then((response) => {
                this.$set('items', response.data.data.data);
            this.$set('pagination', response.data.pagination);
        });
        },

        createUser: function(){
            var input = this.newItem;
            this.$http.post('/vueitems',input).then((response) => {
                this.changePage(this.pagination.current_page);
            this.newItem = {'name':'','email':'', 'password':'', 'uf':'', 'role_id':'', 'cpf':'', 'uuid':''};
            $("#create-item").modal('hide');
            toastr.success('User Created Successfully.', 'Success Alert', {timeOut: 3000});
        }, (response) => {
                this.formErrors = response.data;
            });
        },

        deleteItem: function(item){
            this.$http.delete('/vueitems/'+item.id).then((response) => {
                this.changePage(this.pagination.current_page);
            toastr.success('User Deleted Successfully.', 'Success Alert', {timeOut: 3000});
        });
        },

        editItem: function(item){
            this.fillItem.name = item.name;
            this.fillItem.id = item.id;
            this.fillItem.email = item.email;
            $("#edit-item").modal('show');
        },

        updateItem: function(id){
            var input = this.fillItem;
            this.$http.put('/vueitems/'+id,input).then((response) => {
                this.changePage(this.pagination.current_page);
            this.fillItem = {'name':'','email':'','id':''};
            $("#edit-item").modal('hide');
            toastr.success('User Updated Successfully.', 'Success Alert', {timeOut: 3000});
        }, (response) => {
                this.formErrorsUpdate = response.data;
            });
        },

        changePage: function (page) {
            this.pagination.current_page = page;
            this.getVueItems(page);
        }

    }

});
