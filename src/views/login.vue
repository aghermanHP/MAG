<template>
  <div>
     
  </div>
</template>

<script>
  export default {
    name: 'login',
   
    

      mounted () {
      
    },

    methods: {
      mounted(){},
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>