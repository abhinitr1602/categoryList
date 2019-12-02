<template>
    <div class="full">
        <div class="col-lg-12 col-md-12 ccol-sm-12 col-xs-12 brd-bottom">
            <ul class="list-inline mobile-filter">
                <li>
                    <h4><b><i class="fa fa-sort"></i> Sort</b></h4>
                </li>
                <li >
                    <h4><b><i class="fa fa-filter"></i> Filter</b></h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        sortItem () {
            this.$store.commit(LOW_TO_HIGH, this.sortingValue)
        },
        filterItem () {
            this.$store.commit(LOW_TO_HIGH, this.sortingValue)
        }
    }
}
</script>
<style>
.mobile-filter {
    float:left;width:100%;
}
.brd-bottom {
    border-bottom: 1px solid lightgray;
    border-top: 1px solid lightgray;
    margin:5% 0;
}
ul.list-inline.mobile-filter li {
    width: 49%;
    text-align: center;
}
.mobile-filter li:nth-child(1) {
    border-right:1px solid lightgray;
}
</style>

