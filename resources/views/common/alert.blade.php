<div class="row">
    <div class="col-lg-12">
        <div class="alert alert-{{isset($type) ? $type : 'info'}} alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <i class="fa fa-info-circle"></i> {!! isset($message) ? $message : '' !!}
        </div>
    </div>
</div>