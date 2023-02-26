<template>
<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
<!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
<div class="container">
      header="Bootstrap-Vue"
      lead="Bootstrap v4 Components for Vue.js 2"
    
      <p>Now running on @vue/compat and Vue.js 3</p>
      <button class="btn" @click="showModal"> Click me! </button>
  </div>

<div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="dropdown" data-bs-theme="light">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>  
<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
<div data-bs-theme="dark">
 <ul class="nav nav-pills" id="myTab" role="tablist" data-bs-theme="dark">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-theme="dark" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-theme="dark" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>
</div>
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style="background-color: blueviolet;">
    <p style="text-align: left;">home</p>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">123...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">456...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">789...</div>
</div>
    
</template>

<script>
export default {
 methods: {
   showModal() {
     this.$bvModal.msgBoxOk('Modal from @vue/compat');
   }  
 },
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
