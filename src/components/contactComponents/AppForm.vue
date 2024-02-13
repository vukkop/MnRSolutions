<template>
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">First name</label>
      <input type="text" class="form-control" id="validationCustom01" value="" required
      placeholder="First name">
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
        Please fill in your first name.
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" value="" required
      placeholder="Last name">
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
        Please fill in your last name.
      </div>
    </div>
    <div class="col-md-8">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" required id="exampleFormControlInput1"
        placeholder="name@example.com">
        <div class="valid-feedback">
        Looks good!
        </div>
        <div class="invalid-feedback">
          Please fill in correct email.
        </div>
    </div>


      <div class="col-md-8">
        <label for="exampleFormControlTextarea1" class="form-label" required>
          Tell us how we can help you
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
        ></textarea>
        <div class="valid-feedback">
        Looks good!
        </div>
        <div class="invalid-feedback">
          Please tell us how we can help you.
        </div>
      </div>




    <div class="col-12">
      <button class="btn btn-primary" type="submit">Send</button>
    </div>
  </form>
</template>

<script>
export default {
    name: 'Form'
}
</script>

<style scoped>
.btn.btn-primary{
  background-color: rgb(6, 153, 171);
  border-color: rgb(6, 153, 171);
}
.btn.btn-primary:hover{
  transition: 0.3s;
  background-color: rgb(69, 185, 201);
  border-color: rgb(69, 185, 201);

}
</style>
